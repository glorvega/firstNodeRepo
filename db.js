const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/futurama";

const connect = async () => {
    try {
        const dbConnection = await mongoose.connect(DB_URL);
        const {host, port, name} = dbConnection.connection;
        console.log(`Ya he conectado ${name} en ${host}:${port}`)
    } catch (error) {
        console.log('Ha habido un error al conectar con la DB', error);
    }
};

module.exports = {
    connect
};