function digitalClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
        document.getElementById("time").innerHTML = hours + ":" + minutes ;
        setTimeout("digitalClock()", 1000);
  }