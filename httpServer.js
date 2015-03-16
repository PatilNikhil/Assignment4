/* Node module to creates http web server and listen to port 8000 for request.
   checks request is for Students and sends record according to querystring provided in request.
@author Nikhil */

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");

var sortData = require("./sortData");
var dataConverter = require("./dataConverter");
var checkSubstring = require("./checkSubstring");

var DataConversion = dataConverter.DataConversion;
var StringManip = checkSubstring.StringManip;
var sort = sortData.sort;

var Server = function() {
	console.log("Server is running....");
}

Server.prototype.start = function() {
	//function to create server
	 http.createServer(function(request, response) {
		console.log("Received request for :" + request.url);
		console.log("Header type :" + request.headers.accept);
		var path = url.parse(request.url).pathname;
		var qery = url.parse(request.url).query;
		var string = querystring.parse(qery).q;

		console.log("path :" + path);
		console.log("q : " + string);
		
		var type = request.headers.accept;
		//checking for only Get requests
		if(request.method == "GET") {
				//checking if request is for students
				if(path == "/students"){
					//reading file from perticular directory of disk
					fs.readFile("source.json", function(error, data) {
						if(error){
							//sending response to user if any internal error
							response.writeHead(500,{"content-type": "text/html"});
							response.end("<h1>Error while reading file</h1>");
						}
						else {
							var result= "";
							var sorted = "";
							//checking querystring is provided or not
							if(string != null) {	
								var object = sort.sortArray(JSON.parse(data));
								//calling hasString by passing querystring and json object
								sorted = StringManip.hasString(string, object);
							}
							else {
								//if query is not provided sort whole data
								sorted = sort.sortArray(JSON.parse(data));
							}
							//checking accept type provided by user and responding accordingly
							switch(type) {
								//if accept type is text
								case 'text': 
									result = DataConversion.toTxt(sorted);
									response.writeHead(200,{"Content-type": "text/html"});
									break;
								//if accept type is xml
								case 'xml': 
									result = DataConversion.toXml(sorted);
									response.writeHead(200,{"Content-type": "application/xml"});
									break;
								//if accept type is json or accept type is not provided
								case 'json': 
								default :
									result = JSON.stringify(sorted);
									response.writeHead(200,{"Content-type": "application/json"});
									break;	
							}
							//sending valid response and data 
							response.end(result);
						}
					});
				}
				else{
					//sends response to request other than "/students"
					response.writeHead(404,{"content-type": "text/html"});
					response.end("<h1>Sorry that page was not found</h1>");
				}
		}
		else {
			//sends response to request other than Get
			response.writeHead(401,{"content-type": "text/html"});
			response.end("Bad request");
		}
		//listens on port for the request
	}).listen(8000,function(){
		console.log("Listening to port : " + 8000);
	});
}

var myServer = new Server();
myServer.start();
