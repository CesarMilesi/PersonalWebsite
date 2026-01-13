let darkTheme = localStorage.getItem('darkTheme');
const darkModeToggle = document.querySelector('#darkModeToggle');
const iconTheme = document.getElementById('iconTheme');

// Determine the relative path based on the current location
const currentPath = window.location.pathname;

const darkModeEnabled = () => {
    // Replace the source by the image for the dark theme
    iconTheme.src = currentPath.includes('pages') ? '../images/icons/moon.svg' : './images/icons/moon.svg';
    iconTheme.alt = "Moon";
    // Add dark mode class to the body
    document.documentElement.classList.add('darkTheme');
    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkTheme', 'enabled');
};

const darkModeDisabled = () => {
    // Replace the source by the image for the light theme
    iconTheme.src = currentPath.includes('pages') ? '../images/icons/sun.svg' : './images/icons/sun.svg';
    iconTheme.alt = "Sun";
    // Remove dark mode class to the body
    document.documentElement.classList.remove('darkTheme');
    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkTheme', 'disabled');
};

window.addEventListener('load', function() {
    // If user had "dark mode" enabled, will keep it after page reloaded
    if (darkTheme === 'enabled') {
        darkModeEnabled();
    }
});

darkModeToggle.addEventListener('click', () => {
    darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme !== "enabled") {
        darkModeEnabled();
    }
    else {
        darkModeDisabled();
    }
});