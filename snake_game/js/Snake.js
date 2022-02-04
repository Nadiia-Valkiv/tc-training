class Snake {
  constructor(user) {
    this.startX = user.startPosition.x;
    this.startY = user.startPosition.y;
    this.keyCodeUp = user.KEYS.UP;
    this.keyCodeDown = user.KEYS.DOWN;
    this.keyCodeLeft = user.KEYS.LEFT;
    this.keyCodeRight = user.KEYS.RIGHT;
    this.score = 0;
    this.direction = "right";
    this.snakeLength = user.startLength;
    this.snake = [{ x: this.startX, y: this.startY }];
    this.snakeX = this.snake[0].x;
    this.snakeY = this.snake[0].y;
    this.food = {
      x: HELPERS.random.getX(),
      y: HELPERS.random.getY(),
    };
  }

  draw() {
    HELPERS.drawApple(this.food.x, this.food.y);
    for (let i = 0; i < this.snake.length; i++) {
      HELPERS.drawSnakeSegment(this.snake[i].x, this.snake[i].y);
    }
    if (this.snakeX === this.food.x && this.snakeY === this.food.y) {
      this.score++;
      this.displayScore()
      this.createFood();
    } else {
      this.snake.pop();
    }

    this.changeDirection()

    let newHead = {
      x: this.snakeX,
      y: this.snakeY,
    };
    this.eatTail(newHead, this.snake);
    this.headHit()
    this.snake.unshift(newHead);
    this.checkBorder()
  }

  move(event) {
    if (event.keyCode === this.keyCodeLeft && this.direction != "right") {
      this.direction = "left";
    } else if (event.keyCode === this.keyCodeUp && this.direction != "down") {
      this.direction = "up";
    } else if (
      event.keyCode === this.keyCodeRight &&
      this.direction != "left"
    ) {
      this.direction = "right";
    } else if (event.keyCode === this.keyCodeDown && this.direction != "up") {
      this.direction = "down";
    }
  }

  changeDirection() {
    if (this.direction === "left") {
      this.snakeX--;
    }
    if (this.direction === "right") {
      this.snakeX++;
    }
    if (this.direction === "up") {
      this.snakeY--;
    }
    if (this.direction === "down") {
      this.snakeY++;
    }
  }

  eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (head.x === arr[i].x && head.y === arr[i].y) clearInterval(gameLoop);
    }
  }

  createFood() {
    this.food = {
      x: HELPERS.random.getX(),
      y: HELPERS.random.getY(),
    };
    this.snake.forEach((el)=>{
      if(el.x === this.food.x && el.y === this.food.y){
        this.createFood();
      }
    })
  }

  displayScore() {
    document.getElementById('points').innerHTML = this.score;
  }

  headHit(){
    for(let i = 0; i < this.snake.length; i++){
      if (this.snakeX === this.snake[i].x && this.snakeY === this.snake[i].y) {
        this.gameOver();
      }
    }
  }

  gameOver() {
    alert('Game over');
    snake1 = new Snake(USER);
  }

  checkBorder(){
    if(this.snakeX < -1 || this.snakeX > 40 || this.snakeY < -1 || this.snakeY > 30) 
    {this.gameOver()}
  }
}
