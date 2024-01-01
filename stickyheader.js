//Place this JS code in whichever place you are comfortable with
window.addEventListener('scroll', function() {
    var element = document.getElementById('masthead'); //masthead is what WP Astra is currenlt using as the header ID.
    if (window.scrollY > 50) { // Adjust this value based on when you want to add the class when the user scrolls
        element.classList.add('site-header-scroll'); //The class you place inside here is what you declared as the CSS class in the custom CSS
    } else {
        element.classList.remove('site-header-scroll');
    }
});
