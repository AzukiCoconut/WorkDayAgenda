var container = $('.container-lg');
var dateText = $('#currentDay');


for (var i=9; i<=17; i++){
  var hourBlockEl = $('<div>');
  var idValue = 'hour-' + i;
  hourBlockEl.attr('id', idValue);
  hourBlockEl.addClass('row time-block');


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
      agendaStuff.push(Item);
      localStorage.setItem('agendaItems', JSON.stringify(agendaStuff));
    }
  }

  var agendaItems = JSON.parse(localStorage.getItem('agendaItems'));
  if (agendaItems !== null) {
    for (var i = 0; i<agendaItems.length; i++){
      var id = '#' + agendaItems[i].hour;
      container.children(id).children().eq(1).val(agendaItems[i].message);
    }
  }

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
  
  var today = dayjs().format("dddd MMMM D, YYYY");
  dateText.text(today);

});
