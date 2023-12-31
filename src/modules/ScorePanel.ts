class ScorePanel {
  score = 0;
  level = 1;
  maxLevel: number;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";

    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

//test code
// const scorePanel = new ScorePanel(100, 2);
// for (let i = 0; i < 200; i++) {
//   scorePanel.addScore();
// }

export default ScorePanel;
