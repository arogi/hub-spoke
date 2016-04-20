// Copyright 2016 Arogi, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
// So much documentation for such a tiny function!
//
// this function has a dependency on leaflet.js
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
//		var spokeEndsArray = [
//			[34.42815122218392, -119.84873771667482],
//			[34.43133699162854, -119.87302780151366],
//			[34.413849161363814, -119.873628616333],
//			[34.41618580382617, -119.84350204467773]
//		];
//
// So the function could be called like this:
// mySpiderDiagram = spokeCreate(hubPoint, spokeEndsArray);
//
// ps - later you could iterate through mySpiderDiagram and add it to the map like so:
//
// for (i = 0; i < mySpiderDiagram.length; i++) {
//    mySpiderDiagram[i].addTo(map);
// }
//

function spokeCreate(hubPoint, spokeEndsArray) {
	var numberOfSpokes = spokeEndsArray.length;
	var spokeCounter = 0;
	var mySpokesArray = new Array();
	var mySpoke;

	while (spokeCounter < numberOfSpokes) {
			mySpoke = [hubPoint,spokeEndsArray[spokeCounter]];
			mySpokesArray[spokeCounter] = L.polyline(mySpoke);
			spokeCounter++;
	}
	return mySpokesArray;
}
