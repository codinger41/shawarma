import express from 'express';
import  bodyParser  from 'body-parser';
import db from './configs/db'
import mongoose from 'mongoose';
import apiRoute from './route/apiRoute';

const app = express();

// to parse req body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoute)

app.post('/', (req, res) => {
    console.log(req.body.name)
})

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
