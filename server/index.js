const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const postRoutes = require('./routes/posts')

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} `)))
    .catch((err) => { console.log(err) });

mongoose.set('useFindAndModify', false)