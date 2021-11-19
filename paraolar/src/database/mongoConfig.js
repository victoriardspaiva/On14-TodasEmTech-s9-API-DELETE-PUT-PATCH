const mongoose = require('mongoose')

require('dotenv-safe').config()
const MONGODB_URI = process.env.MONGODB_URI

//alt + z ??

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco pra jogo!!");
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    connect
}