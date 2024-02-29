const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        assignee: {
            type: String,
            required: true
        },
        assignedTo: {
            type: String,
            required: true
        },
        asset: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        instructions: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['todo', 'inProgress', 'completed'],
            required: true
        },
    }       
);

// Create a Task model from the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
