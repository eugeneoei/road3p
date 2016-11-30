$("document").ready(function(){
  console.log("loaded");

  $('#alert').delay(5000).fadeOut(2000)

  var map = L.map('map', {
    // latitude then longtitude
    center: [1.290270, 103.851959],
    zoom: 11
  });

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: '<a href="http://mapbox.com">Mapbox</a>',
   maxZoom: 18,
   zoomControl: false,
   accessToken: 'pk.eyJ1IjoiZXVnZW5lb2VpIiwiYSI6ImNpdDlnanl3bTBqNm8yb3AydGIzdnFncHQifQ.xbhCGgpxzfwL_NtEFDWkXg'
 }).addTo(map);

  // get client's current location
  if (navigator.geolocation) {
   var optn = {
     enableHighAccuracy : true,
     timeout : Infinity,
     maximumAge : 0
   };
   navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
  } else {
   alert('Geolocation is not supported in your browser');
  }

  function showPosition(position) {
   // document.write('Latitude: '+position.coords.latitude+'Longitude: '+position.coords.longitude);
  //  console.log(position.coords.latitude);
   var latitude = position.coords.latitude;
   // 1.2790971
   var longitude = position.coords.longitude;
   // 103.8414975
  //  console.log(position.coords.longitude);
   L.marker([latitude, longitude]).addTo(map).bindPopup("You're here").openPopup();
   // L.marker([1.375133, 103.846914]).addTo(map);
   // L.marker(coordinates[i]).addTo(map).bindPopup(title[i].value).openPopup();

  }

  function showError(error) {
   switch(error.code) {
     case error.PERMISSION_DENIED:
       alert("User denied the request for Geolocation.");
       break;
     case error.POSITION_UNAVAILABLE:
       alert("Location information is unavailable.");
       break;
     case error.TIMEOUT:
       alert("The request to get user location timed out.");
       break;
     case error.UNKNOWN_ERROR:
       alert("An unknown error occurred.");
       break;
   }
  }

  $('#create-form').hide();

  $('#create-button').on('click', function() {
    $('#create-form').show();
  })

  // declare an array to store latlang for removal on new ajax call
  var markerArray = [];

  // AJAX GET request whenever user selects a dropdown
  $('.category-select').change(function() {
    markerArray.forEach(function(markerPair) {
      console.log('remove old markers');
      L.marker(markerPair).remove();
      markerArray = [];
    });
    var category = $(this).val()
    // console.log(category);
    $.ajax({
      url: '/category/' + category,
      method: 'GET'
    }).done(function(dataFromServer) {
      console.log('ajax success');
      console.log(dataFromServer);
      dataFromServer.posts.forEach(function(post) {
        var pair = [];
        var latitude = post.latitude;
        var longitude = post.longitude;
        pair.push(latitude);
        pair.push(longitude);
        markerArray.push(pair);
        var title = post.title
        L.marker([latitude, longitude]).addTo(map).bindPopup(title).openPopup();
        pair = [];
      })
      console.log('markerArray', markerArray);
    }).fail(function() {
      console.log('ajax failed');
    })
  });

});
