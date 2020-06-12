$(document).ready(function () {
    //now is defined as moment.js function. This function returns the current time
    var now = moment();

    //Inside the currentDay id, we are adding text that gives us info. about today's date and time. After var now, we set the format (again the format is taken from moment.js)
    $("#currentDay").text("Today's date is " + now.format("MMMM Do YYYY, h:mm:ss a"));

    //currentTime variable gives us the current hour (the functions are taken from moment.js)
    var currentTime = moment().hour();

    // I am using each function from jQuery here (https://api.jquery.com/each/) This grabs the current element. When called, it iterates over the DOM elements that are part of the jQuery object.
    $(".time-block").each(function () {
        //Hour variable equals to the id attribute in time-block divs - which includes all business hours. "id" is a string, but by using parseInt, we make this string a number. This refers to each div that holds these times (id).
        var hour = parseInt($(this).attr("id"));
        //if hour equals to current time, we add the appropriate CSS class (present), so the current time will be marked in red. I repeat the same for the other steps.
        if (hour === currentTime) {
            $(this).addClass("present")
        }
        else if (hour < currentTime) {
            $(this).addClass("past")
        }
        else if (hour > currentTime) {
            $(this).addClass("future")
        }
    });

    //$( "" ).click(function() {
    //alert( "Handler for .click() called." );
    //});

    // Storing the key
    $(".fa-calendar-plus").click(function() {
        // Key to be saved & value
        var userText = $("textarea").val()
        localStorage.setItem("user answer", userText)

    });

    console.log(localStorage.getItem("user answer"))  

});