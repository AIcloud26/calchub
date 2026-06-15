/**
 * CalcHub Common JavaScript
 * Shared components: Header, Footer, Newsletter, Ad placeholders
 * Auto-detects page depth for correct relative paths
 * Updated: Modern geometric design with SVG icons
 */

// Detect path prefix based on current page location
const CalcHubPath = window.location.pathname;
const CalcHubDepth = (CalcHubPath.match(/\//g) || []).length - 1;
const CALC_PREFIX = CalcHubDepth >= 2 ? '../' : '';

// SVG icon library
const ICONS = {
    logo: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="28" height="28" rx="6"/><path d="M10 10h4v4h-4zM18 10h4v4h-4zM10 18h4v4h-4zM18 18h4v4h-4z"/></svg>`,
    bmi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18"/><path d="M12 3a9 9 0 0 0 0 18"/></svg>`,
    age: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="16" r="2"/></svg>`,
    percent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
    mortgage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    loan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    invest: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    retire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    salary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/></svg>`,
    calorie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.5 6 5 9.5 5 13.5C5 17.64 8.13 21 12 21s7-3.36 7-7.5C19 9.5 15.5 6 12 2z"/><path d="M12 21c-1.5 0-3-1.5-3-4.5S12 10 12 10s3 3.5 3 6.5S13.5 21 12 21z"/></svg>`,
    date: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
    finance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    math: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/><path d="M7 7v0M17 7v0M7 17v0M17 17v0"/></svg>`,
    business: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    conversion: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
    lifestyle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    free: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
};

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
                <a href="${p}index.html" class="flex items-center gap-2.5 group">
                    <div class="w-8 h-8 bg-[#0A84FF] rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z"/></svg>
                    </div>
                    <span class="text-xl font-bold text-[#1C1C1E] tracking-tight">CalcHub</span>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center gap-1">
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
                                <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Finance</p>
                                <a href="${p}calculator/loan-calculator.html" class="dropdown-item">Loan Calculator</a>
                                <a href="${p}calculator/mortgage-calculator.html" class="dropdown-item">Mortgage Calculator</a>
                                <a href="${p}calculator/investment-calculator.html" class="dropdown-item">Investment Calculator</a>
                                <a href="${p}calculator/retirement-calculator.html" class="dropdown-item">Retirement Calculator</a>
                                <a href="${p}calculator/salary-calculator.html" class="dropdown-item">Salary Calculator</a>
                            </div>
                            <div class="p-3 border-b border-gray-100">
                                <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Health</p>
                                <a href="${p}calculator/bmi-calculator.html" class="dropdown-item">BMI Calculator</a>
                                <a href="${p}calculator/calorie-calculator.html" class="dropdown-item">Calorie Calculator</a>
                            </div>
                            <div class="p-3 border-b border-gray-100">
                                <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Math</p>
                                <a href="${p}calculator/percentage-calculator.html" class="dropdown-item">Percentage Calculator</a>
                                <a href="${p}calculator/date-difference-calculator.html" class="dropdown-item">Date Calculator</a>
                            </div>
                            <div class="p-3">
                                <p class="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Everyday</p>
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
                            <a href="${p}category/finance.html" class="dropdown-item">Finance</a>
                            <a href="${p}category/health.html" class="dropdown-item">Health</a>
                            <a href="${p}category/math.html" class="dropdown-item">Math</a>
                            <a href="${p}category/business.html" class="dropdown-item">Business</a>
                            <a href="${p}category/conversion.html" class="dropdown-item">Conversion</a>
                            <a href="${p}category/lifestyle.html" class="dropdown-item">Lifestyle</a>
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
                <div class="space-y-1">
                    <p class="px-3 py-2 text-xs text-gray-400 uppercase tracking-wider font-semibold">Calculators</p>
                    <a href="${p}category/finance.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Finance</a>
                    <a href="${p}category/health.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Health</a>
                    <a href="${p}category/math.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Math</a>
                    <a href="${p}category/business.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Business</a>
                    <a href="${p}category/conversion.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Conversion</a>
                    <a href="${p}category/lifestyle.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Lifestyle</a>
                    <div class="border-t border-gray-100 mt-2 pt-2">
                        <a href="${p}blog/index.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Blog</a>
                        <a href="${p}about.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">About</a>
                        <a href="${p}contact.html" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Contact</a>
                    </div>
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
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                <!-- About -->
                <div>
                    <div class="flex items-center gap-2.5 mb-5">
                        <div class="w-8 h-8 bg-[#0A84FF] rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z"/></svg>
                        </div>
                        <span class="text-xl font-bold text-white tracking-tight">CalcHub</span>
                    </div>
                    <p class="text-sm text-gray-400 mb-5 leading-relaxed">
                        Free, accurate, and easy-to-use online calculators for everyday life. 
                        From finance to health, we've got you covered.
                    </p>
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
                        <li><a href="${p}category/finance.html" class="footer-link">Finance Calculators</a></li>
                        <li><a href="${p}category/health.html" class="footer-link">Health Calculators</a></li>
                        <li><a href="${p}category/math.html" class="footer-link">Math Calculators</a></li>
                        <li><a href="${p}category/business.html" class="footer-link">Business Calculators</a></li>
                        <li><a href="${p}category/conversion.html" class="footer-link">Conversion Tools</a></li>
                        <li><a href="${p}category/lifestyle.html" class="footer-link">Lifestyle</a></li>
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
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                <p>&copy; 2024 CalcHub. All rights reserved.</p>
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
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 text-sm font-medium ${
        type === 'success' ? 'bg-[#30D158]' : type === 'error' ? 'bg-[#FF453A]' : 'bg-[#0A84FF]'
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
