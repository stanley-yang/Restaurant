const controller = require('./controller');
const path = require('path');

module.exports = (app)=>{
    app.get('/api/products', controller.allRestaurants)
    app.post('/api/products', controller.newRestaurants)
    app.get('/api/products/:id', controller.oneRestaurant)
    app.put('/api/products/:id', controller.editRestaurant)
    // app.put('/api/products/:id/review/', controller.addReview)
    app.delete('/api/products/:id', controller.destroyRestaurant)
    app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}