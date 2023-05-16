var add = function(x, y) {
  return new Promise((resolve,reject) => {
    var sum = x + y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("not add"));
    }
  });
};

var subtract = function(x, y) {
  return new Promise((resolve, reject) => {
    var sum = x - y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error("not sub"));
    } 
  });
};

add(2,2)
  .then((added) => {
    return subtract(added, 3);
  })
  .then((subtracted) => { 
    return add(subtracted, 5);
  })
  .then((added) => {
      return added * 2;    
  })
  .then((result) => {
    console.log("result is ", result);
  })
  .catch((err) => {
    console.log(err);
  });
  