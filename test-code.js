// // promise的链式写法练习
// const p = new Promise(function (resolve, reject) {
//   resolve(1);
// })
//   .then(function (value) {             // 第一个then // 1

//     console.log(value);
//     return Promise.reject('第一个reject结果');
//   })
//   .then(function (value) {            // 第二个then // 2

//     console.log('第二个then的resolve里拿到', value);
//   }, function (error) {

//     console.log('第二个then的reject里拿到', error);
//   })
//   .then(function (value) {            // 第三个then // undefined

//     console.log('第三个then的resolve里拿到', value);
//     return new Promise(function (resolve, reject) { 
//       console.log('嵌套new执行1');
//       resolve('第三个then内部Promise的成功结果');
//       console.log('嵌套new执行2');
//     }).then(newResult => {

//       console.log('第三个then内部Promised的then的resolve里拿到', newResult);
//     });;

//   }, function (err) {

//     console.log('第三个then的reject里拿到', err);
//   })
//   .then(function (value) {            // 第四个then // resolve

//     console.log('第四个then的resolve里拿到', value);
//     return Promise.reject('第四个then的resolve返回的失败');
//   })
//   .then(function (value) {            // 第五个then //reject:reject

//     console.log('第五个then的resolve里拿到:' + value);
//   }, function (err) {

//     console.log('第五个then的reject里拿到:' + err);
//   });

// // then方法中要注意返回，如不返回会同时进行
// const p1 = new Promise(function(resolve,reject){
//   resolve(1);
// })
//   .then(function(result) {

//     console.log('执行p2');
//     p2(result).then(newResult => p3(newResult));

//   }).then(() => p4());

// // reject方法的作用，就等同于抛出错误。
// // 
// const promise = new Promise(function(resolve, reject) {
//   try {
//     throw new Error('test');            // try catch都会执行
//   } catch(e) {
//     reject(e);
//   }
// });
// promise.catch(function(error) {
//   console.log(error);
// });

// const promise = new Promise(function(resolve, reject) {
//   reject('test');
// });
// promise.catch(function(error) {
//   console.log(error);
// });

const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  setTimeout(function () { 
    try {
      throw new Error('test');            // try catch都会执行
    } catch(e) {
      console.log('e', e);
    }
    console.log('错误后续');
  }, 0)
});
promise.then(function (value) { 
  console.log(value) 
}).catch(function (error) {
  console.log('error', error);
});
setTimeout(() => { 
  console.log(123)
}, 1000);


console.log('----同步程序结束----');