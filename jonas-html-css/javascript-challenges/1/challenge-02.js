let markMass = 78;
let markHeight = 1.69;
let bmiMark = markMass / markHeight ** 2;
console.log(bmiMark);



let johnMass = 92;
let johnHeight = 1.95;
let bmiJohn = johnMass / johnHeight ** 2
console.log(bmiJohn);

if (bmiJohn>bmiMark) {
    console.log (`John's BMI is heigher than Mark's!`, `John's BMI (${bmiJohn}) is heiger than Mark's (${bmiMark}).`)
}else {
    console.log (`Mark's BMI is heigher than John's!`, `Mark's BMI (${bmiMark}) is heiger than John's (${bmiJohn}).`) 
}



markMass = 95;
markHeight = 1.88;
bmiMark = markMass / markHeight ** 2;
console.log(bmiMark);

johnMass = 92;
johnHeight = 1.76;
bmiJohn = johnMass / johnHeight ** 2;
console.log(bmiJohn);


if (bmiJohn>bmiMark) {
    console.log (`John's BMI is heigher than Mark's!`, `John's BMI (${bmiJohn}) is heiger than Mark's (${bmiMark}).`)
}else {
    console.log (`Mark's BMI is heigher than John's!`, `Mark's BMI (${bmiMark}) is heiger than John's (${bmiJohn}).`) 
}