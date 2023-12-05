alert("welcome bitch!!!");
// class Color {
//     // Declare: every Color instance has a private field called #values.
//     values;
//     constructor(r, g, b) {
//       this.values = [r, g, b];
//     }
//     getRed() {
//       return this.values[0];
//     }
//     setRed(value) {
//       this.values[0] = value;
//     }
// }
  
//   const red = new Color(255, 0, 0);
//   console.log(red.getRed()); // 255
  

function rgbToHsl(r, g, b) {
    // Normalize RGB values to the range [0, 1]
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;
  
    // Find the maximum and minimum values among the RGB components
    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);
  
    // Calculate the lightness
    const lightness = (max + min) / 2;
  
    // If the maximum and minimum values are equal, the color is achromatic (gray)
    if (max === min) {
      return { h: 0, s: 0, l: lightness * 100 };
    }
  
    // Calculate the saturation
    const delta = max - min;
    const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  
    // Calculate the hue
    let hue;
    switch (max) {
      case normalizedR:
        hue = ((normalizedG - normalizedB) / delta + (normalizedG < normalizedB ? 6 : 0)) * 60;
        break;
      case normalizedG:
        hue = ((normalizedB - normalizedR) / delta + 2) * 60;
        break;
      case normalizedB:
        hue = ((normalizedR - normalizedG) / delta + 4) * 60;
        break;
    }
  
    return { h: hue, s: saturation * 100, l: lightness * 100 };
}
  
  // Example usage:
  const rgbColor = { r: 255, g: 127, b: 80 };
  const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);
  console.log(hslColor);

  class Color {
    constructor(r, g, b) {
      // values is now an HSL array!
      this.values = rgbToHsl([r, g, b]);
    }
    getRed() {
      return this.values[0];
    }
    setRed(value) {
      this.values[0] = value;
    }
  }
  
  const red = new Color(255, 0, 0);
//   console.log(red.values[0]); // 0; It's not 255 anymore, because the H value for pure red is 0  

class Colors {
    // Declare: every Color instance has a private field called #values.
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    getRed() {
      return this.#values[0];
    }
    setRed(value) {
      this.#values[0] = value;
    }
  }
  
  const reds = new Colors(255, 0, 0);
  console.log(reds.getRed()); // 255


//   Using private value of another class

class Colou {
    #values;
    constructor(r, g, b) {
      this.#values = [r, g, b];
    }
    redDifference(anotherColor) {
      // #values doesn't necessarily need to be accessed from this:
      // you can access private fields of other instances belonging
      // to the same class.
      return this.#values[0] - anotherColor.#values[0];
    }
  }
  
  const redsy = new Colou(255, 0, 0);
  const crimson = new Colou(220, 20, 60);
  console.log(redsy.redDifference(crimson)); // 35



// class ruler{
//     #material;
//     #length;

//     constructor(material, length){
//         this.#material = material;
//         this.#length = length;
//     }

// }

// class eraser{
//     #material;
//     #length;

//     constructor(material, length){
//         this.#material = material;
//         this.#length = length;
//     }

//     lengthDifference(anotherClass){
//         if(!('#length' in anotherClass)){
//             throw new TypeError("Color instance expected");
//         }

//         return this.#length - anotherClass.#length;
//     }

// }

// const newRuler = new ruler("plastic", 120);
// const newEraser = new eraser("rubber ", 15);

// console.log(newRuler.lengthDifference(newEraser));

//  Using "in" to access the private field of a different class


// class Ruler {
//     #material;
//     #length;

//     constructor(material, length) {
//         this.#material = material;
//         this.#length = length;
//     }
// }

// class Eraser {
//     #material;
//     #length;

//     constructor(material, length) {
//         this.#material = material;
//         this.#length = length;
//     }

//     lengthDifference(anotherClass) {
//         if (!('length' in anotherClass)) {
//             throw new TypeError("Color instance expected");
//         }

//         return this.#length - anotherClass.length;
//     }
// }

// const newRuler = new Ruler("plastic", 120);
// const newEraser = new Eraser("rubber", 15);

// console.log(newRuler.lengthDifference(newEraser));



class Ruler {
    #material;
    #length;

    constructor(material, length) {
        this.#material = material;
        this.#length = length;
    }

    getMaterial() {
        return this.#material;
    }

    getLength() {
        return this.#length;
    }
}

class Eraser {
    #material;
    #length;

    constructor(material, length) {
        this.#material = material;
        this.#length = length;
    }

    lengthDifference(anotherClass) {
        if (!(anotherClass instanceof Ruler)) {
            throw new TypeError("Ruler instance expected");
        }

        return this.#length - anotherClass.getLength();
    }
}

const newRuler = new Ruler("plastic", 120);
const newEraser = new Eraser("rubber", 15);

console.log(newEraser.lengthDifference(newRuler));


// --------------------------------------------------

const pink= new Color(255, 0, 0);
pink.pink = 0;
pink.blue = 130; 
pink.black = 178;
pink.orange = 123;
console.log(pink.pink); // 0

console.log(pink.blue);
console.log(pink.black);
console.log(pink.orange);



// Static initialization??

class ClassWithStaticInitializationBlock {
    #staticProperty1 = 'Property 1';
    #staticProperty2;
    static {
      this.staticProperty2 = 'Property 100';
      this.staticProperty1 = "Static property 1";
    }
}
  
console.log(ClassWithStaticInitializationBlock.staticProperty1);
// Expected output: "Property 1"
console.log(ClassWithStaticInitializationBlock.staticProperty2);
// Expected output: "Property 2"


var y = "Outer y";

class A {
  static field = "Inner y";
  static {
    var y = this.field;
  }
}

// var defined in static block is not hoisted
console.log(y); // 'Outer y'


// super.property

class Aaa {
    static field = "static field";
  }
  
  class Baa extends Aaa {
    static {
      console.log(super.field);
    }
}

// 

console.log("--------------------------------------------------------------");

class geometryBox{
    #values;
    constructor(company, price, material, quality){
        this.#values =[company,price, material,quality];
    }
    getalpha(){
        return this.#values;
    }

    // getalpha(){
    //     return this.#values[3];
    // }
}


const ClassmateBox = new geometryBox("classmate", 250, 10, 100);

console.log(ClassmateBox.getalpha());
// console.log(ClassmateBox.alpha());

// ----------------------------------------------------------------------------//
console.log("-----------------------------------------------------------------");

class ball{
    #values;
    constructor(company, size, weight){
        this.#values = [company, size, weight];

    }

    get company(){
        return this.#values[0];
    }
    getsize(){
        return this.#values[1];
    }
    getweight(){
        return this.#values[2];
    }
    setcompany(value){
        this.#values[0] = value;
    }
    getsize(){
         this.#values[1] = value;
    }
    getweight(){
        this.#values[2] = value;
    }
    toString(){
        return this.#values.join("_");
    }



}

class FootBall extends ball{
    #type;
    constructor(company, size, weight,type){
        super(company, size, weight);
        this.#type = type;
    }
    setType(value){
        this.#type = value; 
    }
    getType(){
        return this.#type;
    }
    toString(){
        return `${super.toString()}_${this.#type}`; 
    }

}

const WorldCupBall = new FootBall("Adidas", 5, 450, "football");
console.log(WorldCupBall.getType());
console.log(WorldCupBall.company);
console.log(WorldCupBall.toString());


console.log(WorldCupBall instanceof ball);
console.log(WorldCupBall instanceof FootBall);

function incrementDay(date) {
    return date.setDate(date.getDate() + 1);
  }
  const date = new Date(); // 2019-06-19
  const newDay = incrementDay(date);
  console.log(newDay); // 2019-06-20
  // The old date is modified as well!?
  console.log(date); // 2019-06-20



//   promisies  _______________________--------------------_______________________//

// Arrow function expressions can have an implicit return; so, () => x is short for () => { return x; } ;

// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
//   }
  
//  function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
//   }
  
// createAudioFileAsync(audioSettings, successCallback, failureCallback);

// // if createAudioFileAsync was asked to return a value and we had to implement a callBack functyion

// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// // Chaining

// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//       doThirdThing(newResult, function (finalResult) {
//         console.log(`Got the final result: ${finalResult}`);
//       }, failureCallback);
//     }, failureCallback);
//   }, failureCallback);


// //
// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);  

// // ----------------------------------------------------------------------------------//

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);


// // ---------------------------------------------------------------------------------//

// doSomething()
//   .then((results) => doSomethingElse(results))
//   .then((newResult) =>doThirdThing(newResult))
//   .then((finalResult)=> {
//     console.log("whatever you did it!!")
//   })
//   .catch(failureCallback);

// // -----------------------------Fetch keyWord (used to track completion and recieve value)

// const listOfIngredients = [];

// doSomething()
//   .then((url) => {
//     // `return` keyword now included in front of fetch call.
//     return fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         listOfIngredients.push(data);
//       });
//   })
//   .then(() => {
//     console.log(listOfIngredients);
//     // listOfIngredients will now contain data from fetch call.
//   });


  const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve("Operation successful");
      } else {
        reject("Error occurred");
      }
    }, 2000); // Simulating a 2-second delay
  }); 

// Promises are used to handle AJAX request \\


// Example code 

function makeAjaxRequest(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          // Check if the response status is in the range 200-299 (indicating success)
          if (response.ok) {
            // Parse the JSON data from the response
            return response.json();
          } else {
            // If the response status is not in the success range, reject the Promise with an error message
            reject(`Error: ${response.status} - ${response.statusText}`);
          }
        })
        .then(data => {
          // Resolve the Promise with the parsed JSON data
          resolve(data);
        })
        .catch(error => {
          // If any error occurs during the fetch or parsing, reject the Promise with the error message
          reject(`Error: ${error.message}`);
        });
    });
  }
  
  // Example usage:
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
  makeAjaxRequest(apiUrl)
    .then(data => {
      console.log('Data received:', data);
      // Perform further operations with the data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error appropriately
    });
  

  



  

