//
//
// inputs:
// hubPoint = a coordinate pair for a hub
// spokeEndsArray = an array of coordinate pairs representing the end of the spokes
//
//
// output = an array of Leaflet polylines (has the same number of lines as spokeEndsArray's length)
//
//
// Here's the format of some sample input data...
//
// 		var hubPoint = [34.4197260467949, -119.85551834106445];
//
//		var linePoints = [
//			[34.42815122218392, -119.84873771667482],
//			[34.43133699162854, -119.87302780151366],
//			[34.413849161363814, -119.873628616333],
//			[34.41618580382617, -119.84350204467773]
//		];
//
// So the function could be called like this:
// mySpiderDiagram = spokes.create(hubPoint, spokeEndsArray);
//
// ps - later you could iterate through mySpiderDiagram and add it to the map like so:
//
// for (i = 0; i < mySpiderDiagram.length; i++) {
//    mySpiderDiagram[i].addTo(map);
// }
//

function create(hubPoint, spokeEndsArray) {
	var numberOfSpokes = spokeEndsArray.length;
	var spokeCounter = 0;

	var myLine = new Array();
	// array marker
	while (spokeCounter < numberOfSpokes) {
			mySpoke = [hubPoint,spokeEndsArray[spokeCounter]];
			mySpokesArray[spokeCounter] = L.polyline(mySpoke);
			spokeCounter++;
	}
	return mySpokesArray;
}
