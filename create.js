const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.readFile('todos.json', (err, data) => {
  const todos = JSON.parse(data);

  readline.question('您要新增什麼待辦事項？\n', function(answer) {
    todos.push({title: answer});
    fs.writeFile('todos.json', JSON.stringify(todos), function(err) {
      console.log(`新增事項：${answer}`)
      process.exit();
    })
  })
});