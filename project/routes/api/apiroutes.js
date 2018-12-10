const router = require("express").Router();
const axios = require("axios");
const GOOGLEPLACES = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const APIKEY = "key=AIzaSyBipENZtBfYDZlYlK0kFEMrpPWONITf9E4";
const GOOGLEDETAILS = "https://maps.googleapis.com/maps/api/place/details/json?placeid="

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
            axios.get(GOOGLEPLACES + APIKEY + "&location=35.230705,-80.807955&radius=5000&keyword=" + query).then((data) => {
                //console.log(data.data);
                if (data.data.results.length < 1){
                    resolve("No results found");
                }
                resolve(detailsCall(data.data,location));
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
        data.results.forEach((element) => {
                axios.get(GOOGLEDETAILS + element.place_id + "&fields=review&" + APIKEY).then((data2) => {
                    try {
                            element.reviews = [];
                            // console.log(data2.data);
                            if (!isEmpty(data2.data.result)){
                                data2.data.result.reviews.forEach(review => {
                                    element.reviews.push(review);
                                });
                            }
                            reviews2.push(element);
                            if (data.results.length == reviews2.length){
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

router.post("/query", (req,res) => {
    try{
        console.log("Query made : ", req.body);
        var query = req.body.query;
        let reviews = new Promise((resolve,reject) => {
            resolve(placesCall(query));
        });
        reviews.then(value =>{
            console.log(value);
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