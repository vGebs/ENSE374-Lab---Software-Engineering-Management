const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController')

router.get('/todo', todoController.todo)
router.post('/addTask', todoController.addTask)
router.post('/claimTask', todoController.claimTask)
router.post('/abandonTask', todoController.abandonTask)
router.post('/completeTask', todoController.completeTask)
router.post('/unFinishTask', todoController.unFinishTask)
router.post('/purgeTasks', todoController.purgeTasks)

module.exports = router