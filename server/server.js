require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute=require('./router/contact-router');

app.use(express.json()); // for parsing application/json
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactForm = require('./controllers/contact-controller');

app.use('/', authRoute);  // localhost:5000/
app.use('/cform/',contactRoute);
app.use(errorMiddleware); //for error-mddleware

const PORT =5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`DB is Connected and Server is running on port ${PORT}`);
});
});

