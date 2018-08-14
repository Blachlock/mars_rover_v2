// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
// Ordenes de movimiento
// ======================
var command = "rrffffrflflffffbbbbrff";
// ======================
// Posicion inicial
// ======================
console.log('Orientacion inicial del Rover: Norte');
console.log('Posicion inicial del Rover: [' + rover.x + ',' + rover.y + ']');
commandString(command);
console.log(rover.travelLog);
// ======================
// Programa
// ======================
function turnLeft(rover){
  console.log('Orden: GIRO IZQUIERDA.');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log('Orden de giro a la izquierda recibida. Orientacion del Rover: ' + rover.direction);
    break;
  
    case 'W':
      rover.direction = 'S';
      console.log('Orden de giro a la izquierda recibida. Orientacion del Rover: ' + rover.direction);
    break;

    case 'S':
      rover.direction = 'E';
      console.log('Orden de giro a la izquierda recibida. Orientacion del Rover: ' + rover.direction);
    break;

    case 'E':
      rover.direction = 'N';
      console.log('Orden de giro a la izquierda recibida. Orientacion del Rover: ' + rover.direction);
    break;
  }
  console.log('Posicion actual [' + rover.x + ',' + rover.y + ']');
}

function turnRight(rover){
  console.log('Orden: GIRO DERECHA.');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log('Orden de giro a la derecha recibida. Orientacion del Rover: ' + rover.direction);
    break;
  
    case 'E':
      rover.direction = 'S';
      console.log('Orden de giro a la derecha recibida. Orientacion del Rover: ' + rover.direction);
    break;

    case 'S':
      rover.direction = 'W';
      console.log('Orden de giro a la derecha recibida. Orientacion del Rover: ' + rover.direction);
    break;

    case 'W':
      rover.direction = 'N';
      console.log('Orden de giro a la derecha recibida. Orientacion del Rover: ' + rover.direction);
    break;

    default:
      console.log('Giro no identificado.');
  }
  console.log('Posicion actual [' + rover.x + ',' + rover.y + ']');
}

function moveForward(rover){
  console.log('Orden: AVANCE.');
  switch (rover.direction) {
    case 'N':
      if (rover.y - 1 < 0) {
        console.log('Fuera de los limites!');
      } else {
        rover.y = rover.y - 1;
      }
    break;

    case 'W':
      if (rover.x - 1 < 0) {
        console.log('Fuera de los limites!');
      } else {
        rover.x = rover.x - 1;
      }
    break;

    case 'S':
      if (rover.y + 1 > 9) {
        console.log('Fuera de los limites!');
      } else {
        rover.y = rover.y + 1;
      }
    break;

    case 'E':
      if (rover.x + 1 > 9) {
        console.log('Fuera de los limites!');
      } else {
        rover.x = rover.x + 1;
      }
    break;

    default:
      console.log('Movimiento no identificado');
  }
  console.log('Posicion actual [' + rover.x + ',' + rover.y + ']');
}

function moveBackward(rover){
  console.log('Orden: RETROCESO.');
  switch (rover.direction) {
    case 'N':
      if (rover.y + 1 >9) {
        console.log('Fuera de los limites!');
      } else {
        rover.y = rover.y + 1;
      }
    break;

    case 'W':
      if (rover.x + 1 > 9) {
        console.log('Fuera de los limites!');
      } else {
        rover.x = rover.x + 1;
      }
    break;

    case 'S':
      if (rover.y - 1 < 0) {
        console.log('Fuera de los limites!');
      } else {
        rover.y = rover.y - 1;
      }
    break;

    case 'E':
      if (rover.x - 1 < 0) {
        console.log('Fuera de los limites!');
      } else {
        rover.x = rover.x - 1;
      }
    break;

    default:
      console.log('Movimiento no identificado');
  }
  console.log('Posicion actual [' + rover.x + ',' + rover.y + ']');
}

function commandString(command) {
  for(var i = 0; i < command.length; i++) {
    switch(command[i]) {
      case 'l':
      turnLeft(rover);
      break;
      
      case 'r':
      turnRight(rover);
      break;
      
      case 'f':
      moveForward(rover);
      break;

      case 'b':
      moveBackward(rover);
      break;
      
      default:
        console.log('Introduce una orden valida');
    }
    rover.travelLog.push(rover.x + ',' + rover.y);
  }
}