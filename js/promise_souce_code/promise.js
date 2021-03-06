class Promise {
    constructor(executor) {
      console.log(executor)//-----构造函数先执行
      // resolve? 
      // () => {
      //   setTimeout(() => {
      //     resolve('aaaa');
      //   }, 2000);
      // }
      // fn
      this.status = 'pending'; 
      this.value = undefined;
      this.reason = undefined;
      this.onRejectedCallBacks=[];
      this.onResolveCallBacks=[];
      let resolve = (value) => {  
        this.status = 'resolved'; 
        this.value = value;//aaa
        this.onResolveCallBacks.forEach(fn=>fn())
      }
      let reject = (reason) => {
        this.status = 'rejected';
        this.value = reason;
        this.onRejectedCallBacks.forEach(fn=>fn())
      }
      executor(resolve, reject);
      // 开启了？  。。。
      // new 异步任务开始执行 
    }
    then (onFullfield, onRejected) {
        if(this.status==="pending"){
            this.onResolveCallBacks.push(()=>{onFullfield(this.value)});
            this.onRejectedCallBacks.push(()=>{onRejected(this.value)});
        }
    //   if (this.status === 'resolved') {
    //     onFullfield(this.value);
    //   }
    //   if (this.status === 'rejected') {
    //     onRejected(this.value);
    //   }
    }
  }
  module.exports = Promise;
  