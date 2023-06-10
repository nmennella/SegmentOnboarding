// script.js
window.addEventListener('DOMContentLoaded', (event) => {
  const userForm = document.getElementById('userForm');

  if (userForm) {
    userForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const userId = document.getElementById('userId').value;

      // Identify call to Segment
      analytics.identify(userId, {
        first_name: firstName,
        last_name: lastName
      });

      //page call, home page
      analytics.page("Home", {
        user_id: userId
      });
     
      //page call, stay connected
      analytics.page("Stay Connected", {
        user_id: userId
      });
      
      //page call, pricing
      analytics.page("Pricing", {
        user_id: userId
      });
      
      // Track call to Segment
      analytics.track('Form Submitted', {
        user_id: userId
      });

      // Reset form
      userForm.reset();
    });
  } else {
    console.error('Error: userForm element not found');
  }
});





