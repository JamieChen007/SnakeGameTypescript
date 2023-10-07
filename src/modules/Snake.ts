class Snake {
  head: HTMLElement;
  element: HTMLElement;
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    // if new value equal to previous value, no need to change
    if (this.X === value) {
      return;
    }

    // judge X whether in 0-290
    if (value < 0 || value > 290) {
      throw new Error("snake hit wall");
    }

    //judge snake turn around X
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      console.log("snake turn");

      if (value > this.X) {
        // if new X greater than previous X ,means snake run to right, means snake turn around, should let snake keep running to left
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    this.moveBody();

    this.head.style.left = value + "px";

    //check whether snake head hit bodies
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    // judge Y whether in 0-290
    if (value < 0 || value > 290) {
      throw new Error("snake hit wall");
    }

    //judge snake turn around Y
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log("snake turn");

      if (value > this.Y) {
        // if new Y greater than previous Y ,means snake run to down, means snake turn around, should let snake keep running to top
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    this.moveBody();

    this.head.style.top = value + "px";
    //check whether snake head hit bodies
    this.checkHeadBody();
  }

  addBody() {
    const snakeBody = document.createElement("div");
    this.element.insertAdjacentElement("beforeend", snakeBody);
    // this.element.insertAdjacentElement("beforeend", "<div></div>");
  }

  // body move function
  moveBody() {
    console.log(this.bodies.length);

    /* 
    set back body position as front body position
    */

    for (let i = this.bodies.length - 1; i > 0; i--) {
      //get body position
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      //set position to current body
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }

  //check whether snake head hit bodies
  checkHeadBody() {
    //get all bodies, check whether position is same as snake head
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("Snake hit itself");
      }
    }
  }
}

export default Snake;
