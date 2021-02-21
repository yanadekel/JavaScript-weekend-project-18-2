const myFilterFunc = (arr, callback) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr
}



let callbackFilter = item =>  item % 2 === 0;



console.log(myFilterFunc([1,2,3,4],callbackFilter))

/////////////////////////////////////////////////////////////////////////////////////////


const myForEachFunc = (callback) => { 
  
  for (let i = 0; i < this.length; i++){
   this[i] = callback(this[i]);
  }
}

let callbackForEach=i=>i/2;

arr1 = [1,2,3,4];
// arr1.myForEachFunc(callbackForEach);
console.log(arr1);

///////////////////////////////////////////////////////////////////////////////////////////

const myMapFunc = (arr, callback) => { 
  mymapArr= [];
  for (let i = 0; i < arr.length; i++){
    mymapArr.push(callback(arr[i]));
  }
  return mymapArr;
}


let callbackMap = i=>i/2;
console.log(myMapFunc([1,2,3,4],callbackMap))

