function getEnrollmentAndClassData() {

	// TODO: check if we are on the study list
	const enrollmentData = document.getElementById("EnrApptTermTable").textContent // get entire enrollment data

	const enrollmentDataArray = enrollmentData.split("\n") 				// get each <p> as a separate element
							.map(string => string.trim()) 				// remove whitespace
							.filter(string => true ? string : false) 	// filter out empty strings

	// TODO: Get class data
	const classes = document.getElementsByClassName("lastEnrolled");
	var arr = Array.prototype.slice.call(classes)						// convert HTML collection into an array
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i].textContent.split("\n")						// get each <p> as a separate element
	 						.map(string => string.trim()) 				// remove whitespace
	 						.filter(string => true ? string : false)) 	// filter out empty strings);
	}			

	// TODO: parse enrollmentDataArray and class data and store these in chrome storage
	chrome.storage.sync.set({
		"data": {
			"enrollmentData": {},
			"classData": [],
		}
	}, () => {
	    console.log("Stored Class and Enrollment Data")
	    document.getElementById("loader").style.display = "none";
	});
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

} else if (window.location.href.indexOf("google.com") > -1) { //TODO: change this to domain of bruinmanager when we create a site

	// Get the data that was stored
	chrome.storage.sync.get(/* String or Array */["data"], function(items){
	    console.log(items)
	});

}
