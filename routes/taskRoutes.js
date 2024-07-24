const express = require('express')
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.status(200).json(allTasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json({ task });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).json({ message: "added successfuly", task });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: "Updated successfuly", task });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted successfuly" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});



module.exports = router;