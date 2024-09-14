const populations = [100,200,300,400]
const percentage2=[]
for (let i=0;i<populations.length;i++ ){
    const per = `${(populations[i] / 7900) * 100}%`
    percentage2.push(per)
}

console.log(percentage2)