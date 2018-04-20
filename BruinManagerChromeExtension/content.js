var xhr = new XMLHttpRequest();   // new HttpRequest instance 

function getEnrollmentAndClassData() {

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
	// get location of "Lec 1", all values are relative to this position
	var i;
	for(i = 0; i < data.length; i++){
		if(data[i] == "Lec 1"){
			i++;
			break;
		}
	}

	var lecture =  {
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

	var discussion = {
		"section": data[j+1],
		"status": data[j+2],
		"waitlist_status": data[j+3],
		"days": data[j+4],
		"time": data[j+5],
		"location": data[j+6],
		"instructor": data[j+8],
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
		if(confirm("Allow BruinManager to scrape data on this page?")) {
			// inject loader into html to tell user we are gathering data
			// CSS is in loader.css
			const loader = document.createElement("div");
			loader.id = "loader";
			// const node = document.createTextNode("Gathering Data...");
			// loader.appendChild(node);
			document.body.appendChild(loader);

			getEnrollmentAndClassData()
		} else {
			alert("BruinManager stopped!");
		}
	});

} 
// else if (window.location.href.indexOf("google.com") > -1) { //TODO: change this to domain of bruinmanager when we create a site

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
else if(window.location.href.indexOf("https://mysterious-retreat-53839.herokuapp.com") > -1){
	// idk();
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

