// Obtener referencia al botón y al párrafo
const clickButton = document.getElementById('clickButton');
const clickCount = document.getElementById('clickCount');

// Contador de clics
let count = 0;

// Función para actualizar el contador de clics
function updateCount() {
  count++;
  clickCount.textContent = `${count} clics`;

  // Si el contador llega a 50, felicitar al usuario y reiniciar el contador
  if (count === 50) {
    alert('¡Felicidades! Has alcanzado 50 clics.');
    count = 0;
    clickCount.textContent = `${count} clics`;
  }
}

// Agregar evento de clic al botón
clickButton.addEventListener('click', updateCount);


