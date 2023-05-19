const fs = require('fs');

fs.readFile('todos.json', (err, data) => {
  let todos = JSON.parse(data);

  console.log('您的代辦事項：')
  todos.forEach((todo, index) => console.log(`#${index} ${todo.title}`))

  process.exit();
});