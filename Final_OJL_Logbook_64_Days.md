# 📘 OJL Logbook (Final 64 Days Format)

---

## 📅 Day 1 — 2nd February 2026

**OJL Timing:** 3:30 PM – 6:30 PM<br>
**Department:** Computer Science Engineering<br>
**Designation:** Software Engineer Associate

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today was my first day in the Open Source track. I focused on setting up my complete development environment and understanding how real-world software projects are structured. I cloned the ENTS-backend repository and explored both frontend and backend directories. I carefully went through the README and project files to understand the purpose of the system, which is focused on environmental sensor data visualization. This gave me a strong base for future contributions. |

| Tasks Carried Out Today |
| :--- |
| • Installed Node.js, Python, Git, and VS Code  <br>• Cloned repository from GitHub  <br>• Explored project folder structure  <br>• Opened project in development environment |

| Key Learnings/Observations |
| :--- |
| • Importance of proper setup before development  <br>• Understanding project structure is crucial |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Git, GitHub, VS Code, Node.js, Python | Successfully ran the project locally for the first time  <br><br>--- |

---

## 📅 Day 2 — 3rd February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on understanding how frontend and backend communicate in a full-stack application. I studied how API calls are made using Axios and how responses are processed in React components. By inspecting network requests using browser DevTools, I was able to understand the flow of data and how the UI gets updated dynamically. |

| Tasks Carried Out Today |
| :--- |
| • Studied frontend API integration  <br>• Inspected network requests  <br>• Analyzed response handling |

| Key Learnings/Observations |
| :--- |
| • REST API fundamentals  <br>• Data flow between frontend and backend |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Axios, Chrome DevTools | Successfully traced API flow from frontend to backend  <br><br>--- |

---

## 📅 Day 3 — 4th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on debugging API-related issues. I used console logs and network inspection to identify mismatches in API responses. I realized how even small inconsistencies in responses can break frontend behavior. This helped me improve my debugging and problem-solving skills. |

| Tasks Carried Out Today |
| :--- |
| • Debugged API issues  <br>• Checked console logs  <br>• Verified API responses |

| Key Learnings/Observations |
| :--- |
| • Debugging workflow  <br>• Importance of logging |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools, VS Code | Identified API mismatch causing UI issue  <br><br>--- |

---

## 📅 Day 4 — 5th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on fixing environment configuration issues. I noticed that incorrect environment variables were causing API calls to fail. After updating configurations and restarting the server, the frontend successfully communicated with the backend. |

| Tasks Carried Out Today |
| :--- |
| • Fixed environment variables  <br>• Updated API base URL  <br>• Restarted development servers |

| Key Learnings/Observations |
| :--- |
| • Environment configuration management  <br>• Difference between dev and production setups |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Vite, Node.js | Successfully restored frontend-backend connection  <br><br>--- |

---

## 📅 Day 5 — 6th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I explored backend code to understand how APIs are structured. I analyzed routes, controllers, and how responses are generated. This helped me understand how frontend actions trigger backend processes.<br><br>Today I learned about asynchronous processing using Celery. I understood how background tasks are handled and why they are necessary for operations like CSV generation. This gave me insight into scalable backend design.<br><br>Today I started working on a real GitHub issue related to CSV downloads. I reproduced the issue locally and observed that the downloaded file contained "Pending..." instead of actual data. |

| Tasks Carried Out Today |
| :--- |
| • Explored backend routes  <br>• Studied API structure  <br>• Analyzed response formats<br><br>• Studied Celery workflow  <br>• Reviewed async task execution<br><br>• Reviewed GitHub issues  <br>• Selected CSV bug  <br>• Reproduced issue locally |

| Key Learnings/Observations |
| :--- |
| • Backend routing  <br>• API design basics<br><br>• Async programming  <br>• Task queue systems<br><br>• Issue reproduction process  <br>• Real-world debugging |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask<br>Celery, Redis<br>GitHub, VS Code | Understood backend workflow clearly  <br><br>---<br><br>Gained understanding of async architecture  <br><br>---<br><br>Successfully reproduced the bug  <br><br>--- |

---

## 📅 Day 6 — 9th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I analyzed the CSV bug in depth. I observed that the frontend was downloading data before backend processing completed. This highlighted a flaw in response handling logic. |

| Tasks Carried Out Today |
| :--- |
| • Tested CSV feature  <br>• Inspected API responses  <br>• Analyzed frontend behavior |

| Key Learnings/Observations |
| :--- |
| • Need for response validation  <br>• Async workflow issues |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools | Identified incorrect CSV behavior  <br><br>--- |

---

## 📅 Day 7 — 10th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I reviewed the frontend Download button logic. I found that it lacked validation and directly triggered downloads. This helped me understand how improper frontend checks can lead to incorrect output. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed DownloadBtn.jsx  <br>• Analyzed logic  <br>• Identified missing validation |

| Key Learnings/Observations |
| :--- |
| • Frontend validation importance  <br>• Async handling |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, JavaScript | Identified frontend logic flaw  <br><br>--- |

---

## 📅 Day 8 — 11th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I identified the root cause of the CSV issue. The problem was due to a mismatch in datetime formats between frontend and backend, causing validation failure. |

| Tasks Carried Out Today |
| :--- |
| • Analyzed backend parsing  <br>• Compared datetime formats |

| Key Learnings/Observations |
| :--- |
| • Importance of consistent data formats |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python | Root cause identified 🎯  <br><br>--- |

---

## 📅 Day 9 — 12th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I started implementing backend fixes by improving the status endpoint. I added proper error handling to ensure the system does not crash. |

| Tasks Carried Out Today |
| :--- |
| • Modified status endpoint  <br>• Added try/catch |

| Key Learnings/Observations |
| :--- |
| • API robustness |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask | Improved backend stability  <br><br>--- |

---

## 📅 Day 10 — 13th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I implemented structured API responses using PENDING, SUCCESS, and ERROR states.<br><br>Today I standardized datetime handling across the system using ISO format.<br><br>Today I implemented frontend polling to wait for backend processing. |

| Tasks Carried Out Today |
| :--- |
| • Updated API responses<br><br>• Updated datetime parsing<br><br>• Added polling logic |

| Key Learnings/Observations |
| :--- |
| • API design patterns<br><br>• Data consistency<br><br>• Async polling |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python<br>React | Improved response clarity  <br><br>---<br><br>Resolved datetime mismatch  <br><br>---<br><br>Improved frontend behavior  <br><br>--- |

---

## 📅 Day 11 — 16th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I added timeout handling and ensured invalid responses are not downloaded. |

| Tasks Carried Out Today |
| :--- |
| • Added timeout  <br>• Added validation |

| Key Learnings/Observations |
| :--- |
| • UX improvements |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| JavaScript | Prevented invalid CSV downloads<br><br># 📘 OJL Logbook (Batch 2)<br><br>--- |

---

## 📅 Day 12 — 17th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving the reliability of the CSV download process by ensuring that invalid or incomplete responses are not processed by the frontend. I carefully analyzed edge cases where backend responses might not be ready and added conditions to prevent premature downloads. This helped strengthen the overall robustness of the system. |

| Tasks Carried Out Today |
| :--- |
| • Added response validation logic  <br>• Handled incomplete API responses  <br>• Tested edge scenarios |

| Key Learnings/Observations |
| :--- |
| • Importance of validation in async systems  <br>• Handling partial data responses |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, JavaScript, DevTools | Successfully blocked invalid CSV downloads  <br><br>--- |

---

## 📅 Day 13 — 18th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving the structure of the CSV output. Previously, the data was not organized properly, making it difficult to read. I updated the formatting so that each sensor value appears in its own column with clear headers. This improved usability and readability. |

| Tasks Carried Out Today |
| :--- |
| • Updated CSV formatting  <br>• Added proper headers  <br>• Verified output structure |

| Key Learnings/Observations |
| :--- |
| • Data formatting principles  <br>• Importance of readability |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, CSV module | Improved CSV structure significantly  <br><br>--- |

---

## 📅 Day 14 — 19th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on testing various edge cases related to CSV downloads. I tested scenarios such as empty datasets, invalid date ranges, and delayed responses. This helped ensure that the system behaves correctly under all conditions. |

| Tasks Carried Out Today |
| :--- |
| • Tested empty data scenarios  <br>• Tested invalid inputs  <br>• Verified error handling |

| Key Learnings/Observations |
| :--- |
| • Edge case testing  <br>• Defensive programming |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools, Backend API | Validated system behavior under multiple scenarios  <br><br>--- |

---

## 📅 Day 15 — 20th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on optimizing backend performance for CSV generation. I analyzed query execution and reduced unnecessary processing steps. This improved response time and efficiency of the system.<br><br>Today I verified the complete CSV download flow from start to finish. I tested the system multiple times and ensured that all issues were resolved. The feature now works as expected, with correct data being downloaded.<br><br>Today I shifted focus toward improving overall system stability. I reviewed existing code and identified minor bugs affecting UI behavior. Fixing these helped enhance the user experience. |

| Tasks Carried Out Today |
| :--- |
| • Optimized backend queries  <br>• Reduced processing overhead  <br>• Tested performance<br><br>• End-to-end testing  <br>• Verified CSV output  <br>• Checked UI behavior<br><br>• Fixed minor frontend bugs  <br>• Improved UI responsiveness  <br>• Refactored small components |

| Key Learnings/Observations |
| :--- |
| • Performance optimization  <br>• Efficient backend design<br><br>• Integration testing  <br>• System validation<br><br>• Code refinement  <br>• UI optimization |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask<br>React, Python, DevTools<br>React, VS Code | Improved response speed  <br><br>---<br><br>Successfully completed CSV bug fix 🎯  <br><br>---<br><br>Improved UI performance  <br><br>--- |

---

## 📅 Day 16 — 23rd February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving error handling in frontend components. I ensured that errors are properly displayed to users instead of failing silently. This made the application more user-friendly. |

| Tasks Carried Out Today |
| :--- |
| • Added error handling  <br>• Improved user feedback  <br>• Tested error scenarios |

| Key Learnings/Observations |
| :--- |
| • User experience design  <br>• Error handling techniques |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, JavaScript  <br>--- | - |

---

## 📅 Day 17 — 24th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I reviewed API response structures to ensure consistency across all endpoints. I made small adjustments to maintain uniformity, which helps prevent frontend errors. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed API responses  <br>• Standardized data format |

| Key Learnings/Observations |
| :--- |
| • API consistency  <br>• Data contract importance |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask  <br>--- | - |

---

## 📅 Day 18 — 25th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on debugging issues related to navigation and component rendering. I ensured that user actions trigger the correct UI updates. |

| Tasks Carried Out Today |
| :--- |
| • Debugged navigation issues  <br>• Fixed rendering bugs |

| Key Learnings/Observations |
| :--- |
| • Component lifecycle  <br>• State management |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React  <br>--- | - |

---

## 📅 Day 19 — 26th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving code readability by cleaning up unnecessary logic and organizing functions properly. This makes future development easier. |

| Tasks Carried Out Today |
| :--- |
| • Refactored code  <br>• Removed redundant logic |

| Key Learnings/Observations |
| :--- |
| • Clean code practices |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| VS Code  <br>--- | - |

---

## 📅 Day 20 — 27th February 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on testing the application across different conditions to ensure stability. I verified that all major features work correctly.<br><br>Today I worked on improving frontend responsiveness and layout behavior to ensure smooth user interaction.<br><br>Today I continued refining frontend components and ensuring smooth integration with backend APIs. |

| Tasks Carried Out Today |
| :--- |
| • Functional testing  <br>• Debugging<br><br>• Improved UI layout  <br>• Fixed responsiveness<br><br>• Updated components  <br>• Verified API integration |

| Key Learnings/Observations |
| :--- |
| • Testing strategies<br><br>• UI design principles<br><br>• Component design  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools  <br>---<br>React, CSS   | - |

---

## 📅 Day 21 — 2nd March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving API validation and ensuring proper handling of invalid inputs. |

| Tasks Carried Out Today |
| :--- |
| • Added validation checks  <br>• Tested inputs |

| Key Learnings/Observations |
| :--- |
| • Input validation  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 22 — 3rd March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I reviewed the entire system to ensure stability and correctness. I fixed minor issues found during testing. |

| Tasks Carried Out Today |
| :--- |
| • Final testing  <br>• Bug fixes |

| Key Learnings/Observations |
| :--- |
| • System review |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | Improved overall system stability  <br><br># 📘 OJL Logbook (Batch 3 — Detailed)<br><br>--- |

---

## 📅 Day 23 — 4th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on analyzing the complete frontend-backend integration after implementing the CSV fixes. I carefully observed how API responses are handled across different components and ensured that data consistency is maintained throughout the application. I also revisited previously modified logic to confirm that no regression issues were introduced. This helped me strengthen my understanding of maintaining stability while making iterative improvements. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed API integration across components  <br>• Checked consistency of backend responses  <br>• Verified previously fixed CSV logic  <br>• Tested navigation between modules |

| Key Learnings/Observations |
| :--- |
| • Importance of regression testing  <br>• Maintaining data consistency across modules |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask, Chrome DevTools, VS Code | Ensured stable integration after major bug fix  <br><br>--- |

---

## 📅 Day 24 — 5th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on enhancing frontend state management and ensuring that UI updates occur smoothly when data changes. I analyzed how state transitions impact rendering and optimized certain components to reduce unnecessary re-renders. This improved overall application responsiveness. |

| Tasks Carried Out Today |
| :--- |
| • Optimized component rendering  <br>• Improved state updates  <br>• Reduced redundant re-renders |

| Key Learnings/Observations |
| :--- |
| • React state management  <br>• Performance optimization |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, JavaScript | Improved frontend performance  <br><br>--- |

---

## 📅 Day 25 — 6th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving error handling across the application. I ensured that API errors are properly captured and displayed to users. Instead of silent failures, meaningful messages are now shown, improving user experience.<br><br>Today I revisited backend logic to improve validation mechanisms. I ensured that incorrect or malformed inputs are handled gracefully without causing system crashes.<br><br>Today I worked on refining the CSV generation logic further by ensuring consistent formatting across all data points. I verified that sensor data aligns correctly with headers and timestamps. |

| Tasks Carried Out Today |
| :--- |
| • Implemented error handling  <br>• Displayed error messages in UI  <br>• Tested failure scenarios<br><br>• Improved input validation  <br>• Added checks for invalid data<br><br>• Verified CSV alignment  <br>• Tested multiple datasets |

| Key Learnings/Observations |
| :--- |
| • UX improvement through feedback  <br>• Handling API failures<br><br>• Defensive programming  <br>• Backend validation strategies<br><br>• Data consistency  <br>• Structured output handling  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Axios  <br>---<br>Python, Flask   | - |

---

## 📅 Day 26 — 9th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving debugging efficiency by using advanced DevTools features such as breakpoints and network filtering. This helped in faster issue identification. |

| Tasks Carried Out Today |
| :--- |
| • Used breakpoints  <br>• Analyzed network logs |

| Key Learnings/Observations |
| :--- |
| • Advanced debugging tools |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Chrome DevTools  <br>--- | - |

---

## 📅 Day 27 — 10th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving frontend navigation logic. I ensured that routing between pages works correctly without unnecessary reloads. |

| Tasks Carried Out Today |
| :--- |
| • Fixed routing issues  <br>• Improved navigation flow |

| Key Learnings/Observations |
| :--- |
| • SPA routing concepts |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React Router  <br>--- | - |

---

## 📅 Day 28 — 11th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I tested application behavior under slow network conditions to evaluate performance and responsiveness. |

| Tasks Carried Out Today |
| :--- |
| • Simulated slow network  <br>• Tested API delays |

| Key Learnings/Observations |
| :--- |
| • Handling latency  <br>• Performance testing  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 29 — 12th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving code readability by restructuring functions and organizing code blocks logically. |

| Tasks Carried Out Today |
| :--- |
| • Refactored functions  <br>• Improved code structure |

| Key Learnings/Observations |
| :--- |
| • Clean code principles  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 30 — 13th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I performed integration testing to ensure all components work together correctly.<br><br>Today I explored performance optimization techniques for backend APIs and reduced response time.<br><br>Today I ensured consistent API contracts across endpoints to prevent frontend issues. |

| Tasks Carried Out Today |
| :--- |
| • Integration testing  <br>• Fixed minor bugs<br><br>• Optimized API responses  <br>• Reduced latency<br><br>• Standardized API responses |

| Key Learnings/Observations |
| :--- |
| • System-level testing  <br><br>---<br><br>• Backend optimization  <br><br>---<br><br>• API contract importance  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 31 — 16th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on UI improvements by enhancing layout and visual consistency. |

| Tasks Carried Out Today |
| :--- |
| • Improved UI design  <br>• Fixed layout issues |

| Key Learnings/Observations |
| :--- |
| • UI/UX principles  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 32 — 17th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on logging mechanisms to track application behavior and errors. |

| Tasks Carried Out Today |
| :--- |
| • Added logs  <br>• Monitored errors |

| Key Learnings/Observations |
| :--- |
| • Logging strategies  <br><br>--- |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | - |

---

## 📅 Day 33 — 18th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I reviewed the complete system again and ensured all improvements are stable and consistent. |

| Tasks Carried Out Today |
| :--- |
| • Full system review  <br>• Minor fixes |

| Key Learnings/Observations |
| :--- |
| • Continuous improvement |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| - | Stabilized system after multiple enhancements  <br><br># 📘 OJL Logbook (Corrected — Day 46 to Day 60)<br><br>--- |

---

## 📅 Day 34 — 19th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving the maintainability of the frontend codebase by identifying repeated logic across multiple components. I carefully analyzed similar patterns and refactored them into reusable functions to reduce redundancy. This made the code more modular and easier to manage for future updates. |

| Tasks Carried Out Today |
| :--- |
| • Identified duplicate logic in components  <br>• Refactored reusable functions  <br>• Improved code structure |

| Key Learnings/Observations |
| :--- |
| • DRY (Don't Repeat Yourself) principle  <br>• Importance of modular design |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, JavaScript, VS Code | Reduced code redundancy and improved maintainability  <br><br>--- |

---

## 📅 Day 35 — 20th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving error handling across the application by ensuring backend errors are properly reflected in the frontend. I aligned API responses with UI handling logic so that users receive meaningful feedback instead of silent failures.<br><br>Today I focused on strengthening backend validation logic to ensure that only valid data is processed. I added additional checks to prevent incorrect inputs from causing runtime issues.<br><br>Today I optimized frontend rendering performance by minimizing unnecessary component re-renders. I analyzed state updates and ensured that components only update when required. |

| Tasks Carried Out Today |
| :--- |
| • Improved error propagation  <br>• Updated UI error messages  <br>• Tested API failure scenarios<br><br>• Added validation rules  <br>• Tested invalid input cases  <br>• Improved backend checks<br><br>• Optimized rendering logic  <br>• Controlled state updates  <br>• Reduced re-renders |

| Key Learnings/Observations |
| :--- |
| • Cross-layer error handling  <br>• User-friendly error reporting<br><br>• Input validation strategies  <br>• Preventing invalid states<br><br>• React performance optimization  <br>• Efficient state management |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask, Axios<br>Python, Flask<br>React | Enhanced visibility of system errors  <br><br>---<br><br>Improved backend data validation  <br><br>---<br><br>Improved frontend performance  <br><br>--- |

---

## 📅 Day 36 — 23rd March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I tested the application under simulated high-load conditions to understand how it performs under stress. I monitored system responsiveness and identified minor delays. |

| Tasks Carried Out Today |
| :--- |
| • Simulated heavy usage  <br>• Monitored performance  <br>• Identified bottlenecks |

| Key Learnings/Observations |
| :--- |
| • Load testing basics  <br>• Performance bottlenecks |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools | Identified performance improvement areas  <br><br>--- |

---

## 📅 Day 37 — 24th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I implemented logging in backend services to track execution flow and errors. This helps in debugging and understanding system behavior more effectively. |

| Tasks Carried Out Today |
| :--- |
| • Added logging statements  <br>• Tracked API execution  <br>• Monitored logs |

| Key Learnings/Observations |
| :--- |
| • Logging strategies  <br>• Debugging support systems |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python | Improved debugging capability through logs  <br><br>--- |

---

## 📅 Day 38 — 25th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on standardizing data handling across the application to ensure consistent formats and naming conventions. This reduces confusion and improves maintainability. |

| Tasks Carried Out Today |
| :--- |
| • Standardized data structures  <br>• Fixed inconsistencies  <br>• Reviewed naming conventions |

| Key Learnings/Observations |
| :--- |
| • Data normalization  <br>• Consistency in design |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, React | Achieved consistent data structure  <br><br>--- |

---

## 📅 Day 39 — 26th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I improved frontend feedback mechanisms by adding loading indicators and clearer messages for users. This enhances the user experience during operations. |

| Tasks Carried Out Today |
| :--- |
| • Added loading indicators  <br>• Improved user feedback  <br>• Tested UI states |

| Key Learnings/Observations |
| :--- |
| • UX improvement techniques  <br>• Feedback importance |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React | Enhanced user experience  <br><br>--- |

---

## 📅 Day 40 — 27th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I optimized API usage by reducing redundant calls and improving efficiency in data fetching. This reduced unnecessary network traffic.<br><br>Today I focused on documenting complex parts of the codebase to improve readability and understanding for future contributors.<br><br>Today I tested frontend components individually to ensure each component behaves correctly in isolation. |

| Tasks Carried Out Today |
| :--- |
| • Reduced duplicate API calls  <br>• Optimized data fetching  <br>• Improved efficiency<br><br>• Added comments  <br>• Documented functions  <br>• Explained logic<br><br>• Component testing  <br>• Fixed minor bugs  <br>• Verified outputs |

| Key Learnings/Observations |
| :--- |
| • Efficient API usage  <br>• Network optimization<br><br>• Documentation practices  <br>• Knowledge sharing<br><br>• Component-level testing  <br>• Debugging small modules |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Axios<br>VS Code<br>React | Reduced unnecessary API calls  <br><br>---<br><br>Improved code documentation  <br><br>---<br><br>Ensured reliable component behavior  <br><br>--- |

---

## 📅 Day 41 — 30th March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I improved backend reliability by handling unexpected errors and ensuring the system responds gracefully under failure conditions. |

| Tasks Carried Out Today |
| :--- |
| • Added exception handling  <br>• Improved error responses  <br>• Tested failures |

| Key Learnings/Observations |
| :--- |
| • Fault tolerance  <br>• Backend robustness |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask | Improved backend stability  <br><br>--- |

---

## 📅 Day 42 — 31st March 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I optimized backend processing by removing unnecessary computations and improving logic flow to increase efficiency. |

| Tasks Carried Out Today |
| :--- |
| • Optimized processing logic  <br>• Reduced redundant operations |

| Key Learnings/Observations |
| :--- |
| • Efficiency optimization  <br>• Backend tuning |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python | Improved processing efficiency  <br><br>--- |

---

## 📅 Day 43 — 1st April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I performed a system-wide review to ensure consistency and correctness after multiple updates. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed system  <br>• Verified features  <br>• Fixed minor issues |

| Key Learnings/Observations |
| :--- |
| • System-level validation |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask | Ensured system consistency  <br><br>--- |

---

## 📅 Day 44 — 2nd April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I conducted final validation of the system to ensure all features are working correctly after optimizations and improvements. |

| Tasks Carried Out Today |
| :--- |
| • Performed full testing  <br>• Verified features  <br>• Checked stability |

| Key Learnings/Observations |
| :--- |
| • Final validation process |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Python, DevTools | Achieved stable and optimized system performance  <br><br># 📘 OJL Logbook (Corrected Format — Day 61 to Day 70)<br><br>--- |

---

## 📅 Day 45 — 3rd April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on reviewing the overall performance of the application after implementing multiple optimizations. I carefully analyzed how different components interact and ensured that data flow remains consistent across the system. I also verified that previous bug fixes, especially related to CSV downloads, continue to work correctly without introducing any regression issues.<br><br>Today I worked on strengthening frontend error handling mechanisms to prevent unexpected crashes. I implemented safeguards to ensure that even if an API fails, the UI remains stable and displays meaningful messages to users.<br><br>Today I focused on ensuring consistency in backend API responses. I verified that all endpoints return properly structured data and follow a uniform response format to avoid frontend issues. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed application performance  <br>• Tested frontend-backend interaction  <br>• Verified CSV download functionality  <br>• Checked for regression issues<br><br>• Implemented error handling in UI  <br>• Tested failure scenarios  <br>• Improved error messages<br><br>• Reviewed API responses  <br>• Standardized response formats  <br>• Fixed inconsistencies |

| Key Learnings/Observations |
| :--- |
| • Importance of regression testing  <br>• Maintaining consistency after changes<br><br>• UI resilience techniques  <br>• Handling unexpected failures<br><br>• Importance of API contracts  <br>• Backend consistency |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask, Chrome DevTools, VS Code<br>React, JavaScript, Axios<br>Python, Flask | Successfully ensured stable system behavior after multiple fixes  <br><br>---<br><br>Improved application stability under failure conditions  <br><br>---<br><br>Achieved consistent API behavior across endpoints  <br><br>--- |

---

## 📅 Day 46 — 6th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on enhancing user experience by refining UI transitions and improving feedback messages during loading and processing states. This made the application feel smoother and more responsive. |

| Tasks Carried Out Today |
| :--- |
| • Improved UI transitions  <br>• Added loading indicators  <br>• Refined feedback messages |

| Key Learnings/Observations |
| :--- |
| • UX improvement strategies  <br>• User feedback importance |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, CSS | Enhanced overall UI responsiveness  <br><br>--- |

---

## 📅 Day 47 — 7th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I conducted detailed testing for edge cases to ensure the system behaves correctly under unexpected inputs. This included testing invalid date ranges and missing parameters. |

| Tasks Carried Out Today |
| :--- |
| • Tested edge cases  <br>• Validated input handling  <br>• Verified system behavior |

| Key Learnings/Observations |
| :--- |
| • Defensive programming  <br>• Edge case handling |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools, Backend APIs | Ensured system reliability under unusual scenarios  <br><br>--- |

---

## 📅 Day 48 — 8th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on optimizing API calls to reduce redundant requests and improve performance. I ensured that data fetching is efficient and avoids unnecessary repetition. |

| Tasks Carried Out Today |
| :--- |
| • Optimized API requests  <br>• Reduced redundant calls  <br>• Improved data fetching logic |

| Key Learnings/Observations |
| :--- |
| • Efficient API usage  <br>• Performance optimization |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Axios | Reduced unnecessary network calls  <br><br>--- |

---

## 📅 Day 49 — 9th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving application responsiveness by optimizing component rendering and minimizing delays. I ensured smooth user interaction across the interface. |

| Tasks Carried Out Today |
| :--- |
| • Optimized rendering logic  <br>• Improved UI responsiveness  <br>• Reduced lag |

| Key Learnings/Observations |
| :--- |
| • Rendering optimization  <br>• Performance tuning |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React | Improved user interaction speed  <br><br>--- |

---

## 📅 Day 50 — 10th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I enhanced backend exception handling to ensure that unexpected errors do not crash the application. I added fallback responses to maintain stability.<br><br>Today I verified the accuracy of CSV generation across multiple datasets to ensure consistency and correctness in output.<br><br>Today I worked on improving code readability by simplifying complex logic and organizing functions for better clarity. |

| Tasks Carried Out Today |
| :--- |
| • Added exception handling  <br>• Improved error responses  <br>• Tested failure cases<br><br>• Tested CSV generation  <br>• Verified data accuracy  <br>• Checked formatting<br><br>• Refactored code  <br>• Simplified logic  <br>• Improved readability |

| Key Learnings/Observations |
| :--- |
| • Robust backend design  <br>• Error resilience<br><br>• Data validation  <br>• Accuracy verification<br><br>• Clean code principles  <br>• Code maintainability |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask<br>Python, DevTools<br>VS Code, JavaScript | Improved backend fault tolerance  <br><br>---<br><br>Confirmed CSV correctness across datasets  <br><br>---<br><br>Enhanced code clarity  <br><br># 📘 OJL Logbook (Corrected Format — Day 71 to Day 88)<br><br>--- |

---

## 📅 Day 51 — 13th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on performing integration testing across multiple modules to ensure seamless communication between frontend and backend components. I carefully verified that API responses are correctly mapped to UI elements and that no inconsistencies occur during data rendering. This helped in identifying minor mismatches which were resolved to improve overall system reliability. |

| Tasks Carried Out Today |
| :--- |
| • Performed integration testing  <br>• Verified API-to-UI mapping  <br>• Fixed minor inconsistencies  <br>• Tested module interactions |

| Key Learnings/Observations |
| :--- |
| • Importance of integration testing  <br>• Ensuring smooth module interaction |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask, DevTools, VS Code | Achieved smooth integration across multiple modules  <br><br>--- |

---

## 📅 Day 52 — 14th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I analyzed application logs to detect hidden issues and performance bottlenecks. By carefully reviewing logs, I was able to identify areas where unnecessary processing occurred and made improvements to optimize execution flow. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed system logs  <br>• Identified bottlenecks  <br>• Optimized execution flow |

| Key Learnings/Observations |
| :--- |
| • Log analysis techniques  <br>• Identifying hidden performance issues |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Logging tools, VS Code | Improved system efficiency through log-based analysis  <br><br>--- |

---

## 📅 Day 53 — 15th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I worked on improving UI consistency across different components. I aligned styles, fixed layout mismatches, and ensured that the application maintains a uniform design throughout. |

| Tasks Carried Out Today |
| :--- |
| • Fixed UI inconsistencies  <br>• Updated styles  <br>• Improved layout alignment |

| Key Learnings/Observations |
| :--- |
| • Importance of consistent UI design  <br>• Attention to detail in frontend |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, CSS | Achieved uniform UI across application  <br><br>--- |

---

## 📅 Day 54 — 16th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving API reliability by handling rare failure conditions. I ensured that even unexpected scenarios are handled gracefully without breaking the system. |

| Tasks Carried Out Today |
| :--- |
| • Handled rare API failures  <br>• Improved fallback responses  <br>• Tested failure cases |

| Key Learnings/Observations |
| :--- |
| • Reliability engineering  <br>• Handling rare edge conditions |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, Flask | Enhanced API reliability under edge cases  <br><br>--- |

---

## 📅 Day 55 — 17th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I conducted long-duration testing to ensure system stability under continuous usage. I monitored performance and verified that no memory leaks or crashes occurred.<br><br>Today I reviewed frontend components and improved their structure for better maintainability. I ensured that each component follows clear responsibilities and is easy to update.<br><br>Today I worked on improving backend data handling to ensure consistency and correctness across all operations. I verified that all transformations and calculations are accurate. |

| Tasks Carried Out Today |
| :--- |
| • Performed long-duration testing  <br>• Monitored system performance  <br>• Checked stability<br><br>• Refactored components  <br>• Improved structure  <br>• Simplified logic<br><br>• Reviewed data handling logic  <br>• Verified transformations  <br>• Fixed inconsistencies |

| Key Learnings/Observations |
| :--- |
| • Importance of endurance testing  <br>• Stability verification<br><br>• Component-based design  <br>• Maintainable architecture<br><br>• Data integrity  <br>• Backend processing logic |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools, React<br>React, VS Code<br>Python, Flask | Confirmed stable performance under continuous usage  <br><br>---<br><br>Improved maintainability of frontend code  <br><br>---<br><br>Ensured accurate backend data processing  <br><br>--- |

---

## 📅 Day 56 — 20th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on improving project documentation to make the system easier to understand for future contributors. I added explanations for complex logic and clarified workflows. |

| Tasks Carried Out Today |
| :--- |
| • Updated documentation  <br>• Added code comments  <br>• Explained workflows |

| Key Learnings/Observations |
| :--- |
| • Importance of documentation  <br>• Knowledge sharing |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Markdown, VS Code | Improved project readability for contributors  <br><br>--- |

---

## 📅 Day 57 — 21st April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I conducted full system testing to ensure all features are working correctly after multiple updates. I verified each functionality step by step. |

| Tasks Carried Out Today |
| :--- |
| • Performed end-to-end testing  <br>• Verified features  <br>• Fixed minor issues |

| Key Learnings/Observations |
| :--- |
| • End-to-end validation  <br>• System-level testing |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Python, DevTools | Confirmed system functionality across all modules  <br><br>--- |

---

## 📅 Day 58 — 22nd April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I focused on optimizing application flow to ensure smooth transitions and faster responses. I removed delays and improved navigation logic. |

| Tasks Carried Out Today |
| :--- |
| • Optimized workflow  <br>• Improved navigation  <br>• Reduced delays |

| Key Learnings/Observations |
| :--- |
| • Workflow optimization  <br>• Performance tuning |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React | Improved overall application flow  <br><br>--- |

---

## 📅 Day 59 — 23rd April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I reviewed all implemented features to ensure consistency across the application. I ensured that similar functionalities behave uniformly. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed features  <br>• Ensured consistency  <br>• Fixed inconsistencies |

| Key Learnings/Observations |
| :--- |
| • Consistency in application behavior |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Flask | Achieved uniform behavior across features  <br><br>--- |

---

## 📅 Day 60 — 24th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I finalized testing of the CSV download feature and ensured accuracy across all scenarios.<br><br>Today I cleaned up the codebase by removing unused logic and optimizing existing code for better clarity.<br><br>Today I reviewed the entire project to ensure it is ready for final submission and meets all requirements. |

| Tasks Carried Out Today |
| :--- |
| • Validated CSV output  <br>• Tested multiple datasets<br><br>• Removed unused code  <br>• Cleaned logic  <br>• Organized files<br><br>• Performed final review  <br>• Checked completeness |

| Key Learnings/Observations |
| :--- |
| • Final validation process<br><br>• Code hygiene<br><br>• Final validation mindset |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Python, DevTools<br>VS Code<br>VS Code, Git | Confirmed CSV feature works flawlessly  <br><br>---<br><br>Improved codebase cleanliness  <br><br>---<br><br>Confirmed project readiness  <br><br>--- |

---

## 📅 Day 61 — 27th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I ensured all bugs are resolved and verified system stability one last time. |

| Tasks Carried Out Today |
| :--- |
| • Verified bug fixes  <br>• Checked stability |

| Key Learnings/Observations |
| :--- |
| • Stability assurance |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| DevTools | Achieved fully stable system  <br><br>--- |

---

## 📅 Day 62 — 28th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I prepared final documentation summarizing the work done during the OJL period. |

| Tasks Carried Out Today |
| :--- |
| • Wrote documentation  <br>• Summarized work |

| Key Learnings/Observations |
| :--- |
| • Effective summarization |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| Markdown | Completed project documentation  <br><br>--- |

---

## 📅 Day 63 — 29th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today I performed final system validation and ensured that all features are functioning perfectly without errors. |

| Tasks Carried Out Today |
| :--- |
| • Final validation  <br>• Checked all features |

| Key Learnings/Observations |
| :--- |
| • End-to-end verification |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Python | Verified complete system functionality  <br><br>--- |

---

## 📅 Day 64 — 30th April 2026

| MY SPACE (My thoughts / My Sketch / My Notes / Things to Remember) |
| :--- |
| Today marked the successful completion of my OJL journey. I reflected on the entire process, from understanding the project to fixing critical bugs and improving system performance. This experience significantly enhanced my full-stack development skills and problem-solving ability. |

| Tasks Carried Out Today |
| :--- |
| • Reviewed complete work  <br>• Summarized learnings |

| Key Learnings/Observations |
| :--- |
| • Full-stack development experience  <br>• Real-world debugging skills |

| Tools, Equipment, Technology or Techniques Used | Special Achievements |
| :--- | :--- |
| React, Python, Git | Successfully completed OJL and contributed to open-source project 🚀 |

---

