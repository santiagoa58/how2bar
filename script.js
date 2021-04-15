//***Global Variables***//
//for image-slider
var z, currentImage = [1];
for (z = 1; z < document.getElementsByClassName("types-slider").length; z++) {
    currentImage.push(1);
}

//for types [more info]
var w, count = [0];
for (w = 1; w < document.getElementsByClassName("types").length; w++) {
    count.push(0);
}

//for detecting the used browser
var browser = navigator.userAgent.toLowerCase();
//***End Global Variables***//

/*displays more info in SPIRITS section*/
function showSpirits(num) {
    "use strict";
    var types = document.getElementsByClassName("types");
    if (count[num] === 0) {
        types[num].style.maxHeight = "3000px";
        //1 means more info is being displayed
        count[num] = 1;
    } else {
        types[num].style.maxHeight = "35px";
        //0 means more info is not being displayed
        count[num] = 0;
    }
}

//scroll to the top of the window
function scrollToTop() {
    "use strict";
    window.scrollTo(0, 0);
}

//Open the Navigation menu
function openNav() {
    "use strict";
    document.getElementById("Menu").style.width = "100%";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

//Close the Navigation menu
function closeNav() {
    "use strict";
    document.getElementById("Menu").style.width = "0%";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}

//slider: shows the next image
function nextImg(n) {
    var neximage = document.getElementsByClassName("types-slider");
    neximage[n].children[this.currentImage[n]].style.display = "none";
    this.currentImage[n] += 1;

    if (this.currentImage[n] >= neximage[n].children.length - 1) {
        this.currentImage[n] = 1;
    }
    neximage[n].children[this.currentImage[n]].style.display = "inline-block";
}

//slider: shows the previous image
function prevImg(n) {
    var preimage = document.getElementsByClassName("types-slider");
    preimage[n].children[this.currentImage[n]].style.display = "none";

    this.currentImage[n] -= 1;
    if (this.currentImage[n] < 1) {
        this.currentImage[n] = (preimage[n].children.length) - 2;
    }
    preimage[n].children[this.currentImage[n]].style.display = "inline-block";
}

/*Popular Brands*/
function showBrand(selId) {
    "use strict";
    var choice, brand, i, r, indx = 0, substr;
    brand = document.getElementById("brands-shown");
    if (selId.indexOf('-list') != -1) {
        var curList = document.getElementById(selId);
        var temp = curList.selectedIndex;
        choice = curList.value;

        //returns the selected index of all of the lists to 0
        for (var j = 0; j < document.getElementsByClassName("drp-list")[0].childElementCount; j++) {
            document.getElementsByClassName("drp-list")[0].children[j].selectedIndex = 0;
        }
        curList.selectedIndex = temp;
    } else {
        choice = selId;
    }

    //hides all the previously shown brands
    for (r = 1; r < brand.childElementCount; r++) {
        brand.children[r].style.display = "none";
    }

    brand.children[0].innerHTML = choice;
    for (i = 0; i < brand.childElementCount; i++) {
        substr = brand.children[i].id;
        if (substr.indexOf(choice.toLowerCase()) !=-1) {
            indx = i;
            break;
        }
    }
    if (indx !== 0) {
        brand.children[indx].style.display = "block"; 
    }
}

function showList(listName, obj) {
    "use strict";
    /*allList = #brands ul*/
    var k, m, i, listDiv, allList = document.getElementById('brands').children;

    /*allList.children.children = #brands ul li button*/
    for (k = 0; k < allList.length; k++) {
        //return the buttons to the original style
        for (m = 0; m < allList[k].childElementCount; m++) {
            allList[k].children[m].children[0].style.backgroundColor = "transparent";
            allList[k].children[m].children[0].style.color = "black";
        }
    }
    //highlight the clicked button
    obj.style.backgroundColor = "darkred";
    obj.style.color = "ghostwhite";

    //hides all the drop down lists
    listDiv = document.getElementsByClassName("drp-list");
    for (i = 0; i < listDiv[0].childElementCount; i++) {
        listDiv[0].children[i].selectedIndex = 0;
        listDiv[0].children[i].style.display = "none";
    }

    //displays the drop down list corresponding to the clicked button
    if (listName.indexOf('-list')!=-1) {

        document.getElementById(listName).style.display = "block";
    } else {
        showBrand(listName);
    }
}
/*FUTURE WORK
function brandsMore(brandShown, obj){
    var lastClicked;
    var curClicked = obj;
    var isBig = false;
    if(!isBig){
        obj.style.backgroundColor= "#D81414";
        obj.style.fontWeight="700";
        obj.style.fontSize="1.2em";
        obj.style.width="160px";
        obj.style.height="160px";
        obj.style.borderRadius="20px";
        lastClicked = obj;
        isBig=true;
    }
    else{
        obj.style.backgroundColor= "#D81414";
        obj.style.fontWeight="700";
        obj.style.fontSize="1.2em";
        obj.style.width="160px";
        obj.style.height="160px";
        obj.style.borderRadius="20px";
        lastClicked = obj;
        isBig=true;
    }
}
*/