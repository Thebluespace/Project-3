const router = require("express").Router();
const axios = require("axios");
const GOOGLEPLACES = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const APIKEY = process.env.apikey || "key=AIzaSyBipENZtBfYDZlYlK0kFEMrpPWONITf9E4";
const GOOGLEDETAILS = "https://maps.googleapis.com/maps/api/place/details/json?placeid="
const passport = require("passport");

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
};

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function placesCall(query,location) {
    try {
        var reviews = new Promise(function(resolve,reject){
            axios.get(GOOGLEPLACES + APIKEY + "&location="+ location +"&radius=5000&keyword=" + query).then((data) => {
                //console.log(data.data);
                try {
                    var sorted = data.data.results.filter(place => place.rating < 3);
                    var sorted = sorted.filter(place => place.rating > 0);
                    if (sorted.length < 1){
                        resolve("No results found");
                    }
                    // console.log(sorted);    
                } catch (error) {
                    console.log(error);
                }
                
                resolve(detailsCall(sorted,location));
            }).catch((error)=>{
               console.log(error);
               resolve({"error": error.message});
            }); 
        });
        reviews.then(value => {
            console.log("Resolved");
        });
        return reviews;
    } catch (error) {
        console.log(error);
        return {"error": error.message};
    }
}

function uplacesCall(query,location) {
    try {
        var reviews = new Promise(function(resolve,reject){
            axios.get(GOOGLEPLACES + APIKEY + "&location="+ location +"&radius=5000&keyword=" + query).then((data) => {
                //console.log(data.data);
                try {
                    var sorted = data.data.results.filter(place => place.rating > 0);
                    if (sorted.length < 1){
                        resolve("No results found");
                    }
                    // console.log(sorted);    
                } catch (error) {
                    console.log(error);
                }
                
                resolve(detailsCall(sorted,location));
            }).catch((error)=>{
               console.log(error);
               resolve({"error": error.message});
            }); 
        });
        reviews.then(value => {
            console.log("Resolved");
        });
        return reviews;
    } catch (error) {
        console.log(error);
        return {"error": error.message};
    }
}

function detailsCall(data, location){
    var reviews = new Promise(function(resolve,reject){
        var reviews2 = [];
        // console.log(data.results);
        data.forEach((element) => {
            if (element.photos){
                element.photo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&maxheight=100&photoreference=" + element.photos[0].photo_reference + "&" + APIKEY;
            }else{
                element.photo = "http://nebula.wsimg.com/649eff564042a5535ea47145eed01b78?AccessKeyId=531592D248B589D87A56&alloworigin=1&disposition=0"
            }
                axios.get(GOOGLEDETAILS + element.place_id + "&fields=review,formatted_phone_number,formatted_address&" + APIKEY).then((data2) => {
                    try {   
                            element.address = data2.data.result.formatted_address;
                            element.phone = data2.data.result.formatted_phone_number;
                            element.reviews = [];
                            if (!isEmpty(data2.data.result.reviews)){
                                data2.data.result.reviews.forEach(review => {
                                    element.reviews.push(review);
                                });
                            }
                            reviews2.push(element);
                            if (data.length == reviews2.length){
                                resolve(reviews2);
                            }
                        } catch (error) {
                            console.log(error);
                            reviews2.push(element);
                        }
                }).catch((error) => {            
                    console.log(error);
                    reviews2.push(element);
                });     
        });
    });
    return reviews;
}
router.get('/favicon.ico', (req, res) => res.status(204));
router.post("/query", (req,res) => {
    try{
        console.log("Query made : ", req.body);
        var query = req.body.query;
        var location = req.body.location;
        let reviews = new Promise((resolve,reject) => {
            var data = placesCall(query,location);
                resolve(data);
        });
        reviews.then(value =>{
            // console.log(value);
            res.json({"reviews": value});
        });
    } catch(error){
        console.log(error);
        res.json({"error": error.message});
    }
});

router.post("/uquery", (req,res) => {
    try{
        console.log("Unfiltered Query made : ", req.body);
        var query = req.body.query;
        var location = req.body.location;
        let reviews = new Promise((resolve,reject) => {
            var data = uplacesCall(query,location);
                resolve(data);
        });
        reviews.then(value =>{
            // console.log(value);
            res.json({"reviews": value});
        });
    } catch(error){
        console.log(error);
        res.json({"error": error.message});
    }
});

router.post('/signup', (req, res) => {
    passport.authenticate('local-signup', (err, user, info) => {
      console.log(req.body);
      console.log(info);
      if (err) {
        console.log(err);
        return res.json({ error: err.message });
      } else {
        if (!user) {
          return res.send({ error: info.message });
        } else {
          req.login(user, err => {
            if (err) {
              console.log(err);
              return res.json({ error: err.message });
            }
            console.log("account created successfully");
            res.json({ redirect: "/home" });
          });
        }
      }
    })(req, res)
});
  
router.get("/checkAuth", isLoggedIn, (data) => {
    console.log(data);  
})
router.get('/logout',(req,res) => {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
});
  
router.post('/signin', (req, res) => {
console.log(req.body);
passport.authenticate('local-signin', (err, user, info) => {
    console.log(info);
    if (err) {
    console.log(err);
    return res.json({ error: err.message });
    } else {
    if (!user) {
        return res.send({ error: info.message });
    } else {
        req.login(user, err => {
        if (err) {
            console.log(err);
            return res.json({ error: err.message });
        }
        console.log("successful sign-in");
        res.json({ redirect: "/home" });
        });
    }
    }
})(req, res)
});

module.exports = router;