document.addEventListener('DOMContentLoaded', function() {
    // Agregar textura al tallo
    const tallo = document.querySelector('.tallo');
    for (let i = 0; i < 30; i++) {
      const detalle = document.createElement('div');
      detalle.className = 'detalle-tallo';
      
      // Posición aleatoria en el tallo
      const left = Math.random() * 20;
      const top = Math.random() * 500; // Ajustado a la altura del tallo
      const size = 2 + Math.random() * 4;
      
      detalle.style.width = `${size}px`;
      detalle.style.height = `${size}px`;
      detalle.style.left = `${left}px`;
      detalle.style.top = `${top}px`;
      
      tallo.appendChild(detalle);
    }
    
    // Manejo de error de carga de imagen para la flor
    const imagenFlor = document.querySelector('.flor-imagen');
    imagenFlor.onerror = function() {
      console.error('Error al cargar la imagen de la flor');
      this.src = '/img/girasol.png';
      this.alt = 'Imagen de girasol no disponible';
    };
    
    // Manejo de error de carga de imágenes para las hojas
    const hojasImagenes = document.querySelectorAll('.hoja-imagen');
    hojasImagenes.forEach(function(hoja) {
      hoja.onerror = function() {
        console.error('Error al cargar la imagen de la hoja');
        this.src = '/img/hoja.png';
        this.alt = 'Imagen de hoja no disponible';
      };
    });
    
    // Cambiar dirección al hacer clic
    document.addEventListener('click', function() {
      const florContainer = document.getElementById('flor-container');
      const currentAnimation = getComputedStyle(florContainer).getPropertyValue('animation');
      
      if (currentAnimation.includes('reverse')) {
        florContainer.style.animation = 'girar 15s linear infinite';
      } else {
        florContainer.style.animation = 'girar 15s linear infinite reverse';
      }
    });
  });
  