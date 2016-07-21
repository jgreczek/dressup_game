var ros;
var main_topic;

//Connecting to ROS
window.onload = setup;

function setup(){

	//Make sure to change the IP
	var ros = new ROSLIB.Ros({
		//Use the localhost one if running in on the laptop only
		//Use the local IP if accessing it from tablet
		
		//url: 'ws://192.168.0.21:9090'
		url: 'ws://192.168.7.194:9090'
		//url: 'ws://localhost:9090'
		//url: 'ws://10.120.114.241:9090'
		//url: 'ws://172.20.10.3:9090'
	});

	ros.on('connection',function(){
		console.log('Connecting to websocket server.');
	});

	ros.on('error',function(error){
		console.log('Error connecting to websocket server: ', error);
	});

	ros.on('close',function(){
		console.log('Connection to websocket closed.');
	});

	main_topic = new ROSLIB.Topic({
		ros: ros,
		name: '/Game_MAKI',
		messageType: 'std_msgs/String'

	});

	start_painRate();
}

function start_painRate(){

	var message = new ROSLIB.Message({
		data: "Start pain anxiety"
	});

	main_topic.publish(message);
} 

var painRate;
function pain_rate1() {
	
	painRate = 1;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	
	document.getElementById("next").style.display = "block";

	var message = new ROSLIB.Message({
		data: "1-great"
	});

	main_topic.publish(message);
	
}


function pain_rate2() {

	painRate = 2;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	//modal.style.display = "none";
	document.getElementById("next").style.display = "block";
	

	var message = new ROSLIB.Message({
		data: "2-okay"
	});

	main_topic.publish(message);
}


function pain_rate3() {

	painRate = 3;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	//modal.style.display = "none";
	document.getElementById("next").style.display = "block";
	

	var message = new ROSLIB.Message({
		data: "3-average"
	});

	main_topic.publish(message);
}


function pain_rate4() {

	painRate = 4;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	//modal.style.display = "none";
	document.getElementById("next").style.display = "block";

	var message = new ROSLIB.Message({
		data: "4-little-anxious"
	});

	main_topic.publish(message);
}


function pain_rate5() {

	painRate = 5;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	//modal.style.display = "none";
	document.getElementById("next").style.display = "block";	
	
	var message = new ROSLIB.Message({
		data: "5-anxious"
	});

	main_topic.publish(message);
}


function pain_rate6() {

	painRate = 6;
	console.log('pain rate: ' + painRate);
	var modal = document.getElementById('myModal');
	//modal.style.display = "none";
	document.getElementById("next").style.display = "block";
	
	var message = new ROSLIB.Message({
		data: "6-very-anxious"
	});

	main_topic.publish(message);
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/


