const express = require('express');
const cors = require('cors');
const sequelize = require('./config/connection');

const app = express();

const { apiRouter } = require('./controllers');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(apiRouter);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});
