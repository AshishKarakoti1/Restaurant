const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const {jwtAuthMiddleware, generateToken} = require('../jwt');

// POST route to add person
router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');

        const payload = {
            id: response.id,
            username: response.username
        }

        const token = generateToken(payload);
        console.log('Token is : ', token);

        res.status(200).json({response: response, token: token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// Login Route
router.post('/login', async (req, res) => {
    try {
        // Extract username and password
        const {username, password} = req.body;

        // find the user by username
        const user = await Person.findOne({username: username});

        if(!user || !(await user.comparePassword(password))) {
            return res.status(401).json({error: 'Invalid username or password'});
        }

        // generate token
        const payload = {
            id: user.id,
            username: user.username
        }

        const token = generateToken(payload);

        // return token as response
        res.json({token});

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
})

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.user;
        console.log('User Data : ', userData);

        const userId = userData.id;
        const user = await Person.findById(userId);

        res.status(200).json({user});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
})

// Get all person
router.get('/', jwtAuthMiddleware, async (req, res) => {
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