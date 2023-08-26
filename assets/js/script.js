// Bring in the elements we need to manipulate
var container = $('.container-lg');
var dateText = $('#currentDay');


// Section that builds the agenda blocks
for (var i=9; i<=17; i++){
  var hourBlockEl = $('<div>');
  // creating the id
  var idValue = 'hour-' + i;
  // adding it to the block heading
  hourBlockEl.attr('id', idValue);
  // add styling to the heading
  hourBlockEl.addClass('row time-block');

  // setup the title for the hour block
  var hour = $('<div>');
  hour.addClass('col-2 col-md-1 hour text-center py-3');
  var hourValue;
  if (i < 12){
    hourValue = i +"AM";
  } else if (i == 12) {
    hourValue = i + "PM";
  } else {
    hourValue = i-12 + "PM";
  }
  // add the title
  hour.text(hourValue);

  // Create the textarea element to receive the agenda description
  var textEl = $('<textarea>');
  // Assign styling
  textEl.addClass('col-8 col-md-10 description');
  // assign attributes
  textEl.attr('rows', '3');

  // Create the save buttons
  var saveBtn = $('<button>');
  // Assign styling
  saveBtn.addClass('btn saveBtn col-2 col-md-1');
  // Assign Attributes
  saveBtn.attr('aria-label', 'save');

  // Create the save icon using font awesome
  var icon = $('<i>');
  // Add styling 
  icon.addClass('fas fa-save');
  // Add attributes
  icon.attr('aria-hidden', 'true');

  // Add the newly create elements to the Hour block
  hourBlockEl.append(hour);
  hourBlockEl.append(textEl);
  saveBtn.append(icon);
  hourBlockEl.append(saveBtn);
  // Add the Hour block to the container
  container.append(hourBlockEl);
}

// A function that runs after the window has been rendered
// Function will setup the Event listener and add styling to the agenda blocks based on time of day
// Also will add any items from local storage
$(function () {
  
  // Event Listener when someone clicks the save button
  $(".btn").click(buttonClickEvent);

  // A function that handles the save button click
  function buttonClickEvent(event){
    // Gets the parent of the button click
    var hourClicked = $(this).parent();
    // Gets the message that the user entered in the textarea
    var messageArea = $(this).parent().children().eq(1).val();

    //Create the object that will store the hour and id 
    let Item = {"hour" : hourClicked.attr('id'), "message" : messageArea};
    //check to see if there are persistant local storage items
    let agendaItems = JSON.parse(localStorage.getItem('agendaItems'));
    // if there are no local storage items create the agenda array and put the item object in.  Set the local storage.
    if (agendaItems === null) {
      var agendaStuff = [];
      agendaStuff.push(Item);
      localStorage.setItem('agendaItems', JSON.stringify(agendaStuff));
    } else {  // if there is persistant local storage, get the items, add the newly created item and set the local storage
      var agendaStuff = JSON.parse(localStorage.getItem('agendaItems'));
      agendaStuff.push(Item);
      localStorage.setItem('agendaItems', JSON.stringify(agendaStuff));
    }
  }

  // This section gets the persistant items from local storage and populates the items in the correct hour block
  var agendaItems = JSON.parse(localStorage.getItem('agendaItems'));
  if (agendaItems !== null) {
    for (var i = 0; i<agendaItems.length; i++){
      var id = '#' + agendaItems[i].hour;
      container.children(id).children().eq(1).val(agendaItems[i].message);
    }
  }

  // This section compares the current hour with the appropriate hour block and sets the background color based on if the time block is in the past, present or 
  // future of the current hour.  Using dayjs to manage
  var currentHour = dayjs().hour();
  console.log(currentHour);
  for (var i=0; i<container.children().length;i++){
    var hourID = container.children().eq(i).attr('id');
    var hour = hourID.substring(5, hourID.length);
    console.log(hour.length);
    if (hour.valueOf() < currentHour){
      container.children().eq(i).addClass("past");
    } else if (hour.valueOf() == currentHour){
      container.children().eq(i).addClass("present");
    } else if (hour.valueOf() > currentHour) {
      container.children().eq(i).addClass("future");
    }
  }
  
  // Sets the current date in the header
  var today = dayjs().format("dddd MMMM D, YYYY");
  dateText.text(today);

});
