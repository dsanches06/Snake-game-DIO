/* definir variaveis globais */
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";
/* coordenadas default da cobra */
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

/* criar a comida da cobra em varias coordenadas */
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

/* Função que cria a cobrinha */
function criarSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

/* Função para desenhar a comida da cobra*/
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

/* criar eventos das teclas de direcção do teclado */
document.addEventListener("keydown", update);

/* Função para atualizar os eventos capturados do teclado */
function update(event) {
  //37 -> direita
  if (event.keyCode == 37 && direction != "right") direction = "left";
  //38 -> baixo
  if (event.keyCode == 38 && direction != "down") direction = "up";
  //39 -> esquerda
  if (event.keyCode == 39 && direction != "left") direction = "right";
  //40 -> cima
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

/* Função que inicia o jogo */
function iniciarJogo() {
  /* definir direcoes da cobra sem sair da zona de jogo*/
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

  /* chamar as funçoes inicias */
  criarBG();
  criarSnake();
  drawFood();

  /* criar posicao inicial da cobra  */
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  /* criar as coordenadas da cobra para movimentar */
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    /* para retirar o ultimo elemento do array */
    snake.pop();
  } else {
    /* criar nova comida em outra coordenada */
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  /* criar um novo cabeçalho */
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  /* acrescenta um elemento a frente do primeiro elemento */
  snake.unshift(newHead);
}

/* iniciar o jogo no intervalo de 1 segundo */
let jogo = setInterval(iniciarJogo, 100);
