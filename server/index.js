const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// initialize app
const app = express();

// middlewares
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 5000

// start server
app.listen(port, () => console.log(`server started on port ${port}`)); 