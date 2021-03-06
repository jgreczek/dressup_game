var ros;
var topic1;
var topic2;
var topic3;
var topic4;
var topic5;
var topic6;
var main_topic;

var mapHat = {};
var mapMouth = {};
var mapFace = {};
var mapClothes ={};
var mapShoes = {};
var mapAcc = {};

var maki_hat = [
	"empty.png",
	"hat_astronaut.png",
	"hat_clown.png",
	"hat_wizard.png",
	"hat_dino.png",
	"hat_teacher.png",
	"hat_doctor.png",
	"hat_animal.png",
	"hat_surgeon.png"	
];

var maki_mouth = [
	"mouth_red.png",	
	"mouth_blue.png",
	"mouth_green.png",
	/*"mouth_cyan.png",
	"mouth_yellow.png",
	"mouth_magenta.png",*/
];

var maki_face = [
	"empty.png",
	"face_astronaut.png",
	"face_clown.png",
	"face_wizard.png",	
	"face_dinosaur.png",
	"face_teacher.png",
	"face_doctor.png",
	"face_animal.png",
	"face_surgeon.png"
];

var maki_body = [
	"base_body.png",
	"body_astronaut.png",
	"body_clown.png",
	"body_wizard.png",	
	"body_dinosaur.png",
	"body_teacher.png",
	"body_doctor.png",
	"body_animal.png",
	"body_surgeon.png"
];

var maki_feet = [
	"base_feet.png",
	"feet_astro.png",
	"feet_clown.png",
	"feet_wizard.png",	
	"feet_dino.png",
	"feet_teacher.png",
	"feet_doctor.png",
	"feet_animal.png",
	"feet_surgeon.png"
];

var maki_acc = [
	"empty.png",
	"acc_astronaut.png",
	"acc_clown.png",
	"acc_wizard.png",
	"acc_dinosaur.png",
	"acc_teacher.png",
	"acc_doctor.png",
	"acc_animal.png",
	"acc_surgeon.png"	
];

//Connecting to ROS
window.onload = setup;

function setup(){
	

	//Make sure to change the IP
	var ros = new ROSLIB.Ros({
		//Use the localhost one if running in on the laptop only
		//Use the local IP if accessing it from tablet
		
		//url: 'ws://192.168.0.21:9090'
		url: 'ws://192.168.8.217:9090'
		//url: 'ws://192.168.5.159:9090'
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

	start_dressUp(); // publish welcome ROS message 

	//maps of Maki's wardrobe components for ROS message purposes
	//hats map
	mapHat[0] = "no hat";
	mapHat[1] = "astrounaut helmet";
	mapHat[2] = "clown hat";
	mapHat[3] = "wizard hat";
	mapHat[4] = "dinosaur hat";
	mapHat[5] = "teacher hat";
	mapHat[6] = "doctor hat";
	mapHat[7] = "animal hat";
	mapHat[8] = "surgeon hat";


	//mouth map
	mapMouth[0] = "red mouth";
	mapMouth[1] = "blue mouth";
	mapMouth[2] = "green mouth";
	/*mapMouth[3] = "cyan mouth";
	mapMouth[4] = "yellow mouth";
	mapMouth[5] = "magenta mouth";*/

	// face accessories map
	mapFace[0] = "no face accessory";
	mapFace[1] = "astronaut face accessory";
	mapFace[2] = "clown face";
	mapFace[3] = "wizard eye";
	mapFace[4] = "dino sunglasses";
	mapFace[5] = "teacher sunglasses";
	mapFace[6] = "doctor face accessory";
	mapFace[7] = "animal face";
	mapFace[8] = "surgeon face accessory";

	//clothes map
	mapClothes[0] = "no costume";
	mapClothes[1] = "astronaut costume";	
	mapClothes[2] = "clown costume";
	mapClothes[3] = "wizard costume";
	mapClothes[4] = "dinosaur costume";
	mapClothes[5] = "teacher costume";	
	mapClothes[6] = "doctor costume";
	mapClothes[7] = "animal costume";
	mapClothes[8] = "surgeon costume";

	//shoes map
	mapShoes[0] = "regular shoes";
	mapShoes[1] = "astronaut shoes";
	mapShoes[2] = "clown shoes";
	mapShoes[3] = "wizard shoes";
	mapShoes[4] = "dinosaur shoes";
	mapShoes[5] = "teacher shoes";
	mapShoes[6] = "doctor shoes";
	mapShoes[7] = "animal shoes";
	mapShoes[8] = "surgeon shoes";

	//accessory
	mapAcc[0] = "no accessory";
	mapAcc[1] = "a flag";
	mapAcc[2] = "a horn";
	mapAcc[3] = "a wand";
	mapAcc[4] = "a mini dinosaur";
	mapAcc[5] = "an apple";
	mapAcc[6] = "a document";
	mapAcc[7] = "a piece of meat";
	mapAcc[8] = "a surgeon document";
}

var i = 0;
function change_prev_Hat(){

	i = i - 1;
	if(i == -1)
		i = 8;
	
	console.log(i);
	var hat = maki_hat[i];
	console.log(hat);

	document.getElementById('hat_maki').src = "image/" + hat;
	
}

function change_next_Hat(){

	i = i + 1;
	if(i == 9)
		i = 0;

	console.log(i);
	var hat = maki_hat[i];
	console.log(hat);

	document.getElementById('hat_maki').src = "image/" + hat;
}

var x = 0;
function change_prev_Mouth(){

	x = x - 1;
	if(x == -1)
		x = 2;

	console.log(x);
	var mouth = maki_mouth[x];
	console.log(mouth);
	
	document.getElementById('mouth_maki').src = "image/" + mouth;
}

function change_next_Mouth(){

	x = x + 1;
	if(x == 3)
		x = 0;

	console.log(x);
	var mouth = maki_mouth[x];
	console.log(mouth);
	
	document.getElementById('mouth_maki').src = "image/" + mouth;
}

var j = 0;
function change_prev_Face(){

	j = j - 1;
	if(j == -1)
		j = 8;

	console.log(j);
	var face = maki_face[j];
	console.log(face);
	
	document.getElementById('face_maki').src = "image/" + face;
}

function change_next_Face(){

	j = j + 1;

	if(j == 9)
		j = 0;

	console.log(j);
	var face = maki_face[j];
	console.log(face);
	
	document.getElementById('face_maki').src = "image/" + face;

}

var m = 0;
function change_prev_Body(){

	m = m - 1;
	if(m == -1)
		m = 8;

	console.log(m);
	var body = maki_body[m];
	console.log(body);
	
	document.getElementById('body_maki').src = "image/" + body;

}

function change_next_Body(){

	m = m + 1;

	if(m == 9)
		m = 0;
	
	console.log(m);
	var body = maki_body[m];
	console.log(body);
	
	document.getElementById('body_maki').src = "image/" + body;

}

var n = 0;
function change_prev_Feet(){

	n = n - 1;
	if(n == -1)
		n = 8;

	console.log(n);
	var feet = maki_feet[n];
	console.log(feet);
	
	document.getElementById('feet_maki').src = "image/" + feet;
	
};

function change_next_Feet(){

	n = n + 1;

	if(n == 9)
		n = 0;

	console.log(n);
	var feet = maki_feet[n];
	console.log(feet);
	
	document.getElementById('feet_maki').src = "image/" + feet;
	
};

var y = 0;
function change_prev_Acc(){

	y = y - 1;
	if(y == -1)
		y = 8;

	console.log(y);
	var acc = maki_acc[y];
	console.log(acc);
	
	document.getElementById('acc_maki').src = "image/" + acc;
};


function change_next_Acc(){

	y = y + 1;

	if(y == 9)
		y = 0;

	console.log(y);
	var acc = maki_acc[y];
	console.log(acc);
	
	document.getElementById('acc_maki').src = "image/" + acc;

};

//ROS publishes messages when the child hit the "Done" botton 
function submit(){
	
	var message = new ROSLIB.Message({
		//Add by Xuan, 11, Feb		
		data :  "Costume: " + "\n" + mapHat[i] + "\n" +
			mapFace[j] + "\n" +
			mapMouth[x] + "\n" +
			mapClothes[m] + "\n" +
			mapShoes[n] + "\n" +
			mapAcc[y] 
		/* 
		//origin code
		data : "Maki is wearing " + mapHat[i] + "\n" +
			"Maki has " + mapEyes[j] + "\n" +
			"Maki is wearing " + mapGlasses[x] + "\n" +
			"Maki is wearing " + mapClothes[m] + "\n" +
			"Maki is wearing " + mapShoes[n] + "\n" +
			"Maki has a " + mapAcc[y] + ", "
		*/
	});
	
	main_topic.publish(message);
}

function start_dressUp(){

	var message = new ROSLIB.Message({
		data: "Starting the dress up game!"
	});

	main_topic.publish(message);
}


function exit_dressUp(){
	var message = new ROSLIB.Message({		
		data : "exit customization" 
	});
	
	main_topic.publish(message);
}

	


