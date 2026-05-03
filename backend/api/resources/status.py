from celery.result import AsyncResult
from flask_restful import Resource


class Status(Resource):
    def get(self, id: str) -> dict[str, object]:
        try:
            task = AsyncResult(id)
            if task.state == "FAILURE":
                message = str(task.result) if task.result else "Task failed"
                return {"status": "ERROR", "message": message}, 200
            elif task.state == "SUCCESS":
                return {"status": "SUCCESS", "result": task.result}, 200
            else:
                # PENDING, STARTED, RETRY, or any other state
                return {"status": "PENDING"}, 200
        except Exception as e:
            return {"status": "ERROR", "message": str(e)}, 200
