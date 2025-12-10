const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const carRoutes = require('./routes/carRoutes');

const app = express();
const PORT = process.env.PORT || 4002;

app.use(cors());
app.use(express.json());

// Routes
app.use('/cars', carRoutes);

// Kết nối DB và chạy server
sequelize.sync().then(() => {
    console.log('Database connected & Models synced');
    app.listen(PORT, () => {
        console.log(`Car Service running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});