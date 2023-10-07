class Food {
  element: HTMLElement;

  constructor() {
    // get food element and assign to "element" property
    this.element = document.getElementById("food")!;
  }

  // get food X position
  get X() {
    return this.element.offsetLeft;
  }

  // get food Y position
  get Y() {
    return this.element.offsetTop;
  }

  change() {
    //generate a random position
    // minimum 0px maximum 290px
    // food position must 10 的倍数

    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

//test code
// const food = new Food();
// console.log("x", food.X, "Y", food.Y);
// food.change();
// console.log("x", food.X, "Y", food.Y);

export default Food;
