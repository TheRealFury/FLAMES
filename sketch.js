var firstName = '';
var firstArray = [];
var secondName = '';
var secondArray = [];
var commonLetters = 0;
var operationsDone = 0;
var flamesCharacter = '';
var flames = 'FLAMES';
var flamesIMG = '';

function setup(){
  createCanvas(500,300);
  flamesIMG = loadImage('Pictures/flames.jpg');
  first = createInput();
  first.position(200, 160);
  second = createInput();
  second.position(200, 200);
  submit = createButton('Submit');
  submit.position(50, 250);
  submit.mousePressed(doStuff);
}

function draw(){
  background(0);
  displayStuff();
  actuallyDoStuff();
}

function actuallyDoStuff(){
  if(operationsDone == 1){

  }
}

function doStuff(){
  firstName = first.value();
  secondName = second.value();
  firstArray = [];
  secondArray = [];
  commonLetters = 0;
  flamesCharacter = '';
  for(var i = 0; i < firstName.length; i++){
    if(firstName[i] != ' '){
      firstArray.push(firstName[i].toLowerCase());
    }
  }
  for(var ii = 0; ii < secondName.length; ii++){
    if(secondName[ii] != ' '){
      secondArray.push(secondName[ii].toLowerCase());
    }
  }
  var x = 0;
  while(x < firstArray.length){
    for(var y = 0; y < secondArray.length; y++){
      if(firstArray[x] == secondArray[y]){
        secondArray.splice(y, 1);
        commonLetters += 1;
        break;
      }
    }
    x += 1;
  }
  if(commonLetters % 6 == 0){
    flamesCharacter = flames[5];
  }
  else{
    flamesCharacter = flames[(commonLetters % 6) - 1];
  }
}

function displayStuff(){
  image(flamesIMG, 70, 0);
  fill('white');
  textSize(14);
  text("First person's name - ", 40, 175);
  text("Second person's name - ", 40, 215);

  if(flamesCharacter != ''){
    fill('white');
    text("Result - " + flamesCharacter, 200, 265);
  }
}