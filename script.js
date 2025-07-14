// Header component loader
async function loadHeader() {
    try {
        const response = await fetch('./components/header.html');
        const headerHTML = await response.text();
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = headerHTML;
        }
    } catch (error) {
        console.error('Error loading header:', error);
        // Fallback header if component fails to load
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = '<header><h1>My Links Page</h1></header>';
        }
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);

document.getElementById('alertButton')?.addEventListener('click', function() {
    alert('Button clicked!');
});
