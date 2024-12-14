function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Puedes cambiar a ❅ o ✦ para variar
  
    // Posición aleatoria y animación
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 segundos
    snowflake.style.opacity = Math.random();
  
    document.body.appendChild(snowflake);
  
    // Elimina el copo después de que termine la animación
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
  
  // Genera nuevos copos cada 100ms
  setInterval(createSnowflake, 100);
  