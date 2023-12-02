const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routers');
//const { PrismaClient } = require('@prisma/client');
//const prisma = new PrismaClient();
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})