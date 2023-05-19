const fs = require('fs');

const data = fs.readFileSync('todos.json');

const todos = JSON.parse(data);

console.log('您的代辦事項：')
todos.forEach((todo, index) => console.log(`#${index} ${todo.title}`))

process.exit();