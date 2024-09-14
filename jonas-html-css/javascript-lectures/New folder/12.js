const populations = [100, 200, 300, 400]
const percentage3 = []
let i = 0
while (i < populations.length) {
    const per = `${(populations[i] / 7900) * 100}%`
    percentage3.push(per)
    i++
}

console.log(percentage3)