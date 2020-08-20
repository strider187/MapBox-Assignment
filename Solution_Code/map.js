mapboxgl.accessToken = 'pk.eyJ1Ijoicm9hZG1ldHJpY3MiLCJhIjoiY2swbmw2aXJ2MDBxajNmcWlyYXo0a3RzNCJ9.rTDSsjZveTKa0pSk7YB7xQ';
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [77.2100, 28.5672], // starting position
      zoom: 10
  });

var currentmarker;

map.getCanvas().style.cursor = 'pointer';


/*
  *Example function to find the coordinates when mouse hovers on the map.
*/

  // map.on('mousemove', function(e) {
  //     document.getElementById('info').innerHTML =
  //         // e.point is the x, y coordinates of the mousemove event relative
  //         // to the top-left corner of the map
  //         JSON.stringify(e.point) +
  //         '<br />' +
  //         // e.lngLat is the longitude, latitude geographical position of the event
  //         JSON.stringify(e.lngLat.wrap());
  // });



/*
  *This function is resposnsible for adding a maker when a point
  *on the map is click
*/


map.on('click', function(e){
    // console.log("click recorded");
    if(currentmarker!=null)
    currentmarker.remove();
    // var coordinates = e.features[0].geometry.coordinates.slice();
    // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    // }
    // document.getElementById('info').innerHTML = JSON.stringify(e.lngLat.wrap());
    // console.log(e.lngLat.wrap());
    // console.log(e.lngLat.lng,e.lngLat.lat)
    // var coordinates = e.features[0].geometry.coordinates.slice();

    var el = document.createElement('div');
    el.id = 'marker';
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      e.lngLat.lng +","+ e.lngLat.lat
    );

    var marker = new mapboxgl.Marker(el)
      .setLngLat([e.lngLat.lng,e.lngLat.lat])
      .setPopup(popup)
      .addTo(map);
      marker.togglePopup();
      currentmarker = marker;

      // new mapboxgl.Popup()
      //   .setLngLat([e.lngLat.lng,e.lngLat.lat])
      //   .setHTML(JSON.stringify(e.lngLat.wrap()))
      //   .addTo(map);
  });

/*
  *This function is resposnsible for highlighting the nav-icons
*/
var activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }
  else{
    activeNavItem.removeClass('active');
  $(this).addClass('active');
  }

});
