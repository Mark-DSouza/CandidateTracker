const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(connection => {
    console.log('DB connection was successful')
}).catch(err => console.log("Error: ", err))

const applicantsRouter = require('./routes/applicants');
const jobsRouter = require('./routes/jobs');

app.use('/applicants', applicantsRouter);
app.use('/jobs', jobsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
