const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const allPlace = require("./data/jsonData/allPlace/allPlace.json");
const allPlaceDetails = require("./data/jsonData/placeDetails/placeDetails.json");
const allHotels = require("./data/jsonData/hotels/hotels.json");

app.get("/", (req, res) => {
    res.send("booking bd server is running")
})
app.get("/allplace", (req, res) => {
    res.send(allPlace)
})
app.get("/place/:id", (req, res) => {
    const id = req.params.id;
    const searchedPlace = allPlaceDetails.find(place => place.id == id);
    res.send(searchedPlace);
})
app.get("/hotels", (req, res) => {
    res.send(allHotels)
})
app.get("/hotels/:id", (req, res) => {
    const id = req.params.id;
    const locationWiseHotel = allHotels.filter(hotel => hotel.hotel_location_id == id);
    res.send(locationWiseHotel);
})
app.get("/hotel/:id", (req, res) => {
    const id = req.params.id;
    const singleHotel = allHotels.find(hotel => hotel.hotel_id == id);
    res.send(singleHotel);
})

app.get("/hoteldetails/:id", (req, res) => {
    const id = req.params.id;
    const hoteldetails = allHotels.find(hotel => hotel.hotel_id == id);
    res.send(hoteldetails);
})


app.listen(port, () => {
    console.log("booking bd server Running again");
})

module.exports = app;