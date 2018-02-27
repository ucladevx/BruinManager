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

	// id user somehow by saving username
	var user = {
		"user": {
			"enrollment": enroll,
			"classes": classArr,
			"name": "taasin"		// TODO: save schema with username that is accessible to us later
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

	// make dynamic

	var lecture =  {
		"name": data[0] + " " + data[1],
		"section": data[17],
		"status": data[18],
		"waitlist_status": data[19],
		"days": data[20],
		"time": data[21],
		"location": data[22],
		"units": data[23],
		"instructor": data[24]
	}

	var discussion = {
		"section": data[27],
		"status": data[28],
		"waitlist_status": data[29],
		"days": data[30],
		"time": data[31],
		"location": data[32],
		"instructor": data[34],
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