const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});