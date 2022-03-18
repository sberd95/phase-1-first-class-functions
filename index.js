/*

function Monday() {
    console.log("Go for a five-mile run")
    console.log("Pump iron")
}
function Tuesday() {
    console.log("Go for a five-mile run")
    console.log("Swim 40 laps")
}
function Wednesday() {
    console.log("Go for a five-mile run")
    console.log("Go for a five-mile run")
}
function Thursday() {
    console.log("Go for a five-mile run")
    console.log("Pump iron")
}
function Friday() {
    console.log("Go for a five-mile run")
    console.log("Swim 40 laps")
}
// Condensing activities under functions
function runFiveMiles() {
    console.log("Go for a five-mile run")
}
function liftWeights() {
    console.log("Pump iron")
}
function swimFortyLaps() {
    console.log("Swim 40 laps")
}
//New form of Monday
function Monday2() {
    runFiveMiles()
    liftWeights()
}
//Creating a callback
function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}
//Newer form of Monday
function Monday3() {
    exerciseRoutine(liftWeights)
}
Monday3()
//Implementing an off day of stretching with an arrow function defined on the spot
exerciseRoutine(() => console.log("Stretch! Work that core!"))

//Morning routine with breakfast
function morningRoutine(exercise) {
    let breakfast
    if (exercise === liftWeights) {
        breakfast = 'protein bar'
    } else if (exercise === swimFortyLaps) {
        breakfast = 'kale smoothie'
    } else {
        breakfast = 'granola'
    }

    exerciseRoutine(exercise)
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
    }
}
const afterExercise = morningRoutine(liftWeights)

//Does the exerciseRoutine part of the function and stores the callback function for later
afterExercise
//Triggers the callback and lets you have breakfast
afterExercise()

*/

function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function() {4 + 5}
}
