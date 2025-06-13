const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');
const { replaceOne } = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy') {
            const response = await MenuItem.find({taste: tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'invalid taste type'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const updatedMenuItem = req.body;
        
        const response = await MenuItem.findByIdAndUpdate(itemId, updatedMenuItem, {
            new: true,
            runValidators: true
        })

        if(!response) {
            return res.status(404).json({error: 'menu item not found'})
        }

        console.log('menu item updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(itemId);
        
        if(!response) {
            return res.status(404).json({error: 'menu item not found'})
        }

        console.log('data deleted successfully')
        res.status(200).json({success: 'menu item deleted successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
})

module.exports = router;