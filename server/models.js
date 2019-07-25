const mongoose = require('mongoose');
    var AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect('mongodb://localhost:27017/CommerceDb', (err)=>{
    if(err){console.log(err), {useNewUrlParser: true}}
    console.log('connected to db')
})


// const ReviewSchema = new mongoose.Schema({
//     customer: {type: String, required: [true, 'Name Required!'], minlength: 3},
//     stars: {type: Number, required:[true, 'Rating Required!']},
//     reviewDesc: {type: String, required: [true, 'Review Required!'], minlength: 3},
// }, {timestamps: true})


const ProductSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: [true, 'Name Required!'], minlength: 3},
    price: {type: Number, required: [true, 'Price Required!'], min: 0},
    quantity: {type: Number, required: [true, 'Quantity Required!'], min: 0},
    _id: {type: Number},

}, {timestamps: true}, {_id: false})

ProductSchema.plugin(AutoIncrement, {inc_field: '_id'});


module.exports = mongoose.model('Products',ProductSchema);