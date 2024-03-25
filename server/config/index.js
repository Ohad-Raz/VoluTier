const dotenv = require('dotenv')

dotenv.config()
const {MONGO_URL} = process.env;

const config = {
    MONGO_URL,
}

module.exports = {config}