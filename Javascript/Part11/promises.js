function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved.");
    console.log(result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved.");
    console.log(result);
    return savetoDb("shradha");
  })
  .then((result) => {
    console.log("data3 saved.");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
  });

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

// let requestPromise = changeColor("red", 1000);
// console.log(requestPromise);

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  })
  .catch((error) => {
    console.log("an error occurred while changing colors");
    console.log(error);
  });

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
