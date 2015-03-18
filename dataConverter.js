/* 
Node module it has to functions,
1) function will take json object and returns text result.
2) function will take json object and returns xml result.
 @author Nikhil 
 */ 

//Dependancies
var fs = require("fs");
var xml = require("xml");

var DataConversion = function() {
    console.log("Instantiating fileWrite class");
}

/*
     * @desc Function to convert given json in text format and return it.
     * @param data
     */
DataConversion.prototype.toTxt =  function(data) {

	console.log("[dataConverter.js]  >> [toText]  >> Converting to Text");

	var records = data.students;
	if(records.length > 0){

		//Assigning first line
		var result = " Id | First Name | Last Name | Score ";
		//concatinating each student details
		for (var i = 0; i < records.length; i++) {

			result += "\n "+ records[i].id + " | " + records[i].fName + " | " + records[i].lName + " | " + records[i].score;
		}

		return result;
	}
	else{

		return "No maching record Found";
	}

	console.log("[dataConverter.js]  >> [toText]  >> Conversion completed");
}

/*
     * @desc Function to convert given json in text format and return it.
     * @param data
     */
DataConversion.prototype.toXml =  function(data) {

	console.log("[dataConverter.js]  >> [toXml]  >> Converting to Xml");

	var sorted = data.students;
	if(sorted.length > 0){

		//creating string for json
		var result = '{ "Students": [';
		for (var i = 0; i < sorted.length; i++) {

			//concatinating each student details
			result += ' { "Student": [ { "_attr": { "Id": ' + sorted[i].id + '} },{ "Name": "' + sorted[i].fName + ' ' + sorted[i].lName + '"},{ "Score": "' + sorted[i].score + '"} ] }';
			
			//concatinating "," upto second last record
			if(i != sorted.length - 1)	
			{
				result += ',';
			}	
		}
		result += '] }';

		return xml(JSON.parse(result), true);
	}
	else{

		return "No maching record Found";
	}

	console.log("[dataConverter.js]  >> [toXml]  >> Conversion completed");
}

exports.DataConversion = new DataConversion();
