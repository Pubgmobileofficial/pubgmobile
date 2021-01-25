var config=null,rootFirebase=null;
// if (typeof(Storage) !== 'undefined') {

// 	var i = localStorage['firebase_config_'+window.location.hostname];
// 	if(i){
// 		//console.log('exist local store');
// 		i = JSON.parse(i);
// 		config=i.config;
// 		rootFirebase=i.root;
// 		firebase.initializeApp(config);
// 	}
// 	else{
// 		//console.log('new local store');
// 		setFirebaseInitStore();
// 	}

// } else {
// 	console.log("Browser does not support Web Storage...");
// 	setFirebaseInitStore();
// }
setFirebaseInitStore();
function setFirebaseInitStore(){
}