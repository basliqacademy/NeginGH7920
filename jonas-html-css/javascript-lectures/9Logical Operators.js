let country = "America"
let language = "English"
let population = 49
let isIsland=false


if (language==='English'&&(population<50)&& !isIsland) {
    console.log (`You should live in ${country}`)
} else{
    console.log(`${country} does not meet your criteria`)
}



country = "Iran"
language = "persion"
population = 140
isIsland=false


if (language&&(population<50)&& !isIsland) {
    console.log (`You should live in ${country}`)
} else{
    console.log(`${country} does not meet your criteria`)
}