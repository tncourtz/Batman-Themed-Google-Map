//Intialize the Map
function initMap() {
    //location of V&A cape town
    const VA = { lat: -33.90363, lng: 18.420529 };
	map = new google.maps.Map(document.getElementById('map'), {
		center: VA,
		zoom: 12,
		mapId: '2cb7f76b2e2ea6ef',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,

	});

	//marker images'
	const signal = 'signal.png';
	const gotham = 'gotham.png';
	const cave = 'cave.png';
   

    //The Marker Postions
	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Gotham",
			-33.90363,
            18.420529,
			gotham,
			50,
			50,
		],
		[
			'Bat Signal',
			-33.9668233,
			18.4080533,
			signal,
			40,
			40,
		],
		[
			'Bat Cave',
			-33.957652,
			18.4611991,
			cave,
			40,
			40,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}

}
