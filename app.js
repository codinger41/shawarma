import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import db from './config/db';
const app = express();
require('./routes/productRoutes')(app)
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'welcome to Shawarma&Grills!'
    });
});
// connect to database
mongoose.connect(db.url);

mongoose.connection.on('error', ()  => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', ()  => {
    console.log('Successfully connected to the database');
})

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server has started, listening on port ${port}`);
}); 

module.exports = app;