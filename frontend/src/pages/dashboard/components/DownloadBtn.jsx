import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { getCellData, pollCellDataResult } from '../../../services/cell';
import { useState, useRef } from 'react';

function DownloadBtn({ cells, startDate, endDate }) {
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const timeoutRef = useRef(null);

  const INTERVAL = 2000;
  const BACKOFF = 2000;
  const MAX_POLL_DURATION = 120000; // 2 minute timeout

  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDownloadStatus(false);
  };

  const triggerDownload = (csvContent, fileName) => {
    // Validate content looks like CSV (should contain commas or newlines)
    if (
      typeof csvContent !== 'string' ||
      csvContent.trim().length === 0 ||
      (!csvContent.includes(',') && !csvContent.includes('\n'))
    ) {
      console.error('Invalid CSV content received');
      setErrorMsg('Downloaded content is not valid CSV');
      cleanup();
      return;
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setErrorMsg(null);
    cleanup();
  };

  const pollTaskStatus = async (taskId, fileName, pollDuration, startTime) => {
    // Check timeout
    if (Date.now() - startTime > MAX_POLL_DURATION) {
      console.error('CSV download timed out after', MAX_POLL_DURATION / 1000, 'seconds');
      setErrorMsg('Download timed out. Please try again.');
      cleanup();
      return;
    }

    try {
      const response = await pollCellDataResult(taskId);

      if (response.status === 'SUCCESS') {
        triggerDownload(response.result, fileName);
      } else if (response.status === 'ERROR') {
        console.error('CSV generation failed:', response.message);
        setErrorMsg(response.message || 'CSV generation failed');
        cleanup();
      } else {
        // PENDING or any other status — continue polling with backoff
        const nextDelay = Math.min(pollDuration + BACKOFF, 10000);
        timeoutRef.current = setTimeout(() => {
          pollTaskStatus(taskId, fileName, nextDelay, startTime);
        }, pollDuration);
      }
    } catch (error) {
      console.error('Error polling the task status', error);
      setErrorMsg('Network error while checking download status');
      cleanup();
    }
  };

  const downloadFile = () => {
    setErrorMsg(null);
    for (const { id, name } of cells) {
      setDownloadStatus(true);
      const fileName = name + '.csv';
      const resample = 'none';
      getCellData(id, resample, startDate, endDate)
        .then((data) => {
          const { result_id } = data;
          pollTaskStatus(result_id, fileName, INTERVAL, Date.now());
        })
        .catch((error) => {
          console.error('Error starting CSV download:', error);
          setErrorMsg('Failed to start download');
          cleanup();
        });
    }
  };

  const exportToCsv = (e) => {
    e.preventDefault();
    downloadFile();
  };

  return (
    <div className='DownloadBtn'>
      {downloadStatus ? (
        <Button disabled={true} variant='outlined' onClick={exportToCsv}>
          DOWNLOADING...
        </Button>
      ) : (
        <Button disabled={false} variant='outlined' onClick={exportToCsv}>
          {errorMsg ? 'Retry CSV Export' : 'Export to CSV'}
        </Button>
      )}
      {errorMsg && (
        <div style={{ color: 'red', fontSize: '0.75rem', marginTop: '4px' }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}

DownloadBtn.propTypes = {
  cells: PropTypes.array,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
  disabled: PropTypes.bool,
  setDBtnDisabled: PropTypes.func.isRequired,
};

export default DownloadBtn;
