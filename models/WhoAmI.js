const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const whoAmISchema = new Schema({
    key:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
})

module.exports = WhoAmI = mongoose.model("whoAmI", whoAmISchema);