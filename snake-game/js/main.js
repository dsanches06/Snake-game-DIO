let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  //coordenadas default da cobra
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function iniciarJogo() {
  criarBG();
  criarSnake();

  /* criar posicao inicial da cobra  */
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  /* criar as coordenadas da cobra para movimentar */
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  /* para retirar o ultimo elemento do array */
  snake.pop();

  /* criar um novo cabeçalho */
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  /* acrescenta um elemento a frente do primeiro elemento */
  snake.unshift(newHead);
}

/* iniciar o jogo */
let jogo = setInterval(iniciarJogo, 100);
