// console.log(process.argv)//属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
//process.env 属性返回包含用户环境的对象
// console.log(process.env)
//process.pid 属性返回进程的PID。
// console.log(process.pid)
process.nextTick()//process.nextTick(callback) 方法将 callback 添加到下一个时间点的队列。 一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。