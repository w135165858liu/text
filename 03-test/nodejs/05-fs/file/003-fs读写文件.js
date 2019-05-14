const fs = require('fs');

fs.appendFile('001.test.js', '追加的数据', (err) => {
  if (err) throw err;
  console.log('数据已追加到文件');
});