## 在node.js中所有事情都是并行的
  例如一个王国中，国王就是node，他有一个仆人，国王每天起来叫仆人过来并给他一个任务清单叫仆人按照清单去完成任务，然后国王继续睡觉，当仆人完成任务后，就去报告报告国王， 告诉他任务完成情况，国王不关心你怎么完成的
代码示例：
```js
var fs = require('fs');
var sys = require('sys');

fs.readFile('treasure-chamber-report.txt', function(report) {
  sys.puts('oh, look at all my money: '+report);
});

fs.writeFile('letter-to-princess.txt', '...', function(){
  sys.puts('can't wait to hear back from her!');
});
```
上面代码给node分配了两个任务：read和write，一旦完成了一个任务，相应的回调函数就会被执行，
注意：
  - 上面代码中同一时间**仅仅只有一个**回调被执行——资源独占，当read回调函数在执行时，及时此时write任务已经完成那么他的回调必须等待read执行完成后才能执行
  - 上面两个任务的执行是没有顺序的
从上可以看出，**JavaScript是单线程的、基于事件回调机制的**——一定要注意JavaScript这两个特点

## 为什么使用node.js
有一下几个原因
### 高效
在Web应用中，主要的时间花费在请求数据并等待响应，由于JavaScript是基于事件回调，因此，可以一次执行所有的数据查询，在查询完成之后再去执行事件回调函数即可，这样查询所花费的时间就是查询任务中最慢的那个查询任务花费的时间
在这个查询的时候，我们可以继续去做其他的事情，不需要在原地等待查询结果，当然，在其他语言中可以使用多进程实现同样的效果，但是在JavaScript中使用的**事件回调机制**来实现的


### 在前后端都可以使用JavaScript实现

### 使用V8引擎对JavaScript解析
V8引擎在解析JavaScript时，会将代码解析为机器码，执行速度更快

## 是否使用nodejs
可以从以下两个方面考虑：
- 如果很多高并发，nodejs很擅长处理高并发
- 对于小项目，nodejs实现起来没有什么问题，对于大项目，需要好好评估
  
  
 




**参考**
- [Understanding Node.js](http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb)
