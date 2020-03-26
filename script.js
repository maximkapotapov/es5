/*
var massMark, heightMark, massJohn, heightJohn;
massMark = 90;
heightMark = 1.9;
massJohn = 50;
heightJohn = 1.6;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var bool = bmiMark > bmiJohn;

console.log (bmiMark, bmiJohn);

if (bool) {
    console.log ('Mark\'s is higher than John\'s');
} else {
    console.log ('John\'s is higher than Mark\'s');
}
*/

/*
var firstName = 'Max';
var age = 40;

    if (age < 13) {
    console.log(firstName + ' ' + 'is a young boy');
    } else if (age > 15 && age < 30) {
    console.log(firstName + ' ' + 'is a teenager');
    } else {
    console.log(firstName + ' ' + 'is a grown man');
    };

*/

/*
var age = 13;

var drink = age >=18 ? 'beer' : 'juice';

console.log('he can drink' + ' ' + drink);
*/

/*
var name = 'Max';
var job = 'teacher';

switch (job) {
    case 'teacher':    
        console.log(name + ' ' + 'is a teacher');
        break;
    case 'butcher':
        console.log(name + ' ' + 'is a butcher');
        break;
    default:
        console.log(name + ' ' + 'is a someone else');
    }
*/

/*
var firstName = 'Max';
var age = 40;

    switch (true) {
        case (age < 13):
            console.log(firstName + ' ' + 'is a young boy');
            break;
        case (age > 15 && age <30):
            console.log(firstName + ' ' + 'is a teenager');
            break;
        default:
            console.log(firstName + ' ' + 'is a grown man');
    }

*/

/*
var check = 20;
if (check || check === 0) {
    console.log ('defined');
} else {
    console.log ('undefined');
}

if (check == '20'){
    console.log ('coercion');
} else {
    console.log('not coercion');
}

console.log(check);
*/

/*
var teamJohn = (89 + 120 + 103) / 3;
var teamMike = (89 + 120 + 103) / 3;
var teamMary = (89 + 120 + 103) / 3;
var draw = teamJohn === teamMike && teamJohn > teamMary && teamMike > teamMary;
var draw2 = teamMike === teamMary && teamMike > teamJohn && teamMary > teamJohn;
var draw3 = teamJohn === teamMary && teamJohn > teamMike && teamMary > teamMike;
if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log ("John\'s team is winning with the average score" + ' ' + teamJohn);
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log ("Mike\'s team is winning with the average score" + ' ' + teamMike);
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log ("Mary\'s team is winning with the average score" + ' ' + teamMary);
} else if (draw) {
    console.log ("The Draw between John\'s team " + teamJohn + " and Mike\'s team " + teamMike + ". And Mary\'s team is scored with " + teamMary);
} else if (draw2) {
    console.log ("The Draw between Mike\'s team " + teamMike + " and Mary\'s team " + teamMary + ". And John\'s team is scored with " + teamJohn);
} else if (draw3) {
    console.log ("The Draw between John\'s team " + teamJohn + " and Mary\'s team " + teamMary + ". And Mike\'s team is scored with " + teamMike);
} else {
    console.log ("All teams have the same score");
};

*/

/*
function birth(par) {
    return 2000 - par;
}



function retirmentCount(year, firstName) {
    var age = birth(year);
    var retirment = 65 - age;
    if (retirment > 0) {
        console.log (firstName + ' is retiering in ' + retirment);
    } else {
        console.log(firstName + ' is retaired.');
    }
}

retirmentCount(1930, 'John');

*/

/*
var whatDo = function(name, job) {
    switch (job) {
        case 'teacher':
            return name + ' is teaching.';
        case 'driver':
            return name + ' is driving.';
        default:
            return name + ' is nothing';
    }     
}
console.log(whatDo('Max', 'teacher'));
*/

/*
var numbers = [2000, 1000, 500, 'designer'];

numbers.push('number');
numbers.unshift('lol');

console.log(numbers);

console.log(numbers.indexOf('number'));

var designer = numbers.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer';

console.log(designer);
*/

/*
function billsCalculator(bills) {
    if (bills < 50 && bills > 0) {
        var tipOne = bills * 0.2;
        var paidOne = bills + tipOne;
    } else if (bills > 50 && bills < 200) {
        var tipTwo = bills * 0.15;
        var paidTwo = bills + tipTwo;
    } else if (bills > 200) {
        var tipThree = bills * 0.1;
        var paidThree = bills + tipThree;
    } else {
        console.log('the bill is undefined');
    }
    let tips = [tipOne, tipTwo, tipThree];
    let paid = [paidOne, paidTwo, paidThree];
    console.log('The tips are ' + tips + ' and the whole payments are ' + paid);
}

billsCalculator(48, 150, 256);

*/

/*
var max = {
    firstName: 'Max',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Bob', 'Brown', 'Lol'],
    job: 'asslicker',
    isMarried: false,
    calcAge: function() {
        this.age = 2000 - this.birthYear;
    }
};
max.calcAge();
console.log(max);
*/

/*
let x = 'lastName';
console.log(max[x]);

max.birthYear = 2000;
console.log(max);


var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['job'] = 'designer';
console.log (jane);
*/

/*
let mark = {
    fullName: 'Mark Boloto',
    mass: 70,
    height: 1.8,
    calc: function() {
       this.bmi = this.mass / (this.height * this.height);
    }
}

let john = {
    fullName: 'John Zoloto',
    mass: 80,
    height: 1.9,
    calc: function() {
       this.bmi = this.mass / (this.height * this.height);
    }
}

if (mark.calc() > john.calc()) {
    console.log('Mark bmi is bigger. ' + mark.fullName + ' bmi is '+ mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log('John bmi is bigger. ' + john.fullName + ' bmi is '+ john.bmi);
} else {
    console.log('bmi is the same');
}
console.log(john, mark);

*/

/*
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ['john', 'designer', 1995, 'smith'];
for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (let i = john.length - 1; i >= 0; i-- ) {
    console.log(john[i]);
}

*/

var john = {
    bills: [124, 48, 268, 180, 42],
    calc: function() {
        this.tips = [];
        this.paid = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill > 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.paid[i] = bill + bill * percentage;
        } 
    }
}

var mark = {
    bills: [77, 375, 110, 45],
    calc: function() {
        this.tips = [];
        this.paid = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill > 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.paid[i] = bill + bill * percentage;
        } 
    }
}

john.calc();
mark.calc();

function averageMark() {
    var totalMark = 0;
    for (var i = 0; i < mark.tips.length; i++) {
        totalMark += mark.tips[i];
    }
    var sumMark = totalMark / mark.tips.length;
    return sumMark;
}

function averageJohn() {
    var totalJohn = 0;
    for (var i = 0; i < john.tips.length; i++) {
        totalJohn += john.tips[i];
    }
    var sumJohn = totalJohn / john.tips.length;
    return sumJohn;
}

console.log(mark, john); 
    
    if (averageMark() > averageJohn()) {
        console.log('The average tip of Mark\'s family is bigger - ' + averageMark());
    } else if (averageJohn() > averageMark()) {
        console.log('The average tip of John\'s family is bigger - ' + averageJohn());
    } else {
        console.log('tips are equal');
    }

 



