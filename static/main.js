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
    $('#ajax-post').empty();
  })

  // declare an array to store latlang for removal on new ajax call
  var markerArray = [];

  // AJAX GET request whenever user selects a dropdown
  $('.category-select').change(function() {

    // remove old markers
    markerArray.forEach(function(markerPair) {
      console.log('remove old markers');
      console.log(markerPair);
      map.removeLayer(markerPair);
      markerArray = [];
    });

    // hide form
    $('#create-form').hide();

    // empty old thumbnails
    $('#ajax-post').empty();

    // AJAX CALL
    var category = $(this).val()
    // console.log(category);
    $.ajax({
      url: '/category/' + category,
      method: 'GET'
    }).done(function(dataFromServer) {
      console.log('ajax success');
      console.log(dataFromServer);
      dataFromServer.posts.forEach(function(post) {
        var latitude = post.latitude;
        var longitude = post.longitude;
        var title = post.title
        var marker = L.marker([latitude, longitude]).addTo(map).bindPopup(title).openPopup();
        // push marker into global array to store info first
        // then remove all old markers on every new ajax get request
        markerArray.push(marker);
        var address;
        var description;

        if (post.address) {
          address = post.address
        } else {
          // do nothing
        }

        if (post.description.length > 100) {
          description = post.description.slice(0,100)
        } else {
          description = post.description
        }

        // append posts onto page
        $('#ajax-post').append(
          '<div class="container">' +
            '<div id="ajax-post-2" class="row style="display:flex; flex-wrap: wrap;">' +
            '</div>' +
          '</div>'
        )
        $('#ajax-post-2').append(
          '<div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail">' +
              '<img class="post-image img-responsive" src="' + post.image_url + '" alt="...">' +
              '<div class="caption">' +
                '<h3>' + post.title + '</h3>' +
                '<p>' + address + '</p>' +
                '<p>' + post.category + '</p>' +
                '<p>' + description + '...</p>' +
                '<p><a href="/posts/' + post.id + '">Read More</a></p>' +
              '</div>' +
            '</div>' +
          '</div>'
        )
        var address = '';
        var description = '';
      });
      console.log('markerArray', markerArray);
    }).fail(function() {
      console.log('ajax failed');
    })
  });
});
