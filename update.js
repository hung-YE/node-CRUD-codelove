const fs = require('fs');
const readlineSync = require('readline-sync');

const data = fs.readFileSync('todos.json');
const todos = JSON.parse(data);

let showTodo = '';
todos.forEach((item, index) => {
  showTodo += `#${index} ${item.title}\n`
});

const answer = readlineSync.question(`您要更新哪個待辦事項？\n${showTodo}`);

const answerToNumber = parseInt(answer);

if (isNaN(answerToNumber) || answerToNumber >= todos.length || answerToNumber < 0) {
  console.log('請輸入正確的數字');  
  process.exit();
}

const updateAnswer = readlineSync.question(`您想把內容更新成什麼？\n`);
todos[answerToNumber].title = updateAnswer;

fs.writeFileSync('todos.json', JSON.stringify(todos));
console.log(`更新事項：${updateAnswer}`);

process.exit();