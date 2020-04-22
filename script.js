
var app = document.getElementById("flipImage");

var imageList = ["images/swipePage.png","images/profilePage.png","images/appHomePage.png"];

var rotate = setInterval (changePic, 2000);

var i = 0;

//setAttribute is targeting the html src. set attribute can target
function changePic(){
	app.setAttribute("src",imageList[i]);
	i++;
	if(i >= imageList.length) {
		i=0;
	}
}