// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// getting all needed elements
var allSavebtn = $(".saveBtn")
var timeDisplayEl = $('#time-display');

// getting an array of all textarea's
var inputHour = $("textarea").get()
// setting each textarea to appropriate variable for ease of use
var input9am = $(inputHour[0])
var input10am = $(inputHour[1])
var input11am = $(inputHour[2])
var input12pm = $(inputHour[3])
var input1pm = $(inputHour[4])
var input2pm = $(inputHour[5])
var input3pm = $(inputHour[6])
var input4pm = $(inputHour[7])
var input5pm = $(inputHour[8])

// main function that get's called after page load
$(function () {
  
  // setting the hour of the day so it can be compared in the colorCheck function
  var hourOfDay = parseInt(dayjs().hour())
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function colorCheck(){
    for (let i = 0; i < inputHour.length; i++) {
      const hourColorCheck = $(inputHour[i]);
      // using ID's that were set on each box and comparing to the current hour to the ID value
      if (inputHour[i].id < hourOfDay){
        // if hour has passed set past class
        hourColorCheck.addClass("past")
      }
      else if (inputHour[i].id == hourOfDay){
        // if hour is current set present class
        hourColorCheck.addClass("present")
      }
      else if(inputHour[i].id > hourOfDay){
        // if hour has yet to pass set future class
        hourColorCheck.addClass("future")
      }
    }
  }
  colorCheck() //checking colors on initial load
  setInterval(colorCheck, 10000) //checking colors every 10 seconds

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  allSavebtn.on("click", function (event){
    let text = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    console.log(text)
    console.log(time)
    
    localStorage.setItem(time,text)
    
  } )
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function renderLocal(){
    // checks local storage for  previously inputted text and renders them
    input9am.val(localStorage.getItem('hour-9'))
    input10am.val(localStorage.getItem('hour-10'))
    input11am.val(localStorage.getItem('hour-11'))
    input12pm.val(localStorage.getItem('hour-12'))
    input1pm.val(localStorage.getItem('hour-13'))
    input2pm.val(localStorage.getItem('hour-14'))
    input3pm.val(localStorage.getItem('hour-15'))
    input4pm.val(localStorage.getItem('hour-16'))
    input5pm.val(localStorage.getItem('hour-17'))
  }
  renderLocal()
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    // uses day.js to get current date and time and sets it at the top of the page
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000); //updates clock at the top of the page every second
});






