const express = require("express");
const router = express.Router();
const controller = require('./todo-controllers')


router.get("/", controller.listTodoViewCon);

router.get("/addtodo", controller.addTodoViewCon);

router.get("/updatetodo", controller.updateTodoViewCon);

router.get("/deletetodo", controller.deleteTodoViewCon);

router.post("/addtodo", controller.addTodoFuncCon);

router.post("/updatetodo/:id", controller.updateTodoFuncCon );

router.get("/confirm-delete", controller.deleteTodoFuncCon);

module.exports = router;