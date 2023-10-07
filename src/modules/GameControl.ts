import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// game controller, to control other class
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  //store snake direction
  direction: string = "";

  //record whether game over
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // game init
  init() {
    //keyboard event
    document.addEventListener("keydown", this.keydownHandler.bind(this));

    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    //need to check event.key
    this.direction = event.key;
    // this.run();
  }

  //method to control snake run
  run() {
    /* 
    change position according direction
    up top -
    down top +
    left left -
    right left +
    */

    // get snake current position
    let X = this.snake.X;
    let Y = this.snake.Y;

    // change X AND Y according direction
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    //check whether snake eat food
    this.checkEat(X, Y);

    //change snake position
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      //   console.log(error);

      alert(error + "! Game over!");
      this.isLive = false;
      //   this.init();
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // check snake whether eat food
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();

      this.scorePanel.addScore();

      this.snake.addBody();
    }
  }
}

export default GameControl;
