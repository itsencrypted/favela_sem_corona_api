const { Router } = require('express');
const router = Router();

const Favelado = require ('../models/Favelado');
const faker = require('faker');

router.get('/api/favelados', async (req, res) => {
    const favelados = await Favelado.find();
    res.json({favelados});
});

router.get('/api/favelados/create', async (req, res) => {
    for(let i =0; i<3; i++){
        await Favelado.create({
            completeName: faker.name.firstName(),
            gender: faker.gender,
            whatsAppNo: faker.phone.phoneNumber(),
            
        })

    }
    res.json({message: '3 favelados criados'});
});

module.exports = router;
