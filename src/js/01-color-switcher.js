function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');
  
    let interval = null; // Zmienna do przechowywania identyfikatora interwału
  
    startButton.addEventListener('click', () => {

    startButton.disabled = true;
    
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
    stopButton.addEventListener('click', () => {

    startButton.disabled = false;
    
    clearInterval(interval);
  });
