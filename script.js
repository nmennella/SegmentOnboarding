// script.js
window.addEventListener('DOMContentLoaded', (event) => {
  const userForm = document.getElementById('userForm');

  if (userForm) {
    userForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;

      // Identify call to Segment
      analytics.identify('user123', {
        first_name: firstName,
        last_name: lastName
      });

      // Track call to Segment
      analytics.track('Form Submitted', {
        user_id: 'user123'
      });

      // Reset form
      userForm.reset();
    });
  } else {
    console.error('Error: userForm element not found');
  }
});




