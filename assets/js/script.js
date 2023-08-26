var container = $('.container-lg');


for (var i=9; i<17; i++){
  var hourBlockEl = $('<div>');
  var idValue = 'hour-' + i;
  hourBlockEl.attr('id', idValue);
  hourBlockEl.addClass('row time-block');

  console.log(hourBlockEl);
  var hour = $('<div>');
  hour.addClass('col-2 col-md-1 hour text-center py-3');
  var hourValue;
  if (i < 12){
    hourValue = i +"AM";
  } else {
    hourValue = i + "PM";
  }
  hour.text(hourValue);

  var textEl = $('<textarea>');
  textEl.addClass('col-8 col-md-10 description');
  textEl.attr('rows', '3');

  var saveBtn = $('<button>');
  saveBtn.addClass('btn saveBtn col-2 col-md-1');
  saveBtn.attr('aria-label', 'save');

  var icon = $('<i>');
  icon.addClass('fas fa-save');
  icon.attr('aria-hidden', 'true');

  hourBlockEl.append(hour);
  hourBlockEl.append(textEl);
  saveBtn.append(icon);
  hourBlockEl.append(saveBtn);
  container.append(hourBlockEl);
}

$(function () {
  
  $(".btn").click(buttonClickEvent);

  function buttonClickEvent(event){
    var hourClicked = $(this).parent();
    var messageArea = $(this).parent().children().eq(1).val();
    let Item = {"hour" : hourClicked.attr('id'), "message" : messageArea};
    let agendaItems = JSON.parse(localStorage.getItem('agendaItems'));
    if (agendaItems === null) {
      var agendaStuff = [];
      agendaStuff.push(Item);
      localStorage.setItem('agendaItems', JSON.stringify(agendaStuff));
    } else {
      var agendaStuff = JSON.parse(localStorage.getItem('agendaItems'));
      console.log(agendaItems);
      agendaStuff.push(Item);
      localStorage.setItem('agendaItems', JSON.stringify(agendaStuff));
    }
  }

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 
  var agendaItems = JSON.parse(localStorage.getItem('agendaItems'));
  if (agendaItems.length !== 0) {
    for (var i = 0; i<agendaItems.length; i++){
      var id = '#' + agendaItems[i].hour;
      container.children(id).children().eq(1).val(agendaItems[i].message);
    }
  }
  // TODO: Add code to display the current date in the header of the page.

});
