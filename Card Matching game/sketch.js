//https://editor.p5js.org/kkm/sketches/AFoIXjcv5
let x, y;
let sx, sy;
let gamestart = false;
let countersec;
let w = 0;
let j = 0;
let imgLoad = [];
let q = 0;
let gametext = 0;
let e = 0;
let xx = [0, 0, 0],
  yy = [0, 0, 0];
dup = [];
let p = 0;
let rancard;
let tempx = [],
  tempy = [];
let px, py;
let u;
let imgStr = [];
let check = [];
let buttont = [0, false, false];
let qx,
  qy = 0;
let score = 0;
let vad = [];
let reactime = 0;
let count = 800;
let intro;
let opacity = 0;
let bg;
let card ;
let fa = 0;

function preload() {
  for (let a = 0; a < 18; a++) {
    imgStr.push("src/"+(1 + a) + ".jpg");
    imgStr.push("src/"+(1 + a) + ".jpg");
  }
  shuffle(imgStr, 1);

  for (let i = 0; i < imgStr.length; i++) {
    imgLoad.push(loadImage(imgStr[i]));
    check[i] = false;
  }
  // imgLoad.push(loadImage('19.jpg'));
  //  for(let s = 0; s<imgLoad.length; s++){
  //imgLoad.push(loadImage('19.jpg'));

  //  }
intro = loadImage('src/intro.png');
  bg = loadImage('src/F.png');
  card = loadImage('src/card.png')
  gametext = loadFont("RubikBubbles-Regular.ttf");
}

function setup(e) {
  createCanvas(500, 700);
  //rectMode(CENTER)
  countersec = 0;
}

function draw() {
  background(0);
  textFont(gametext);
  textAlign(CENTER);
  fill("white");
  textSize(28);
  textAlign(CENTER,CENTER);
  image(bg,0,0,500,700)
  image(intro,110,70,280,220)
  opacity = 255*sin ( frameCount/30)
  fill(255,opacity);
  
  text("click to start game", 250, 450);
  countersec = 0;

  if (gamestart == true) {
    background('#EB4980');
    for (let i = 10; i < width - 10; i += 80) {
      for (let s = 10; s < 500 - 10; s += 80) {
        image(imgLoad[q], i, s, 80, 80);
        q++;
        if (q >= 36) {
          q = 0;
        }
      }
    }
    countersec = floor(millis() / 1000);
  }

  if (countersec >= 3) {
    background('#EB4980');
    j = frameCount + 50;
    for (let i = 10; i < width - 10; i += 80) {
      for (let s = 10; s < 500 - 10; s += 80) {
        w = 80 * sin(j / 100 + 100);

        if (j > 365) {
          j = 0;
        }

        image(imgLoad[q], i, s, w, 80);
        q++;
        if (q >= 36) {
          q = 0;
        }
      }
    }
    if (j <= 0) {
      background('#EB4980');
      text('2 double cards = +1 score',250,550);
      text('feel free to play! ',250,650)
      fill(243,238,238,100)
      text('score : '+score,150,600);
      text('fail : '+ fa,350,600 );
      
      for (let i = 10; i < width - 10; i += 80) {
        for (let s = 10; s < 500 - 10; s += 80) {
          fill("rgb(249,235,235)");
          strokeWeight(1);
          image(card,i, s, 78,78);

          x = floor(mouseX / 80);
          y = floor(mouseY / 80);
          sx = i;
          sy = s;
          if (x * 80 + 10 == i && y * 80 + 10 == s) {
            fill("rgb(229,179,229)");
            rect(x * 80 + 10, y * 80 + 10, 80);
          }
          if (check[floor(sx / 80) + floor(sy / 80) * 6] == true) {
            image(imgLoad[floor(s / 80) + floor(i / 80) * 6], i, s, 80, 80);
          }

          if (buttont[1] == true && buttont[2] == true) {
            count--;
            if (count == 0) {
              print("ok");
              if (imgStr[xx[1] * 6 + yy[1]] == imgStr[xx[2] * 6 + yy[2]]) {
                score++;
                print(score);
              } else {
                print("fas");
                fa++;
                check[xx[1] + yy[1] * 6] = false;
                check[xx[2] + yy[2] * 6] = false;
                
              }
              buttont[1] = false;
              buttont[2] = false;
              reactime = 0;
              count = 800;
              print(imgStr[xx[1] * 6 + yy[1]], imgStr[xx[2] * 6 + yy[2]]);
            }
          }
        }
      }
    }
    if(score == 18){
      text('congrats!',250,250)
    }
  }
}

function mouseReleased() {
  qx = floor(mouseX / 80);
  qy = floor(mouseY / 80);
  clickresponse();
  if (gamestart == false) {
    gamestart = true;
  }
}

function clickresponse() {
  if (countersec >= 5) {
    if (buttont[1] == false) {
      xx[1] = qx;
      yy[1] = qy;
      check[xx[1] + yy[1] * 6] = true;
      buttont[1] = true;
      //   vad[0] = imgStr[]
    } else {
      if (buttont[2] == false) {
        xx[2] = qx;
        yy[2] = qy;
        check[xx[2] + yy[2] * 6] = true;
        buttont[2] = true;
      }
    }
  }
}
