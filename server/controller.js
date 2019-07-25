
//Product is from database name
const Restaurant = require("./models")

module.exports = {

    allRestaurants : (req, res) => {
        Restaurant.find().collation({locale:'en',strength: 2}).sort({type: 1})
                .then(data =>res.json(data))
                .catch(err =>res.json(err))
    },

    newRestaurants : (req, res) => {
        Restaurant.find({name: req.body.name})
        .then(data => {
            if (data.length > 0) {
                return Promise.reject("Already exists");
            }
        })
        Restaurant.create(req.body)
                .then(data =>res.json(data))
                .catch(err =>res.json({err}))
    },
    

    oneRestaurant : (req, res) => {
        Restaurant.findById(req.params.id)
                .then(data =>res.json(data))
                .catch(err =>res.json(err))
    },

    editRestaurant : (req, res) => {
        Restaurant.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
                .then(data =>res.json(data))
                .catch(err =>res.json(err))
    },

    destroyRestaurant : (req, res) => {
        Restaurant.findByIdAndDelete(req.params.id)
                .then(data =>res.json(data))
                .catch(err =>res.json(err))
    },    
}