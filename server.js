
const express = require('express');
const htmlroutes = require('./routes/htmlroutes');
const apiroutes = require('./routes/apiroutes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlroutes);
app.use(apiroutes);

app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});