function generator(matLen, gr, grEat, pred, virus, energy, zombie, omnivorous, bomb) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 8;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }

    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < virus; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < energy; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < zombie; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < omnivorous; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    
    return matrix;
}

let side = 20;


var  matrix = generator(50, 350, 200, 125, 90, 200, 150, 4, 1);




let weather = false
function weather2() {
    weather = !weather
}
let male = false
let female = false
let maleAndFemale = true

function ChangeGenderMale() {
    male = true
    female = false
    maleAndFemale = false
    console.log(male, female, maleAndFemale);
}

function ChangeGenderFemale() {
    male = false
    female = true
    maleAndFemale = false
    console.log(male, female, maleAndFemale);
}

function MaleAndFemaleGender() {
    male = false
    female = false
    maleAndFemale = true
    console.log(male, female, maleAndFemale);
}

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let virusArr = []
let energyArr = []
let zombieArr = []
let omnivorousArr = []
let bombArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let vs = new Virus(x, y)
                virusArr.push(vs)
            }
            else if (matrix[y][x] == 5) {
                let en = new Energy(x, y)
                energyArr.push(en)
            }
            else if (matrix[y][x] == 6) {
                let zb = new Zombie(x, y)
                zombieArr.push(zb)
            }
            else if (matrix[y][x] == 7) {
                let os = new Omnivorous(x, y)
                omnivorousArr.push(os)
            }
            else if (matrix[y][x] == 8) {
                let bm = new Bomb(x, y)
                bombArr.push(bm)
            }

        }
    }
}


function draw() {

    if (weather == false) {
        Summer()
  
    }
    else {

        Winter()
    
    }
    function Summer(evt) {
        frameRate(3)
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill('green')
                } else if (matrix[y][x] == 0) {
                    fill('#acacac')
                } else if (matrix[y][x] == 2) {
                    fill('yellow')
                }
                else if (matrix[y][x] == 3) {
                    fill('red')
                }
                else if (matrix[y][x] == 4) {
                    fill('blue')
                }
                else if (matrix[y][x] == 5) {
                    fill('purple')
                }
                else if (matrix[y][x] == 6) {
                    fill('brown')
                }
                else if (matrix[y][x] == 7) {
                    fill('white')
                }
                else if (matrix[y][x] == 8) {
                    fill('orange')
                }
                rect(x * side, y * side, side, side)
            }
        }
    }
    function Winter(evt) {
        frameRate(1)
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill('lightgreen')
                } else if (matrix[y][x] == 0) {
                    fill('white')
                } else if (matrix[y][x] == 2) {
                    fill(255, 255, 50)
                }
                else if (matrix[y][x] == 3) {
                    fill('pink')
                }
                else if (matrix[y][x] == 4) {
                    fill(0, 191, 255)
                }
                else if (matrix[y][x] == 5) {
                    fill(200, 161, 200)
                }
                else if (matrix[y][x] == 6) {
                    fill(200, 133, 63)
                }
                else if (matrix[y][x] == 7) {
                    fill('#acacac')
                }
                else if (matrix[y][x] == 8) {
                    fill('orange')
                }
                rect(x * side, y * side, side, side)
            }
        }
        
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in zombieArr) {
        zombieArr[i].mul()
        zombieArr[i].eat()
        zombieArr[i].move()
    }
    for (let i in omnivorousArr) {

        omnivorousArr[i].eat()
        omnivorousArr[i].move()
    }
    if(clickCount>0){
        for (let i in bombArr) {

            bombArr[i].eat()
            bombArr[i].mul()
        }
    }

 

    var Cw = document.getElementById("weather");
    Cw.addEventListener("click", weather2)

    var Male = document.getElementById("male");
    Male.addEventListener("click", ChangeGenderMale);


    var female = document.getElementById("female");
    female.addEventListener("click", ChangeGenderFemale);

    var Male_And_Female = document.getElementById("MaleAndFemale");
    Male_And_Female.addEventListener("click", MaleAndFemaleGender);



}

function clickHandler(evt){
   if(weather == false){
    var str = "Weather is a winter";
    this.innerText = str;
   }
   else{
    var str = "Weather is a summer";
    this.innerText = str;
   }
   
}

var p = document.getElementById("weather");
p.addEventListener("click", clickHandler);


var clickCount = 0;
function clickHandler1(evt){
   clickCount++;

   var str = "Atomic bomb is added... end of the world...";
   this.innerText = str;
}

var e = document.getElementById("bomb");
e.addEventListener("click", clickHandler1);

