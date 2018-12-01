import axios from "axios";
const GOOGLEPLACES = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=formatted_address,id,place_id,name,types,rating&input=&";
const APIKEY = "&AIzaSyCK7Tl5zvh9h5ERB23zrDAteN5vL95cJqE";
const GOOGLEDETAILS = "https://maps.googleapis.com/maps/api/place/details/json?ChIJR2unTCyDVogRdeF0bhJCZkk&fields=alt_id,formatted_address,photo,place_id,type,url,formatted_phone_number,rating,review&place_id=&"

export default {
    search: function(query) {
        axios.get(GOOGLEPLACES + query + APIKEY,(res) => {
            this.details(res);
        });
    },
    details: function(res) {
        res.candidates.forEach(element => {
           var uri = "apiuri" + element.place_id ;
           axios.get(GOOGLEDETAILS + element.place_id + APIKEY,(res) => {
               this.details(res);
           });
        });
    }
};

