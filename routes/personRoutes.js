const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// POST route to add person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// Get all person
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// Find by work type
router.get('/:work', async (req, res) => {
    try {
        const workType = req.params.work;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'invalid work type'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// Update by id
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // extract the id from the URL parameter
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        });

        if(!response) {
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// Delete by id
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response) {
            return res.status(404).json({error: 'Person not found'});
        }

        console.log("data deleted");
        res.status(200).json({success: "person deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

module.exports = router;