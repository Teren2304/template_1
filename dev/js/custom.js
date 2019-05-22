var map;
function initMap() {
	    var myLatlng = new google.maps.LatLng(50.3620263, 30.4632891);
	    var image = './img/contact/map.svg';
	    var mapOptions = {
	        center: { lat: 50.3620263, lng: 30.4632891},
	        zoom: 12,
	        zoomControl: false,
	        scrollwheel: false,
	        disableDefaultUI: true,
	        styles: [
	            {
	                "featureType": "all",
	                "elementType": "labels.text.fill",
	                "stylers": [
	                   
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 20
	                    }
	                ]
	            },
	            {
	                "featureType": "all",
	                "elementType": "labels.text.stroke",
	                "stylers": [
	                    {
	                        "visibility": "on"
	                    },
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "all",
	                "elementType": "labels.icon",
	                "stylers": [
	                    {
	                        "visibility": "off"
	                    }
	                ]
	            },
	            {
	                "featureType": "administrative",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#151515"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "administrative",
	                "elementType": "geometry.stroke",
	                "stylers": [
	                    {
	                        "color": "#000000"
	                    },
	                    {
	                        "lightness": 17
	                    },
	                    {
	                        "weight": 1.2
	                    }
	                ]
	            },
	            {
	                "featureType": "landscape",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#151515"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "poi",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#151515"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "road.highway",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "road.highway",
	                "elementType": "geometry.stroke",
	                "stylers": [
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 0
	                    },
	                    {
	                        "weight": 0.2
	                    }
	                ]
	            },
	            {
	                "featureType": "road.arterial",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "road.local",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#202022"
	                    },
	                    {
	                        "lightness": 0
	                    }
	                ]
	            },
	            {
	                "featureType": "transit",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#000000"
	                    },
	                    {
	                        "lightness": 19
	                    }
	                ]
	            },
	            {
	                "featureType": "water",
	                "elementType": "geometry",
	                "stylers": [
	                    {
	                        "color": "#000000"
	                    },
	                    {
	                        "lightness": 17
	                    }
	                ]
	            }
	        ] 
	    }
	    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        icon: image
	    });

	    google.maps.event.addDomListener(window, "resize", function() {
	        var center = map.getCenter();
	        google.maps.event.trigger(map, "resize");
	        map.setCenter(center);
	    });
}
// END OF gooogle map api
$(document).ready(function(){
	$('.preloader').hide();
});