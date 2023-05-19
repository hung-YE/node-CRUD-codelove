const readlineSync = require('readline-sync');

const createTodo = require('./create');
const readTodo = require('./read');
const updatedTodo = require('./update');
const deleteTodo = require('./delete');

function doSomeThing() {
  const answer = readlineSync.question('您要執行下列什麼指令？\n1. 建立待辦事項\n2. 讀取待辦事項\n3. 更新待辦事項\n4. 刪除待辦事項\n5. 離開\n\n');  

  switch(answer) {
    case '1':
      createTodo();
      doSomeThing();
      break;
    case '2':
      readTodo();
      doSomeThing();
      break;
    case '3':
      updatedTodo();
      doSomeThing();
      break;
    case '4':
      deleteTodo();
      doSomeThing();
      console.log('\n');
      break;
    case '5':
      process.exit();
    default:
      doSomeThing();
      break;
  }
}

doSomeThing();