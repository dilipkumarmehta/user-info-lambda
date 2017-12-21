function validate() {
	var Education = document.getElementById("Education").value;
	var Experience = document.getElementById("Experience").value;
	var Location = document.getElementById("Location").value;
	var Password = document.getElementById("Password").value;
	var PrimarySkill = document.getElementById("PrimarySkill").value;
	var SecondarySkill = document.getElementById("SecondarySkill").value;
	var UserId = document.getElementById("UserId").value;
	var UserName = document.getElementById("UserName").value;
	var ItemJSON;
	
	ItemJSON = '{ "education":"'+Education+'", "experience": "'+Experience+'", "location": "'+Location+'", "password": "'+Password+'","primarySkill": "'+PrimarySkill+'","secondarySkill": "'+SecondarySkill+'","userId": "'+UserId+'", "userName": "'+UserName+'"}'
	console.log(ItemJSON);
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://0r9kx68l3e.execute-api.us-west-2.amazonaws.com/Dev/crud-operation", false);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(ItemJSON);
	var response = JSON.parse(xhttp.responseText);
	alert("end");

	/*
	 * Rest EndPoint:
	 * https://0r9kx68l3e.execute-api.us-west-2.amazonaws.com/Dev/crud-operation
	 * 
	 * POST request
	 * 
	 * Body { "education": "string", "experience": "string", "location":
	 * "string", "password": "string", "primarySkill": "string",
	 * "secondarySkill": "string", "userId": "1", "userName": "string" }
	 */

}