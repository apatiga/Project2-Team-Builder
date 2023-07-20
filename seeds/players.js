const fs = require('fs')
const results = [];
function chunkArray(array, chunkSize) {
    var result = [];
    
    for (var i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    
    return result;
  }
const data = fs.readFileSync('./Seeds/player_data.csv', "utf-8")
console.log(data)
const dataAsArray = data.split(',')
const players = []
const chunks = chunkArray(dataAsArray, 5)
console.log('We are going to do ' + chunks + ' chunks')
for (let i = 0; i < chunks.length; i++) {
    console.log(chunks[i])
    const player = {
        high_school: chunks[i][0],
        jersery_number: chunks[i][1],
        name: chunks[i][2],
        pos: chunks[i][3],
        rating: chunks[i][4]
    }

    players.push(player)
    
}

console.log(players)

csv({ separator: '\t' });
