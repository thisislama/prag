// Check if there's a saved language preference in localStorage on page load
window.addEventListener('load', function() {
    var savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        // If there is a saved language, apply it
        setLanguage(savedLanguage);
    }
});

// Function to update content based on language
function setLanguage(language) {
    if (language === 'ar') {
        // Apply Arabic language
        document.getElementById('title').innerHTML = 'اكتشف <span><em>العالم في </em></span>يديك!';
        document.querySelector('.tagline').innerText = 'سيساعدك هذا الموقع على اكتشاف العالم في يديك.';
        document.querySelector('.custom-btn').innerHTML = 'اكتشفه الآن &nbsp;&nbsp;<span STYLE="font-size: 22px">&#8592;</span>';
        document.getElementById('language-btn').innerText = 'AR';
        document.body.style.direction = "rtl"; // Right-to-left direction
        document.body.classList.add('rtl'); // Add RTL class for specific Arabic styles
    } else {
        // Apply English language
        document.getElementById('title').innerHTML = 'Discover <span><em>the World in your</em></span> Hand!';
        document.querySelector('.tagline').innerText = 'This website will help you to discover the world in your hand.';
        document.querySelector('.custom-btn').innerHTML = 'Discover it Now <span>&#8594;</span>';
        document.getElementById('language-btn').innerText = 'EN';
        document.body.style.direction = "ltr"; // Left-to-right direction
        document.body.classList.remove('rtl'); // Remove RTL class for English styles
    }
}

// Language button click event
document.getElementById('language-btn').addEventListener('click', function() {
    var currentLanguage = this.innerText;

    if (currentLanguage === 'EN') {
        // Switch to Arabic
        setLanguage('ar');
        localStorage.setItem('language', 'ar'); // Save language preference in localStorage
    } else {
        // Switch back to English
        setLanguage('en');
        localStorage.setItem('language', 'en'); // Save language preference in localStorage
    }
});
