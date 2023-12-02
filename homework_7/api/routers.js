const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { validateProductCategory } = require('./validation');
const { calculateTotalCost } = require('./business_logic');
const prisma = new PrismaClient();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/customers/:customerId/orders', async (req, res) => {
    try {
        const customerId = parseInt(req.params.customerId);
        const order = await prisma.orders.findMany({
            where: { customerId },
            include: {
                products: true,
            },
        });

        const ordersWithTotalCost = order.map((orders) => {
            const totalCost = calculateTotalCost(orders);
            return { ...orders, totalCost };
        });

        res.json(ordersWithTotalCost);
    } catch (error) {
        console.error(error);
        res.status(404).send('Customer with such id has not been found');
    }
});

router.patch('/employees/:employeeId', async (req, res) => {
    try {
        const employeeId = parseInt(req.params.employeeId);
        const updatedEmployee = await prisma.employees.update({
            where: { id: employeeId },
            data: req.body,
        });
        res.json(updatedEmployee);
    } catch (error) {
        console.error(error);
        res.status(404).send('Employee with such id has not been found');
    }
});

router.delete('/orders/:orderId', async (req, res) => {
    try {
        const orderId = parseInt(req.params.orderId);
        await prisma.orders.delete({
            where: { id: orderId },
        });
        res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(404).send('Order with such id has not been found');
    }
});

router.post('/products', async (req, res) => {
    try {
        if (!validateProductCategory(req.body.category)) {
            return res.status(403).json({ error: 'Invalid product category' });
        }

        const newProduct = await prisma.products.create({
            data: req.body,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;