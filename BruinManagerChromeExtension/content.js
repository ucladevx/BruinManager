/*
	Flow of saving data for a new user:
		user goes to BH
		login through fb (gmail implemented later)
			save user name, email, userID in local storage
		go to myUCLA, scrape class data and save in chrome sync storage
		come back to BH
			redirected to dashboard, where a user object with class data and fb data is pushed to mLab
				calendar won't work on this first login, should work in calendar page
*/

var xhr = new XMLHttpRequest();   // new HttpRequest instance

function getEnrollmentAndClassData() {

	// Temporarily commented out, TODO: if no enrollment data, post an empty object
	// TODO: check if we are on the study list
	const enrollmentData = document.getElementById("EnrApptTermTable").textContent // get entire enrollment data

	const enrollmentDataArray = enrollmentData.split("\n") 				// get each <p> as a separate element
							.map(string => string.trim()) 				// remove whitespace
							.filter(string => true ? string : false) 	// filter out empty strings

	var enroll = processEnrollementData(enrollmentDataArray);

	// TODO: Get class data
	var classArr = new Array();

	const classes = document.getElementsByClassName("lastEnrolled");
	var classData = Array.prototype.slice.call(classes)						// convert HTML collection into an array
	for(var i = 0; i < classData.length; i++){
		var p2 = processClassData( classData[i].textContent.split("\n")						// get each <p> as a separate element
	 						.map(string => string.trim()) 				// remove whitespace
	 						.filter(string => true ? string : false) ); 	// filter out empty strings)
		classArr[i] = p2;
	}

	// TODO: save schema with username that is accessible to us later
	var user = {
		"user": {
			"enrollment": enroll,
			// "enrollment": {},
			"classes": classArr,
			"name": "",
			"user_id": "",
			"email": ""
		}
	}

	console.log(user);

	// TODO: parse enrollmentDataArray and class data and store these in chrome storage
	chrome.storage.sync.set({'data': user}, () => {
	    console.log("Stored Class and Enrollment Data")
	    document.getElementById("loader").style.display = "none";
	});
}

//first pass 6-8, second pass 11-13
function processEnrollementData(data){	// TODO: only get this once, first pass data goes away once it passes

	var firstPass = {
		"start": data[6],
		"end": data[7],
		"units": data[8]
	};

	var secondPass = {
		"start": data[11],
		"end": data[12],
		"units": data[13]
	};

	var passData = {
		"first_pass": firstPass,
		"second_pass": secondPass
	}

	return passData;
}

function processClassData(data){

	console.log(data);

	var normalClass = -1;
	// get location of "Lec 1", all values are relative to this position

	var i;
	for(var k = 0; k < data.length; k++){
		if(data[k] == "Lec 1" || data[k] == "Lec 2" || data[k] == "Lec 3" || data[k] == "Lec 4" || data[k] == "Lec 5" || data[k] == "Lec 6"){
			normalClass = 1;
			i = ++k;
			break;
		}

		else if (data[k].includes("Lec 1") || data[k].includes("Lec 2") || data[k].includes("Lec 3") || data[k].includes("Lec 4") || data[k].includes("Lec 5") || data[k].includes("Lec 6")){
			if (data[k].indexOf("Dis ") < 0 || data[k].indexOf("Lab ") < 0){
				normalClass = 0;
				i=k;
				break;
			}
		}

		else if(data[k].includes("Lab ") && data[k].length == 5){
			normalClass = 0;
			i = k;
			break;
		}

		else if(data[k].includes("Stu ") || data[k].includes("Sem ")){
			normalClass = 0;
			i = k;
			break;
		}

		else if( data[k].includes("Tut 1") || data[k].includes("Tut 2") || data[k].includes("Tut 3")){
			normalClass = 0;
			i = k;
			break;
		}

	}

	var lecture;
	var discussion;

	if(normalClass){
		console.log(i);
		lecture =  {
			"name": data[0] + " " + data[1],
			"section": data[i-1],
			"status": data[i],
			"waitlist_status": data[i+1],
			"days": data[i+2],
			"time": data[i+3],
			"location": data[i+4],
			"units": data[i+5],
			"instructor": data[i+6]
		}

		var j;
		for(j = i; j < data.length - 1; j++){
			if(data[j] == "Exchange Class"){
				if(data[j+1] != "Change Grade Type"){
					break;
				}
				else{
					j++;
					break;
				}
			}
		}

		discussion = {
			"section": data[j+1],
			"status": data[j+2],
			"waitlist_status": data[j+3],
			"days": data[j+4],
			"time": data[j+5],
			"location": data[j+6],
			"instructor": data[j+8]
		}
	}

	else if(!normalClass){
		lecture =  {
			"name": data[0] + " " + data[1],
			"section": data[i],
			"status": data[i+1],
			"waitlist_status": data[i+2],
			"days": data[i+3],
			"time": data[i+4],
			"location": data[i+5],
			"units": data[i+6],
			"instructor": data[i+7]
		}

		discussion = {
			"section": "",
			"status": "",
			"waitlist_status": "",
			"days": "",
			"time": "",
			"location": "",
			"instructor": "",
		}
	}


	var clasData = {
		"lecture": lecture,
		"discussion": discussion
	}

	return clasData;
}


// if we are on the myucla study list
if(window.location.href.indexOf("ucla.edu") > -1 && window.location.href.indexOf("studylist") > -1) {

	chrome.storage.sync.get(/* String or Array */["data"], function(data){
		if(confirm("With your consent, we will now obtain your study list schedule for this quarter and enrollment appointments.")) {
			// inject loader into html to tell user we are gathering data
			// CSS is in loader.css
			const loader = document.createElement("div");
			loader.id = "loader";
			// const node = document.createTextNode("Gathering Data...");
			// loader.appendChild(node);
			document.body.appendChild(loader);

			getEnrollmentAndClassData()
			alert("We've got your data, now head back to www.bruinhub.com!")
		} else {
			alert("BruinHub has been paused!");
		}
	});

}

else if (window.location.href.indexOf("arcane-cove-10079.herokuapp.com") > -1) {
	// Get the data that was stored

	chrome.storage.sync.get('data', function(items){

	   	console.log(items.data.user);

		var url = "https://arcane-cove-10079.herokuapp.com/post/user";
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
		xhr.send(JSON.stringify(items.data.user));

	});
}

//TODO: only POST if data has changed
// post fb data and user classes to backend from intermediate page
else if(window.location.href.indexOf("https://mysterious-retreat-53839.herokuapp.com/intermediate") > -1){

	var b = localStorage.getItem("myBMData");
	var c = JSON.parse(b);
	console.log(c.name);
	console.log(c.email);
	console.log(c.id);

	chrome.storage.sync.get('data', function(items){

		var b = localStorage.getItem("myBMData");
		var c = JSON.parse(b);

	   	items.data.user.email = c.email;
	   	items.data.user.user_id = c.id;
	   	items.data.user.name= c.name

	   	console.log(items.data.user);

		var url = "https://arcane-cove-10079.herokuapp.com/post/user";
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
		xhr.send(JSON.stringify(items.data.user));

	});

}

// else if(window.location.href.indexOf("https://mysterious-retreat-53839.herokuapp.com/dashboard") > -1){
//
// 	var b = localStorage.getItem("myBMData");
// 	var c = JSON.parse(b);
// 	console.log(c.name);
// 	console.log(c.email);
// 	console.log(c.id);
//
// 	chrome.storage.sync.get('data', function(items){
//
// 		var b = localStorage.getItem("myBMData");
// 		var c = JSON.parse(b);
//
// 	   	items.data.user.email = c.email;
// 	   	items.data.user.user_id = c.id;
// 	   	items.data.user.name= c.name
//
// 	   	console.log(items.data.user);
//
// 		var url = "https://arcane-cove-10079.herokuapp.com/post/user";
// 		xhr.open("POST", url, true);
// 		xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// 		xhr.send(JSON.stringify(items.data.user));
//
// 	});
//
// }


//TODO: only POST if data has changed
// else if(window.location.href.indexOf("https://mysterious-retreat-53839.herokuapp.com") > -1){
// 	// idk();
// 	var b = localStorage.getItem("myBMData");
// 	var c = JSON.parse(b);
// 	console.log(c.name);
// 	console.log(c.email);
// 	console.log(c.id);
//
// 	chrome.storage.sync.get('data', function(items){
//
// 		var b = localStorage.getItem("myBMData");
// 		var c = JSON.parse(b);
//
// 	   	items.data.user.email = c.email;
// 	   	items.data.user.user_id = c.id;
// 	   	items.data.user.name= c.name
//
// 	   	console.log(items.data.user);
//
// 		// var url = "https://arcane-cove-10079.herokuapp.com/post/user";
// 		// xhr.open("POST", url, true);
// 		// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// 		// xhr.send(JSON.stringify(items.data.user));
//
// 	});
// }
