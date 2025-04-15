

for (let i = 1; i<=5; i++ ) {
    const button = document.getElementById(`mybutton${i}`);
    const text1 = document.getElementById(`textToShow${i}`);

    button.addEventListener('mouseover', function() {
        text.style.opacity = 1;
      });
    
      button.addEventListener('mouseleave', function() {
        text.style.opacity = 0;
      });
}