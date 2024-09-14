const calAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win😍😊👏 (${avgDolphins} VS. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ✌😁👍(${avgKoalas} VS. ${avgDolphins})`)
    } else {
        console.log('No team wins😢')
    }
}
//DATE1
scoreDolphins = calAverage(44, 23, 71);
scoreKoalas = calAverage(65, 54, 49);
console.log(scoreDolphins);
console.log(scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//DATE2
scoreDolphins = calAverage(85, 54, 41);
scoreKoalas = calAverage(23, 34, 27);
console.log(scoreDolphins);
console.log(scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);