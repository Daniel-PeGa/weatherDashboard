var key = '94efd4ddb2c320c3222e2132c7b7128e';
var city = 'Nashville';

// shows the time in the navbar
function updateTime() {
    let today = moment();
  
    $('#currentDay').html(today.format('MMMM Do YYYY, h:mm:ss a'));
  
  }
  
  updateTime();
  setInterval(updateTime, 1000);

  // Current day and time

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
