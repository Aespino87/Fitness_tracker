const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/FitnessTracker");

//Adds an event listner for when connection is made
mongoose.connection.once("open",function(){
    console.log("You are connected..");
}).on("error", function(error){
    console.log("Something is wrong with the connection",error)
})






/////Referenced https://www.youtube.com/watch?v=oT2HOw3fWp4&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=3 on setup of code.