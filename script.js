//THERE IS THE RATING PART
document.addEventListener('DOMContentLoaded', function() {
    const ratingContainers = document.querySelectorAll('.rating');
  
    ratingContainers.forEach(container => {
      const ratingInputs = container.querySelectorAll('input[type="radio"]');
      const selectedRatingDisplay = container.nextElementSibling;
  
      // Check if there's a stored rating for this product
      const storedRating = localStorage.getItem(container.id);
      if (storedRating) {
        container.querySelector(`input[value="${storedRating}"]`).checked = true;
        selectedRatingDisplay.textContent = `Selected rating: ${storedRating}`;
      }
  
      ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
          selectedRatingDisplay.textContent = `Selected rating: ${this.value}`;
          // Store the selected rating in localStorage for this product
          localStorage.setItem(container.id, this.value);
        });
      });
    });
  });
  
