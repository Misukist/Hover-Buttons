
// olisi varmaan päässyt helpommalla suoraan css:ään mutta halusin treenata js
for (let i = 1; i <= 5; i++) {
    const button = document.getElementById(`myButton${i}`);
    const text = document.getElementById(`textToShow${i}`);
  
    // Alkuasetukset
    text.style.opacity = 0;
    text.style.transition = 'opacity 0.6s ease-in';
  
    button.addEventListener('mouseover', function() {
      text.style.opacity = 1;
    });
  
    button.addEventListener('mouseleave', function() {
      text.style.opacity = 0;
    });
  }
