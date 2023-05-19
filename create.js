const fs = require('fs');
const readlineSync = require('readline-sync');

const data = fs.readFileSync('todos.json');
const todos = JSON.parse(data);

const answer = readlineSync.question('您要新增什麼待辦事項？\n');
todos.push({title: answer});

fs.writeFileSync('todos.json', JSON.stringify(todos));
console.log(`新增事項：${answer}`);
process.exit();