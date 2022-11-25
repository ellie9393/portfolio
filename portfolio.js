
// Form validation
$(document).ready(function() {
    var form = document.getElementById("contact-form");
    function handleForm(event) { event.preventDefault(); }  // stop the page from reloading after submit
    form.addEventListener('submit', handleForm);
    $('#contact-form').submit(function () {
    var contact =  $('#contact-message');
      // Get the Name value
      var name = $('#name').val();
      // Check if empty or not
      if (name  === '') {
          alert('Please Enter the name.');
          return false;
      }
      // Get the email value
      var email = $('#email').val();
      // Check if empty or not
      if (email  === '') {
          alert('Please Enter the email address.');
          return false;
      }
      if(!isEmail(email)){
        contact.css('color', 'black');
        contact.html("You have entered an invalid email address!");
        return false;
      }
      // Get the subject value
      var subject = $('#subject').val();
      // Check if empty or not
      if (subject  === '') {
          alert('Enter the subject.');
          return false;
      }
  
      contact.css('color', 'green');
      contact.html("Thanks for contacting me. I'll get back to get you soon!");
      return false; // just to stay here.
    });
  });
  
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }