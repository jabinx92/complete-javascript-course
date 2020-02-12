/**
 * What are promises?
 */

/* Promises are a good way to deal with asynchronous callback hell. FYI callback hell is just a way to make setTimeouts less confusing with all the callbacks.

Promises - Object that keeps track about whether a certain event has happened already or not.
They detemine what happens after the event has happened.
Implements the concept of a future value that we're expecting

Promises Stats - pending -> event happens to settled/resolved -> fulfilled or rejected
*/

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log(`This is in the then ${message}`)
// }).catch((message) => {
//     console.log(`This is in the catch ${message}`)
// })

// let a = new Promise((resolve, reject) =>{
//     let b = 5 * 2;
//     if(b === 25){
//         resolve('Great success!');
//     } else {
//         reject('Ultimate fail!');
//     }
// })

// a.then((message) => {
//     console.log(`Haha! You got it right! ${message}`)
// }).catch((message) => {
//     console.log(`Damn, you got it wrong. ${message}`)
// })

/**
 * CODEPEN PROMISES EX
 *  */ 

// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }
  
  function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = true
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  
//   watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   })
  
  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  
//   const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
//   })
  
//   const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
//   })
  
//   const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
//   })
  
//   Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(messages => {
//     console.log(messages)
//   })
  
//   Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(message => {
//     console.log(message)
//   })