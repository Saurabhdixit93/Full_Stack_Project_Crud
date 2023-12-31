const { Router } = require("express");
const router = Router();
const {
  CreateTask,
  GetSpecificTask,
  GetAllTask,
  UpdateTask,
  DeleteTask,
  CompleteTask,
} = require("../controllers/TaskController");

router.post("/:userId/create_task", CreateTask);
router.get("/:userId/get_tasks", GetAllTask);
router.get("/get_specific_task/:taskId", GetSpecificTask);
router.put("/update_task/:taskId", UpdateTask);
router.delete("/delete_task/:taskId", DeleteTask);
router.put("/complete-task/:taskId", CompleteTask);

module.exports = router;
