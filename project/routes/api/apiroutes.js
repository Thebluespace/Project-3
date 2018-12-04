const router = require("express").Router();
const axios = require("axios");
const GOOGLEPLACES = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=formatted_address,id,place_id,name,types,rating&input=";
const APIKEY = "&key=AIzaSyBipENZtBfYDZlYlK0kFEMrpPWONITf9E4";
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
            axios.get(GOOGLEPLACES + query + APIKEY).then((data) => {
                //console.log(data);
                var reviews2 = [];
                data.data.candidates.forEach((element,num) => {
                        axios.get(GOOGLEDETAILS + element.place_id + "&fields=review" + APIKEY).then((data2) => {
                            try {
                            //console.log(data2);
                            element.reviews = [];
                            console.log(data2.data);
                            if (!isEmpty(data2.data.result)){
                                data2.data.result.reviews.forEach(review => {
                                    element.reviews.push(review);
                                });
                            }
                             reviews2.push(element);
                             if (num === data.data.candidates.length -1 ){
                                resolve(reviews2);
                             }
                             
                            } catch (error) {
                                console.log(error);
                            }
                        }).catch((error) => {            
                            console.log(error);
                            reviews2.push(element);
                        });     
                });
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

module.exports = router;