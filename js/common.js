/**
 * CalcHub Common JavaScript
 * Shared components: Header, Footer, Newsletter, Ad placeholders
 * Auto-detects page depth for correct relative paths
 */

// Detect path prefix based on current page location
const CalcHubPath = window.location.pathname;
const CalcHubDepth = (CalcHubPath.match(/\//g) || []).length - 1;
const CALC_PREFIX = CalcHubDepth >= 2 ? '../' : '';

document.addEventListener('DOMContentLoaded', function() {
    injectHeader();
    injectFooter();
    initMobileMenu();
    initNewsletterForm();
});

/**
 * Header/Navigation injection
 */
function injectHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const p = CALC_PREFIX;
    
    header.innerHTML = `
    <nav class="navbar">
        <div class="container-custom">
            <div class="flex items-center justify-between py-4">
                <!-- Logo -->
                <a href="${p}index.html" class="flex items-center gap-2">
                    <span class="text-2xl">🧮</span>
                    <span class="text-xl font-bold text-[#2563EB]">CalcHub</span>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center gap-6">
                    <!-- Calculators Dropdown -->
                    <div class="nav-dropdown">
                        <button class="nav-link flex items-center gap-1">
                            Calculators
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="nav-dropdown-content">
                            <div class="p-3 border-b border-gray-100">
                                <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Finance</p>
                                <a href="${p}calculator/loan-calculator.html" class="dropdown-item">Loan Calculator</a>
                                <a href="${p}calculator/mortgage-calculator.html" class="dropdown-item">Mortgage Calculator</a>
                                <a href="${p}calculator/investment-calculator.html" class="dropdown-item">Investment Calculator</a>
                                <a href="${p}calculator/retirement-calculator.html" class="dropdown-item">Retirement Calculator</a>
                                <a href="${p}calculator/salary-calculator.html" class="dropdown-item">Salary Calculator</a>
                            </div>
                            <div class="p-3 border-b border-gray-100">
                                <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Health</p>
                                <a href="${p}calculator/bmi-calculator.html" class="dropdown-item">BMI Calculator</a>
                                <a href="${p}calculator/calorie-calculator.html" class="dropdown-item">Calorie Calculator</a>
                            </div>
                            <div class="p-3 border-b border-gray-100">
                                <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Math</p>
                                <a href="${p}calculator/percentage-calculator.html" class="dropdown-item">Percentage Calculator</a>
                                <a href="${p}calculator/date-difference-calculator.html" class="dropdown-item">Date Calculator</a>
                            </div>
                            <div class="p-3">
                                <p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Everyday</p>
                                <a href="${p}calculator/age-calculator.html" class="dropdown-item">Age Calculator</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Categories -->
                    <div class="nav-dropdown">
                        <button class="nav-link flex items-center gap-1">
                            Categories
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="nav-dropdown-content">
                            <a href="${p}category/finance.html" class="dropdown-item flex items-center gap-2">
                                <span>💰</span> Finance
                            </a>
                            <a href="${p}category/health.html" class="dropdown-item flex items-center gap-2">
                                <span>❤️</span> Health
                            </a>
                            <a href="${p}category/math.html" class="dropdown-item flex items-center gap-2">
                                <span>📐</span> Math
                            </a>
                            <a href="${p}category/business.html" class="dropdown-item flex items-center gap-2">
                                <span>📊</span> Business
                            </a>
                            <a href="${p}category/conversion.html" class="dropdown-item flex items-center gap-2">
                                <span>🔄</span> Conversion
                            </a>
                            <a href="${p}category/lifestyle.html" class="dropdown-item flex items-center gap-2">
                                <span>🏠</span> Lifestyle
                            </a>
                        </div>
                    </div>
                    
                    <a href="${p}blog/index.html" class="nav-link">Blog</a>
                    <a href="${p}about.html" class="nav-link">About</a>
                    <a href="${p}contact.html" class="nav-link">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="mobile-menu lg:hidden border-t border-gray-100 py-4">
                <div class="space-y-2">
                    <div class="py-2">
                        <p class="px-3 text-xs text-gray-500 uppercase tracking-wider font-semibold">Calculators</p>
                        <a href="${p}category/finance.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">💰 Finance</a>
                        <a href="${p}category/health.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">❤️ Health</a>
                        <a href="${p}category/math.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">📐 Math</a>
                        <a href="${p}category/business.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">📊 Business</a>
                        <a href="${p}category/conversion.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">🔄 Conversion</a>
                        <a href="${p}category/lifestyle.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">🏠 Lifestyle</a>
                    </div>
                    <a href="${p}blog/index.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">📝 Blog</a>
                    <a href="${p}about.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">ℹ️ About</a>
                    <a href="${p}contact.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">📧 Contact</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

/**
 * Footer injection
 */
function injectFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;
    const p = CALC_PREFIX;
    
    footer.innerHTML = `
    <footer class="footer">
        <div class="container-custom">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <!-- About -->
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">🧮</span>
                        <span class="text-xl font-bold text-white">CalcHub</span>
                    </div>
                    <p class="text-sm text-gray-400 mb-4">
                        CalcHub provides free, accurate, and easy-to-use online calculators for everyday life. 
                        From finance to health, we've got you covered.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="${p}index.html" class="footer-link">Home</a></li>
                        <li><a href="${p}about.html" class="footer-link">About Us</a></li>
                        <li><a href="${p}blog/index.html" class="footer-link">Blog</a></li>
                        <li><a href="${p}contact.html" class="footer-link">Contact</a></li>
                        <li><a href="${p}sitemap.xml" class="footer-link">Sitemap</a></li>
                    </ul>
                </div>
                
                <!-- Categories -->
                <div>
                    <h4 class="footer-heading">Categories</h4>
                    <ul class="space-y-2">
                        <li><a href="${p}category/finance.html" class="footer-link">💰 Finance Calculators</a></li>
                        <li><a href="${p}category/health.html" class="footer-link">❤️ Health Calculators</a></li>
                        <li><a href="${p}category/math.html" class="footer-link">📐 Math Calculators</a></li>
                        <li><a href="${p}category/business.html" class="footer-link">📊 Business Calculators</a></li>
                        <li><a href="${p}category/conversion.html" class="footer-link">🔄 Conversion Tools</a></li>
                        <li><a href="${p}category/lifestyle.html" class="footer-link">🏠 Lifestyle</a></li>
                    </ul>
                </div>
                
                <!-- Legal -->
                <div>
                    <h4 class="footer-heading">Legal</h4>
                    <ul class="space-y-2">
                        <li><a href="${p}privacy-policy.html" class="footer-link">Privacy Policy</a></li>
                        <li><a href="${p}terms-of-service.html" class="footer-link">Terms of Service</a></li>
                        <li><a href="${p}disclaimer.html" class="footer-link">Disclaimer</a></li>
                    </ul>
                    <div class="mt-4 pt-4 border-t border-gray-700">
                        <p class="text-sm text-gray-400">
                            Email: hello@calchub.com<br>
                            Made with ❤️ for you
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                <p>&copy; 2024 CalcHub. All rights reserved. The calculators on this website are for informational purposes only.</p>
            </div>
        </div>
    </footer>
    `;
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

/**
 * Newsletter form handling
 */
function initNewsletterForm() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                showNotification('Thanks for subscribing! We\'ll keep you updated.', 'success');
                emailInput.value = '';
            }
        });
    });
}

/**
 * Show notification toast
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Ad placeholder generator
 */
function createAdPlaceholder(type = 'horizontal', slot = '') {
    const placeholder = document.createElement('div');
    placeholder.className = `ad-placeholder ad-placeholder-${type}`;
    placeholder.setAttribute('data-ad-slot', slot);
    placeholder.innerHTML = '<span>Advertisement</span>';
    return placeholder;
}

/**
 * FAQ Accordion functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });
});

/**
 * Format number with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format currency
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
