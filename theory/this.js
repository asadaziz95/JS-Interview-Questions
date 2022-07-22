// brief concept about 'this'

// inside function keyword we do have reference to the global object(most likely windows) according
// to context.

// inside oject it will always have the reference to the object

//inside class it will be referring to the instance of the class

//When using function keyword we always refer to the global object and global object is window

// While arrow functions get the context of the parent class.

// task 1
function getItem() {
  console.log(this); //it if will console the global object
}

//task 2
const item = {
  title: "Bogee",
  getItem() {
    console.log("this", this);
  },
};

item.getItem();

//task 3

class Item {
  title = "Ball";
  getItem() {
    console.log("this", this);
  }
}
const itemObj = new Item();

itemObj.getItem();
