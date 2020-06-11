$(document).ready(function () {
    


var now = moment();

$("#currentDay").text("Today's date is " + now.format("MMMM Do YYYY, h:mm:ss a"));


var currentTime = moment().hour();

$ (".time-block").each(function() {
    //This grabs the current element
    var hour = parseInt($(this).attr("id")); 
    if (hour === currentTime) {
        $(this).addClass ("present")
    }
    else if (hour < currentTime) {
        $(this).addClass ("past")
    }
    else if (hour > currentTime) {
        $(this).addClass ("future")
    }
});

$( "" ).click(function() {
    alert( "Handler for .click() called." );
  });

// Storing the key
$( ".fa-calendar-plus" ).click(function() {
    // Key to be saved & value
    localStorage.setItem
   

  });

  localStorage.getItem("textarea");













//var businessHours = []

//for (var i=0; i<businessHours.length; i++




//setInterval(function(){
    //$(“#currentDay”).text(moment());
// },1000);


//if the time is past current time, gray out the rows



//if current hour, mark the row in red


//if future, mark the rows green





});