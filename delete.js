const fs = require('fs');
const readlineSync = require('readline-sync');

const data = fs.readFileSync('todos.json');
const todos = JSON.parse(data);

let showTodo = '';
todos.forEach((item, index) => {
  showTodo += `#${index} ${item.title}\n`
});

const answer = readlineSync.question(`您要刪除哪個待辦事項？\n${showTodo}`);

const answerToNumber = parseInt(answer);

if (isNaN(answerToNumber) || answerToNumber >= todos.length || answerToNumber < 0) {
  console.log('請輸入正確的數字');
  process.exit();
}

const todoTarget = todos[answerToNumber].title;
todos.splice(answerToNumber, 1);
fs.writeFileSync('todos.json', JSON.stringify(todos));
console.log(`刪除事項：${todoTarget}`);
process.exit();