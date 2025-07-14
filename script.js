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

// Footer component loader
async function loadFooter() {
    try {
        const response = await fetch('./components/footer.html');
        const footerHTML = await response.text();
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
        // Fallback footer if component fails to load
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = '<footer class="text-center bg-gray-800 text-white fixed bottom-0 w-full h-24"></footer>';
        }
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});

document.getElementById('alertButton')?.addEventListener('click', function() {
    alert('Button clicked!');
});
