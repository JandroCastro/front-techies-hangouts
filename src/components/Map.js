import React, { useRef, useEffect } from "react";

export function Map({ placeQuery }) {
  const mapRef = useRef();

  /* useEffect(() => {
    let map;
    let service;
    let infowindow;

    let coruna = new window.google.maps.LatLng(43.362343, -8.41154);

    infowindow = new window.google.maps.InfoWindow();

    map = new window.google.maps.Map(mapRef.current, {
      center: coruna,
      zoom: 15
    });

    let request = {
      query: placeQuery,
      fields: ["name", "geometry"]
    };

    service = new window.google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry.location);
      }
    });

    function createMarker(place) {
      let marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      window.google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  }, [placeQuery]);*/

  return <div id="map" ref={mapRef}></div>;
}
