// Header component loader
async function loadHeader() {
    try {
        const response = await fetch('./components/header.html');
        const headerHTML = await response.text();
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = headerHTML;
            // Initialize mobile menu after header is loaded
            initializeMobileMenu();
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

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerLine1 = document.getElementById('burger-line-1');
    const burgerLine2 = document.getElementById('burger-line-2');
    const burgerLine3 = document.getElementById('burger-line-3');
    
    if (mobileMenuBtn && mobileMenu) {
        let isMenuOpen = false;
        
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Show menu
                mobileMenu.classList.remove('hidden');
                
                // Animate burger to X
                burgerLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                burgerLine2.style.opacity = '0';
                burgerLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Hide menu
                mobileMenu.classList.add('hidden');
                
                // Animate X back to burger
                burgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                burgerLine2.style.opacity = '1';
                burgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
        });
        
        // Close menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                
                // Reset burger icon
                burgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                burgerLine2.style.opacity = '1';
                burgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (isMenuOpen && !mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                
                // Reset burger icon
                burgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                burgerLine2.style.opacity = '1';
                burgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
        });
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
