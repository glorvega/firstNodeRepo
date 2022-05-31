
const express = require('express');
const PORT = 3500;
const app = express();
const indexRouter = require('./routes/indexRouter.js');
const db = require('./db.js');
db.connect();


app.use('/', indexRouter);

app.use("/", (req, res) => {
return res.send("IT WORKED!");
})

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});