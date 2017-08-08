// Initialize Firebase
var config = {
	apiKey: "AIzaSyAMVLNvgkPaH9oUoFGN6V5aDYJn8I-hIgQ",
	authDomain: "preparacion-talentfest.firebaseapp.com",
	databaseURL: "https://preparacion-talentfest.firebaseio.com",
	projectId: "preparacion-talentfest",
	storageBucket: "preparacion-talentfest.appspot.com",
	messagingSenderId: "59336994437"
};
firebase.initializeApp(config);

function login(provider){
	firebase.auth().signInWithPopup(provider).then(function(result) {

		var token = result.credential.accessToken;
		var user = result.user;
		localStorage.setItem("email", user.email);
		localStorage.setItem("name", user.displayName);
		console.log('user',user);

		console.log(+localStorage.getItem("email"))
	}).catch(function(error) {
		var errorMessage = error.message;
		console.log('error',errorMessage)
	});
};

function ingresarFacebook (){
	var provider = new firebase.auth.FacebookAuthProvider();
	login(provider);
};
function ingresarGoogle (){
	var provider = new firebase.auth.GoogleAuthProvider();
	login(provider);
}

var facebook = document.querySelector("#login-facebook");
var gmail = document.querySelector('#login-gmail');

facebook.addEventListener('click', ingresarFacebook);
gmail.addEventListener('click', ingresarGoogle);

/*Termina LogIng*/