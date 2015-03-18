/* 
Node Module to check given string is substring of fName or lName if it is then push to new array result.
return json object with this array.
@author Nikhil 
*/


var StringManip = function() {
	console.log("Instantiating StringManip class");
};

/*
     * @desc Function to accepts string and json object to check substing.
     * @param string
     * @param data
     */
StringManip.prototype.hasString = function (string, data) {

	console.log("[checkSubstring.js]  >> [hasString]  >> Checking substring");

	var record = data.students;
	var result = [];
	for(var i=0; i<record.length; i++)
	{	
		//checking fName or lName has string ( indexOf() returns index of string if it is present else return -1 ) 
		if((record[i].fName).indexOf(string) > -1 || (record[i].lName).indexOf(string) > -1 ) {

			//pushing that object in new array
			result.push(record[i]);
		}
	}
	//assigning json object's array to new array
	data.students = result;
	return data;

	console.log("[checkSubstring.js]  >> [hasString]  >> Checking completed");
}

exports.StringManip = new StringManip();
