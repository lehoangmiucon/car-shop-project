const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/cars', proxy('http://car_service_app:4002', {
    proxyReqPathResolver: (req) => {
        return '/cars' + req.url;
    }
}));

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});