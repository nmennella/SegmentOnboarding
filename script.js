// script.js
window.addEventListener('DOMContentLoaded', (event) => {
  const myButton = document.getElementById('myButton');

  myButton.addEventListener('click', function() {
    // Actions to perform when the button is clicked
    console.log('Button clicked!');

    // Identify call to Segment
    analytics.identify('user123', {
      name: 'John Doe',
      email: 'johndoe@example.com'
      // additional user properties can be added here
    });

    // Track call to Segment
    analytics.track('Button Clicked');
  });
});


