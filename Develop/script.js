// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var allSavebtn = $(".saveBtn")
// var saveBtn9 = $("#saveBtn9am")
// var saveBtn10 = $("#saveBtn10am")
// var saveBtn11 = $("#saveBtn11am")
// var saveBtn12 = $("#saveBtn12am")
// var saveBtn13 = $("#saveBtn1pm")
// var saveBtn14 = $("#saveBtn2pm")
// var saveBtn15 = $("#saveBtn3pm")
// var saveBtn16 = $("#saveBtn4pm")
// var saveBtn17 = $("#saveBtn5pm")
var timeDisplayEl = $('#time-display');
var inputHour = $("textarea").get()
console.log(inputHour)
var input9am = $(inputHour[0])
var input10am = $(inputHour[1])
var input11am = $(inputHour[2])
var input12pm = $(inputHour[3])
var input1pm = $(inputHour[4])
var input2pm = $(inputHour[5])
var input3pm = $(inputHour[6])
var input4pm = $(inputHour[7])
var input5pm = $(inputHour[8])




$(function () {
  
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayTime();

  var hourOfDay = parseInt(dayjs().hour())
  console.log(hourOfDay)

  function colorCheck(){
    for (let i = 0; i < inputHour.length; i++) {
      const hourColorCheck = $(inputHour[i]);

      if (inputHour[i].id < hourOfDay){
        hourColorCheck.addClass("past")
      }
      else if (inputHour[i].id == hourOfDay){
        hourColorCheck.addClass("present")
      }
      else if(inputHour[i].id > hourOfDay){
        hourColorCheck.addClass("future")
      }
    }
  }
  colorCheck() //checking colors on initial load
  setInterval(colorCheck, 10000) //checking colors every 10 seconds

  // TODO: Add a listener for click events on the save button. This code should
  allSavebtn.on("click", function (event){
    event.preventDefault()
    let text = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    console.log(text)
    console.log(time)

    localStorage.setItem(time,text)
    
  } )
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function renderLocal(){
    
    check = localStorage.getItem('hour-9')
    console.log(check)


  }
  renderLocal()
  //
  // TODO: Add code to display the current date in the header of the page.
  setInterval(displayTime, 1000);
});






