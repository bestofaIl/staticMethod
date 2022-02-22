let out1 = document.querySelector('.out-1');
let input1 = document.querySelector('.i-1');
let btn1 = document.querySelector('.btn-1');

function task1(amount) {
    let success = 0;
    let cos;
    for (let i = 0; i < amount; i++) {
        let x1 = Math.random();
        let x2 = Math.random();
        let x3 = Math.random();
        let y1 = Math.random();
        let y2 = Math.random();
        let y3 = Math.random();


        let line1 = Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
        let line2 = Math.sqrt( Math.pow((x2 - x3),2) + Math.pow((y2 - y3),2));
        let line3 = Math.sqrt( Math.pow((x3 - x1),2) + Math.pow((y3 - y1),2));


        if (line1 > line2 && line1 > line3) {
            cos = ( Math.pow(line2,2) + Math.pow(line3,2) - Math.pow(line1,2) )/ (2 * line2 * line3);
        }

        if (line2 > line1 && line2 > line3) {
            cos = ( Math.pow(line1,2) + Math.pow(line3,2) - Math.pow(line2,2) )/ (2 * line1 * line3);
        }

        if (line3 > line1 && line3 > line2) {
            cos = ( Math.pow(line1,2) + Math.pow(line2,2) - Math.pow(line3,2) )/ (2 * line1 * line2);
        }

        if (cos < 0) {
            success += 1;
        }
    }

    return success/amount;

}

btn1.onclick = () => {
    out1.textContent = task1(input1.value);
}


let out5 = document.querySelector('.out-5');
let input5 = document.querySelector('.i-5');
let btn5 = document.querySelector('.btn-5');

function task5(amount) {
    function rand5() {
        return Math.random() * 5;
    }

    let squareSum = 0;

    for (let i = 0; i < amount; i++) {
        let Diameter = rand5();
        squareSum += Math.PI * Math.pow(Diameter/2,2);
    }
    return squareSum/amount;
}

btn5.onclick = () => {
    out5.textContent = task5(input5.value);
}


let out8 = document.querySelector('.out-8');
let input81 = document.querySelector('.i-81');
let input82 = document.querySelector('.i-82');
let btn8 = document.querySelector('.btn-8');

function task8(amount,N) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let success = 0;

    for (let i = 0; i < amount; i++) {
        let persons = [];
        let seats = [];
        for (let k = 0; k < N; k++) {
            seats.push(k);
            //console.log(seats[k]);
        }

        for (let j = 0; j < N; j++) {
            let randomSeat = getRandomIntInclusive(0,seats.length - 1)
            persons[j] = seats[randomSeat];
            seats.splice(randomSeat,1);
        }

        function check (ar) {
            for (let i = 0; i < ar.length; i++) {
                if (ar[i] === i) {
                    return false;
                }
            }
            return true;
        }

        if (check(persons)) {
            success += 1;
        }
    }

    return success/amount;

}

btn8.onclick = () => {
    out8.textContent = task8(input81.value,input82.value);
}


let out3 = document.querySelector('.out-3');
let input3 = document.querySelector('.i-3');
let btn3 = document.querySelector('.btn-3');


function task3(amount) {
    let success = 0;
    let D;
    let a;
    let b;
    let c;
    for (let i = 0; i < amount; i++) {
        a = Math.random();
        b = Math.random();
        c = Math.random();

        D = (Math.pow(b,2) - 4*a*c);

        if (D >= 0) {
            success += 1;
        }
    }

    return success/amount;
}

btn3.onclick = () => {
    out3.textContent = task3(input3.value);
}


let out2 = document.querySelector('.out-2');
let input2 = document.querySelector('.i-2');
let btn2 = document.querySelector('.btn-2');


function task2(amount) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let success = 0;
    let cos;
    for (let i = 0; i < amount; i++) {
        let x1 = getRandomIntInclusive(0,400000000);
        let x2 = getRandomIntInclusive(0,400000000);
        let x3 = getRandomIntInclusive(0,400000000);
        let y1 = getRandomIntInclusive(0,200000000);
        let y2 = getRandomIntInclusive(0,200000000);
        let y3 = getRandomIntInclusive(0,200000000);


        let line1 = Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
        let line2 = Math.sqrt( Math.pow((x2 - x3),2) + Math.pow((y2 - y3),2));
        let line3 = Math.sqrt( Math.pow((x3 - x1),2) + Math.pow((y3 - y1),2));


        if (line1 > line2 && line1 > line3) {
            cos = ( Math.pow(line2,2) + Math.pow(line3,2) - Math.pow(line1,2) )/ (2 * line2 * line3);
        }

        if (line2 > line1 && line2 > line3) {
            cos = ( Math.pow(line1,2) + Math.pow(line3,2) - Math.pow(line2,2) )/ (2 * line1 * line3);
        }

        if (line3 > line1 && line3 > line2) {
            cos = ( Math.pow(line1,2) + Math.pow(line2,2) - Math.pow(line3,2) )/ (2 * line1 * line2);
        }

        if (cos < 0) {
            success += 1;
        }
    }

    return success/amount;
}

btn2.onclick = () => {
    out2.textContent = task2(input2.value);
}









