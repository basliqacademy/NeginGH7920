const numNeighbours = prompt(`How many neighbour countries does your country have?`)
if (numNeighbours == 1) {
    console.log(`Only 1 border`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}


numNeighbours = prompt(`How many neighbour countries does your country have?`)
if (numNeighbours === 1) {//false becouse string isnt equal to number. and if we type 1 else block will excute    console.log(`Only 1 border`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}



numNeighbours = Number(prompt(`How many neighbour countries does your country have?`))
if (numNeighbours === 1) {//if we type 1 this block will execute becouse Number function convert string to number.
    console.log(`Only 1 border`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}

