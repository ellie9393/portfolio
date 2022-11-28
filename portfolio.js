const intro = document.querySelector('#intro-title');
const aboutpic = document.querySelector('.about-pic');
const aboutinfo = document.querySelector('.about-info');
const projectimage = document.querySelector('.project-image');
const navbar = document.querySelector('#navbar-nav');

const tl = new TimelineMax();

tl.fromTo(navbar,2, {opacity: 0, x: 30}, {opacity:1, x: 0})
.fromTo(intro, 2, {height: "30%"}, {height: "50%", ease: Power2.easeInOut}, "-=2");
// .fromTo(intro, 2, {width: "100%", width: "80%"});
// tl.fromTo(navbar, 2, {height: "0"}, {height: "50%", ease: Power2.easeInOut});
// .fromTo(intro, {x: "-100%"}, {x: "0%"} );



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
        contact.css('font-size', '15px');
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
  
      contact.css('color', 'var(--primary-color)');
      contact.css('font-size', '1.2rem');
      contact.html("Thanks for contacting me. I'll get back to you soon!");
      return false; // just to stay here.
    });
  });
  
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }