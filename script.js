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