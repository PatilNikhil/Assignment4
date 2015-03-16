/* Node module which takes json object and sort data of students array in descending of score and returns object.
 @author Nikhil */

var sort = function(){
	console.log("Instantiating sort class..");
};

//function to sort records of student.
sort.prototype.sortArray = function (data) {
	console.log("Sorting data...!");
	if(data != null){
		//assigning array of students to variable
		var records = data.students;
		//sorting data in descending of score
		for (var i = 1; i < records.length; i++){
			if(records[i].score > records[i-1].score){
				var temp = records[i];
				records[i] = records[i-1];
				records[i-1] = temp;
			}
		}
		return data;
	}
	else{
		console.log("Error : Object is empty ");
	}
}
exports.sort = new sort();
