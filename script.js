// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // 1. Change text content dynamically
  const changeTextBtn = document.getElementById('change-text-btn');
  const changeableText = document.getElementById('changeable-text');
  
  changeTextBtn.addEventListener('click', function() {
      changeableText.textContent = "The text has been changed successfully!";
  });

  // 2. Modify CSS styles via JavaScript
  const styleTextBtn = document.getElementById('style-text-btn');
  
  styleTextBtn.addEventListener('click', function() {
      changeableText.classList.toggle('highlight');
      
      // Alternatively, modify style directly:
      // changeableText.style.color = 'red';
      // changeableText.style.fontSize = '1.2em';
  });

  // 3. Add or remove an element when a button is clicked
  const toggleElementBtn = document.getElementById('toggle-element-btn');
  const specialMessage = document.getElementById('special-message');
  
  toggleElementBtn.addEventListener('click', function() {
      if (specialMessage.style.display === 'none') {
          specialMessage.style.display = 'block';
          toggleElementBtn.textContent = 'Hide Special Message';
      } else {
          specialMessage.style.display = 'none';
          toggleElementBtn.textContent = 'Show Special Message';
      }
  });

  // Bonus: Update footer text
  const updateFooterBtn = document.getElementById('update-footer-btn');
  const footerText = document.getElementById('footer-text');
  
  updateFooterBtn.addEventListener('click', function() {
      const now = new Date();
      footerText.textContent = `Last updated: ${now.toLocaleString()}`;
  });

  // Additional DOM manipulation examples
  const mainTitle = document.getElementById('main-title');
  mainTitle.addEventListener('mouseover', function() {
      this.style.color = 'blue';
  });
  
  mainTitle.addEventListener('mouseout', function() {
      this.style.color = '';
  });
});