
var trackCallList = document.getElementById("trackCallList");
var nl = document.getElementById("nl");
var gd = document.getElementById("gd");
var su = document.getElementById("su");
var si = document.getElementById("si");
var so = document.getElementById("so");
var ts = document.getElementById("ts");
var te = document.getElementById("te");
var pc = document.getElementById("pc");
var ec = document.getElementById("ec");



function segmentTrack() {
    // Replace this with your own track call
    analytics.track("Newsletter Signup",{
      email: 'jon@doe.com',
      type: 'header'
    });
    alert("newsletter track call sent");
  }
  
  function segmentIdentify() {
    // Replace this with your own identify call
    analytics.identify('user123', {
      email: 'user@example.com',
      name: 'John Doe'
    });
  }
  
  function segmentGroup() {
    // Replace this with your own group call
    analytics.group('account123', {
      name: 'Acme Co.'
    });
  }

nl.addEventListener("click",segmentTrack(), false);
gd.addEventListener("click", function(){alert("click2 triggered")}, false);
su.addEventListener("click", function(){alert("click2 triggered")}, false);
si.addEventListener("click", function(){alert("click2 triggered")}, false);
so.addEventListener("click", function(){alert("click2 triggered")}, false);
ts.addEventListener("click", function(){alert("click2 triggered")}, false);
te.addEventListener("click", function(){alert("click2 triggered")}, false);
pc.addEventListener("click", function(){alert("click2 triggered")}, false);
ec.addEventListener("click", function(){alert("click2 triggered")}, false);