//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global variables)

//Drawing color art
var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";
imageListA[17] = "images/drawing/thumbs/artwork_18.jpg";
imageListA[18] = "images/drawing/thumbs/artwork_19.jpg";
imageListA[19] = "images/drawing/thumbs/artwork_20.jpg";
imageListA[20] = "images/drawing/thumbs/artwork_21.jpg";
imageListA[21] = "images/drawing/thumbs/artwork_22.jpg";
imageListA[22] = "images/drawing/thumbs/artwork_23.jpg";
imageListA[23] = "images/drawing/thumbs/artwork_24.jpg";
imageListA[24] = "images/drawing/thumbs/artwork_25.jpg";

//Oil color art
var imageListB = new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";

//Water color art
var imageListC = new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//Added an extra image list here for the homework
var imageListD = new Array();
imageListD[0] = "images/drawing/thumbs_homework/artwork_1.jpg";
imageListD[1] = "images/drawing/thumbs_homework/artwork_2.jpg";
imageListD[2] = "images/drawing/thumbs_homework/artwork_3.jpg";
imageListD[3] = "images/drawing/thumbs_homework/artwork_4.jpg";
imageListD[4] = "images/drawing/thumbs_homework/artwork_5.jpg";
imageListD[5] = "images/drawing/thumbs_homework/artwork_6.jpg";
imageListD[6] = "images/drawing/thumbs_homework/artwork_7.jpg";
imageListD[7] = "images/drawing/thumbs_homework/artwork_8.jpg";
imageListD[8] = "images/drawing/thumbs_homework/artwork_9.jpg";
imageListD[9] = "images/drawing/thumbs_homework/artwork_10.jpg";
imageListD[10] = "images/drawing/thumbs_homework/placeholder.jpg";

//create the buildThumbnail function
function buildThumbnails()
{

//hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");

//create an output variable
  var output = "";
  //first part: counter (we setup 0 to start counting the loop)
  //second part: the condition, (the loop will keep looping as long as the condition is true)
  //third part: the incrementor - adds one to the counter AFTER the code is executed in the brackets
  for(var i=0; i <imageListA.length; i ++)
      {
        //concatenation assignment operator..
        output += '<img src="' + imageListA[i] + '"/>';
      }
    for(var b=0; b <imageListB.length; b ++)
      {
        //concatenation assignment operator..
        output += '<img src="' + imageListB[b] + '"/>';
      }
    for(var c=0; c <imageListC.length; c ++)
      {
        //concatenation assignment operator..
        output += '<img src="' + imageListC[c] + '"/>';
      }
      for(var d=0; d <imageListD.length; d ++)
      {
        //added an extra list here for the homework..
        output += '<img src="' + imageListD[d] + '"/>';
      }
  thumbsDiv.innerHTML = output;
  
//thumbsDiv.innerHTML = 
//'<img src="' + imageList[0] + '"/>' +
//'<img src="' + imageList[1] + '"/>' +
//'<img src="' + imageList[2] + '"/>' +
//'<img src="' + imageList[3] + '"/>' +
//'<img src="' + imageList[4] + '"/>' 
//;
}

window.onload = function()
{
  buildThumbnails();//use of "fire off" this function
  //or invoke the function
};
