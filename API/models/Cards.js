const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const CardSchema = new Schema({
    cardId:{type: String, require:true},
    name:{type: String, require:true},
    quantity: {type: Number}, 
    lang:{type: String, require:true},
    image_uris:{
        small: {type: String, require:true},
        normal: {type: String, require:true},
        large: {type: String, require:true},
        avatar: {type: String, require:true},
        border_crop: {type: String, require:true},
    },
    prices:{
        usd: {type: String || null},
        usd_foil:{type: String || null},
        eur:{type: String || null},
        eur_foil:{type: String || null},
        tix:{type: String || null}
    },
});
module.exports = CardSchema;
// module.exports = {mongoose.model('CardSchema', CardSchema),CardSchema};