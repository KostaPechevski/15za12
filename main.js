/**
 * 15 za 12 - Main JavaScript
 * Vanilla JS for menu interactions, gallery lightbox, smooth scrolling, and i18n
 */

(function() {
    'use strict';

    // ============================================
    // Translation System
    // ============================================

    const translations = {
        mk: {
            'hero.headline': 'Неаполитанска пица. Печена во фурна.',
            'hero.subtext': 'Свежо тесто, квалитетни состојки',
            'cta.call': 'Повикај сега',
            'cta.call.short': 'Повикај',
            'cta.korpa': 'Нарачај на Korpa',
            'cta.korpa.short': 'Korpa',
            'cta.wolt': 'Нарачај на Wolt',
            'cta.wolt.short': 'Wolt',
            'menu.title': 'Мени и цени',
            'menu.pizzas.creations': 'ПИЦИ — Наши креации',
            'menu.pizzas.classics': 'ПИЦИ — Класици',
            'menu.sandwiches': 'СЕНДВИЧИ',
            'menu.calzone': 'КАЛЦОНЕ',
            'menu.shareables': 'ЗА ДЕЛЕЊЕ',
            'menu.salads': 'САЛАТИ',
            'menu.desserts': 'ДЕСЕРТИ',
            'menu.extras': 'ЕКСТРА',
            'menu.note': 'Цените може да варираат.',
            'menu.item.truffle': 'Тартуфата',
            'menu.item.creamy-bacon': 'Крими бејкон',
            'menu.item.cheesy-beef': 'Чизи биф',
            'menu.item.mortadella-pistachio': 'Мортадела пистацио',
            'menu.item.sicilian': 'Сицилија',
            'menu.item.parmesan-cream': 'Крем пармиџано',
            'menu.item.sweet-savory-prosciutto': 'Слатко-солена пршута',
            'menu.item.macedonian': 'Македонка',
            'menu.item.margherita': 'Маргарита',
            'menu.item.pepperoni': 'Пеперони',
            'menu.item.capri': 'Капри',
            'menu.item.quattro-formaggi': 'Кватро формаџи',
            'menu.item.pomodoro': 'Помодоро',
            'menu.item.vegetarian': 'Вегетеријана',
            'menu.item.piccante': 'Пиканте',
            'menu.item.cheddar-bacon': 'Чедар бејкон',
            'menu.item.prosciutto': 'Пршуто',
            'menu.item.cheesy-beef-sandwich': 'Чизи биф',
            'menu.item.mortadella-sandwich': 'Мортадела',
            'menu.item.caprese': 'Caprese',
            'menu.item.veggie': 'Веге',
            'menu.item.margherita-calzone': 'Маргарита',
            'menu.item.capri-calzone': 'Капри',
            'menu.item.mortadella-calzone': 'Мортадела',
            'menu.item.pepperoni-calzone': 'Пеперони',
            'menu.item.prosciutto-piadina': 'Пијадине пршуто',
            'menu.item.mortadella-piadina': 'Пијадине мортадела',
            'menu.item.garlic-fries': 'Помфрит со лукче',
            'menu.item.tricolore-salad': 'Три колори',
            'menu.item.crudo-blue-salad': 'Крудо блу',
            'menu.item.bacon-salad': 'Бејкон салата',
            'menu.item.chocolate-brownie': 'Брауни чоколада',
            'menu.item.jaffa-brownie': 'Брауни јафа',
            'menu.item.tomato-sauce': 'Доматен сос',
            'menu.item.arugula': 'Рукола',
            'menu.item.chili-pepper': 'Чили пиперка',
            'menu.item.cayenne-pepper-sauce': 'Кајен пепер сос',
            'menu.item.kalamata-pesto': 'Каламата во песто',
            'menu.item.mushrooms': 'Шампињони',
            'menu.item.grana-padano': 'Грана падано',
            'menu.item.olives': 'Маслинка',
            'menu.item.prosciutto-extra': 'Пршута (extra)',
            'ingredients.truffle': 'Крем од тартуфи, пршута, печурки, моцарела',
            'ingredients.creamy-bacon': 'Бел сос, гауда, сланина, домат, чедар',
            'ingredients.cheesy-beef': 'Бел сос, гауда, чедар, телешко месо, кромид, кисели краставички',
            'ingredients.mortadella-pistachio': 'Бел сос, моцарела, мортадела, песто, ф\'стаци',
            'ingredients.sicilian': 'Доматен сос, гауда, чаден колбас, моцарела',
            'ingredients.parmesan-cream': 'Крем од пармезан, моцарела, босилек',
            'ingredients.sweet-savory-prosciutto': 'Бел сос, бри, моцарела, пршута, мед, ореви',
            'ingredients.macedonian': 'Рикота крем, сланина, лута пиперка, домат',
            'ingredients.margherita': 'Доматен сос, моцарела, босилек',
            'ingredients.pepperoni': 'Доматен сос, моцарела, пеперони',
            'ingredients.capri': 'Доматен сос, гауда, шунка, печурки',
            'ingredients.quattro-formaggi': 'Бел сос, моцарела, гауда, горгонзола, пармезан',
            'ingredients.pomodoro': 'Доматен сос, моцарела, босилек',
            'ingredients.vegetarian': 'Доматен сос, печурки, маслинки, моцарела',
            'ingredients.piccante': 'Доматен сос, кулен, моцарела, чили',
            'ingredients.cheddar-bacon': 'Сланина, чедар, гауда, домат',
            'ingredients.prosciutto': 'Пршута, моцарела, домат',
            'ingredients.cheesy-beef-sandwich': 'Телешко месо, чедар, кисели краставички',
            'ingredients.mortadella-sandwich': 'Мортадела, моцарела, рукола',
            'ingredients.caprese': 'Моцарела, домат, босилек',
            'ingredients.veggie': 'Тиквичка, моцарела, песто',
            'ingredients.capri-calzone': 'Доматен сос, моцарела, шунка, печурки',
            'ingredients.pepperoni-calzone': 'Доматен сос, моцарела, пеперони',
            'ingredients.mortadella-calzone': 'Бел сос, моцарела, мортадела',
            'ingredients.margherita-calzone': 'Доматен сос, моцарела',
            'ingredients.prosciutto-piadina': 'Домат, моцарела, пршута',
            'ingredients.mortadella-piadina': 'Домат, моцарела, мортадела',
            'ingredients.garlic-fries': 'Помфрит, лук, зачини',
            'ingredients.tricolore-salad': 'Рукола, моцарела, пармезан',
            'ingredients.crudo-blue-salad': 'Микс салата, блу сирење, ореви',
            'ingredients.bacon-salad': 'Микс салата, сланина, домат',
            'ingredients.chocolate-brownie': 'Чоколаден брауни',
            'ingredients.jaffa-brownie': 'Чоколаден брауни со јафа',
            'about.title': 'За нас',

            'about.intro': 'Во потрага по совршената пица. Блиску сме.',
            'about.text1': 'Сервираме <strong>автентична неаполитанска пица</strong>, печена во нашата <strong>фурна на дрва</strong>. Лоцирани во срцето на Скопје, користиме свежо тесто направено со <strong>италијанско Caputo 00 брашно</strong> и квалитетни состојки за да ви го донесеме вистинскиот вкус на Неапол.',
            'about.text2': 'Ова е <strong>локално скопско место</strong>, не синџир. Се фокусираме на она што е важно: <strong>добра пица, направена на традиционален начин</strong>.',
            'gallery.title': 'Галерија',
            'instagram.cta': 'Следете нè на Instagram',
            'contact.title': 'Локација и контакт',
            'contact.address.label': 'Адреса',
            'contact.address.text': 'Христо Татарчев 47ф, Скопје, Македонија',
            'contact.phone.label': 'Телефон',
            'contact.hours.label': 'Работно време',
            'contact.hours.text': 'Понеделник - Четврток: 11:00 - 22:00\nПеток - Сабота: 11:00 - 23:00\nНедела: 12:00 - 21:00'
        },
        en: {
            'hero.headline': 'Neapolitan pizza. Wood-fired.',
            'hero.subtext': 'Fresh dough, quality ingredients',
            'cta.call': 'Call now',
            'cta.call.short': 'Call',
            'cta.korpa': 'Order on Korpa',
            'cta.korpa.short': 'Korpa',
            'cta.wolt': 'Order on Wolt',
            'cta.wolt.short': 'Wolt',
            'menu.title': 'Menu & Pricing',
            'menu.pizzas.creations': 'PIZZAS — Our Creations',
            'menu.pizzas.classics': 'PIZZAS — Classics',
            'menu.sandwiches': 'SANDWICHES',
            'menu.calzone': 'CALZONE',
            'menu.shareables': 'SHAREABLES',
            'menu.salads': 'SALADS',
            'menu.desserts': 'DESSERTS',
            'menu.extras': 'EXTRAS',
            'menu.note': 'Prices may vary.',
            'menu.item.truffle': 'Truffle Pizza',
            'menu.item.creamy-bacon': 'Creamy Bacon',
            'menu.item.cheesy-beef': 'Cheesy Beef',
            'menu.item.mortadella-pistachio': 'Mortadella & Pistachio',
            'menu.item.sicilian': 'Sicilian',
            'menu.item.parmesan-cream': 'Parmesan Cream',
            'menu.item.sweet-savory-prosciutto': 'Sweet & Savory Prosciutto',
            'menu.item.macedonian': 'Macedonian',
            'menu.item.margherita': 'Margherita',
            'menu.item.pepperoni': 'Pepperoni',
            'menu.item.capri': 'Capri',
            'menu.item.quattro-formaggi': 'Quattro Formaggi',
            'menu.item.pomodoro': 'Pomodoro',
            'menu.item.vegetarian': 'Vegetarian',
            'menu.item.piccante': 'Piccante',
            'menu.item.cheddar-bacon': 'Cheddar Bacon',
            'menu.item.prosciutto': 'Prosciutto',
            'menu.item.cheesy-beef-sandwich': 'Cheesy Beef',
            'menu.item.mortadella-sandwich': 'Mortadella',
            'menu.item.caprese': 'Caprese',
            'menu.item.veggie': 'Veggie',
            'menu.item.margherita-calzone': 'Margherita',
            'menu.item.capri-calzone': 'Capri',
            'menu.item.mortadella-calzone': 'Mortadella',
            'menu.item.pepperoni-calzone': 'Pepperoni',
            'menu.item.prosciutto-piadina': 'Prosciutto Piadina',
            'menu.item.mortadella-piadina': 'Mortadella Piadina',
            'menu.item.garlic-fries': 'Garlic Fries',
            'menu.item.tricolore-salad': 'Tricolore Salad',
            'menu.item.crudo-blue-salad': 'Crudo Blue Salad',
            'menu.item.bacon-salad': 'Bacon Salad',
            'menu.item.chocolate-brownie': 'Chocolate Brownie',
            'menu.item.jaffa-brownie': 'Jaffa Brownie',
            'menu.item.tomato-sauce': 'Tomato Sauce',
            'menu.item.arugula': 'Arugula',
            'menu.item.chili-pepper': 'Chili Pepper',
            'menu.item.cayenne-pepper-sauce': 'Cayenne Pepper Sauce',
            'menu.item.kalamata-pesto': 'Kalamata in Pesto',
            'menu.item.mushrooms': 'Mushrooms',
            'menu.item.grana-padano': 'Grana Padano',
            'menu.item.olives': 'Olives',
            'menu.item.prosciutto-extra': 'Prosciutto (extra)',
            'ingredients.truffle': 'Truffle cream, prosciutto, mushrooms, mozzarella',
            'ingredients.creamy-bacon': 'White sauce, gouda, bacon, tomato, cheddar',
            'ingredients.cheesy-beef': 'White sauce, gouda, cheddar, beef, onion, pickles',
            'ingredients.mortadella-pistachio': 'White sauce, mozzarella, mortadella, pesto, pistachio',
            'ingredients.sicilian': 'Tomato sauce, gouda, smoked sausage, mozzarella',
            'ingredients.parmesan-cream': 'Parmesan cream, mozzarella, basil',
            'ingredients.sweet-savory-prosciutto': 'White sauce, brie, mozzarella, prosciutto, honey, walnuts',
            'ingredients.macedonian': 'Ricotta cream, bacon, hot pepper, tomato',
            'ingredients.margherita': 'Tomato sauce, mozzarella, basil',
            'ingredients.pepperoni': 'Tomato sauce, mozzarella, pepperoni',
            'ingredients.capri': 'Tomato sauce, gouda, ham, mushrooms',
            'ingredients.quattro-formaggi': 'White sauce, mozzarella, gouda, gorgonzola, parmesan',
            'ingredients.pomodoro': 'Tomato sauce, mozzarella, basil',
            'ingredients.vegetarian': 'Tomato sauce, mushrooms, olives, mozzarella',
            'ingredients.piccante': 'Tomato sauce, spicy sausage, mozzarella, chili',
            'ingredients.cheddar-bacon': 'Bacon, cheddar, gouda, tomato',
            'ingredients.prosciutto': 'Prosciutto, mozzarella, tomato',
            'ingredients.cheesy-beef-sandwich': 'Beef, cheddar, pickles',
            'ingredients.mortadella-sandwich': 'Mortadella, mozzarella, arugula',
            'ingredients.caprese': 'Mozzarella, tomato, basil',
            'ingredients.veggie': 'Zucchini, mozzarella, pesto',
            'ingredients.capri-calzone': 'Tomato sauce, mozzarella, ham, mushrooms',
            'ingredients.pepperoni-calzone': 'Tomato sauce, mozzarella, pepperoni',
            'ingredients.mortadella-calzone': 'White sauce, mozzarella, mortadella',
            'ingredients.margherita-calzone': 'Tomato sauce, mozzarella',
            'ingredients.prosciutto-piadina': 'Tomato, mozzarella, prosciutto',
            'ingredients.mortadella-piadina': 'Tomato, mozzarella, mortadella',
            'ingredients.garlic-fries': 'French fries, garlic, spices',
            'ingredients.tricolore-salad': 'Arugula, mozzarella, parmesan',
            'ingredients.crudo-blue-salad': 'Mixed greens, blue cheese, walnuts',
            'ingredients.bacon-salad': 'Mixed greens, bacon, tomato',
            'ingredients.chocolate-brownie': 'Chocolate brownie',
            'ingredients.jaffa-brownie': 'Chocolate brownie with Jaffa',
            'about.title': 'About us',
            'about.intro': 'In search of the perfect pizza. We\'re close.',
            'about.text1': 'We serve <strong>authentic Neapolitan pizza</strong>, baked in our <strong>wood-fired oven</strong>. Located in the heart of Skopje, we use fresh dough made with <strong>Italian Caputo 00 flour</strong> and quality ingredients to bring you the true taste of Naples.',
            'about.text2': 'This is a <strong>local Skopje spot</strong>, not a chain. We focus on what matters: <strong>good pizza, made the traditional way</strong>.',
            'gallery.title': 'Gallery',
            'instagram.cta': 'Follow us on Instagram',
            'contact.title': 'Location & Contact',
            'contact.address.label': 'Address',
            'contact.address.text': 'Hristo Tatarchev 47f, Skopje, Macedonia',
            'contact.phone.label': 'Phone',
            'contact.hours.label': 'Opening Hours',
            'contact.hours.text': 'Monday - Thursday: 11:00 - 22:00\nFriday - Saturday: 11:00 - 23:00\nSunday: 12:00 - 21:00'
        }
    };

    let currentLang = 'mk'; // Default to Macedonian

    // Get saved language from localStorage or default to 'mk'
    function getSavedLanguage() {
        const saved = localStorage.getItem('15za12-lang');
        return saved && (saved === 'mk' || saved === 'en') ? saved : 'mk';
    }

    // Save language to localStorage
    function saveLanguage(lang) {
        localStorage.setItem('15za12-lang', lang);
    }

    // Update all translatable elements
    function updateLanguage(lang) {
        currentLang = lang;
        saveLanguage(lang);

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[lang][key];
            
            if (translation) {
                // Handle multiline text (for opening hours) and HTML content (for address and about)
                if (key === 'contact.hours.text') {
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                } else if (key === 'contact.address.text' || key === 'about.intro' || key === 'about.text1' || key === 'about.text2') {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update currency in prices based on language
        document.querySelectorAll('.item-price').forEach(priceElement => {
            const currentText = priceElement.textContent;
            if (lang === 'en') {
                // Change МКД to MKD for English
                priceElement.textContent = currentText.replace(/МКД/g, 'MKD');
            } else {
                // Change MKD to МКД for Macedonian
                priceElement.textContent = currentText.replace(/MKD/g, 'МКД');
            }
        });

        // Update language toggle active state
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // Initialize language on page load
    function initLanguage() {
        const savedLang = getSavedLanguage();
        updateLanguage(savedLang);
    }

    // Language toggle handler
    function setupLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        const langOptions = document.querySelectorAll('.lang-option');

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const newLang = option.getAttribute('data-lang');
                if (newLang !== currentLang) {
                    updateLanguage(newLang);
                }
            });
        });

        // Also allow clicking the whole toggle button
        langToggle.addEventListener('click', (e) => {
            if (e.target === langToggle || e.target.classList.contains('lang-separator')) {
                // Toggle between languages
                const newLang = currentLang === 'mk' ? 'en' : 'mk';
                updateLanguage(newLang);
            }
        });
    }

    // ============================================
    // Mobile CTA Visibility Based on Hero Section
    // ============================================

    function setupMobileCTAVisibility() {
        // Only run on mobile
        if (window.innerWidth > 767) {
            return;
        }

        const heroSection = document.querySelector('.hero');
        const stickyCTA = document.getElementById('sticky-cta');

        if (!heroSection || !stickyCTA) {
            return;
        }

        // Create IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hero is visible - hide CTA
                    stickyCTA.classList.add('is-hidden');
                } else {
                    // Hero is not visible - show CTA
                    stickyCTA.classList.remove('is-hidden');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of hero is visible
            rootMargin: '0px'
        });

        // Observe the hero section
        observer.observe(heroSection);

        // Handle window resize - reinitialize if switching between mobile/desktop
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 767) {
                    // Desktop - ensure CTA is visible (but hidden by CSS)
                    stickyCTA.classList.remove('is-hidden');
                } else {
                    // Mobile - check hero visibility again
                    const heroRect = heroSection.getBoundingClientRect();
                    const isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
                    if (isHeroVisible) {
                        stickyCTA.classList.add('is-hidden');
                    } else {
                        stickyCTA.classList.remove('is-hidden');
                    }
                }
            }, 100);
        });
    }

    // Initialize language system when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initLanguage();
            setupLanguageToggle();
            setupMobileCTAVisibility();
        });
    } else {
        // DOM already loaded
        initLanguage();
        setupLanguageToggle();
        setupMobileCTAVisibility();
    }

    // ============================================
    // Gallery Lightbox
    // ============================================

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
        src: item.getAttribute('data-image'),
        alt: item.querySelector('img').getAttribute('alt')
    }));

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Update lightbox image
    function updateLightboxImage() {
        if (images[currentImageIndex]) {
            lightboxImage.src = images[currentImageIndex].src;
            lightboxImage.alt = images[currentImageIndex].alt;
        }
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Navigate to previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Attach event listeners to gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    // Lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 20; // Small offset for sticky headers
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Sticky Mobile CTA
    // ============================================

    const stickyCTA = document.getElementById('sticky-cta');

    // Show/hide sticky CTA based on scroll position
    function handleStickyCTA() {
        if (window.innerWidth <= 767) {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show sticky CTA when scrolled past hero section
            if (scrollPosition > windowHeight * 0.5) {
                stickyCTA.classList.add('active');
            } else {
                stickyCTA.classList.remove('active');
            }

            // Hide when near bottom of page
            if (scrollPosition + windowHeight >= documentHeight - 50) {
                stickyCTA.classList.remove('active');
            }
        }
    }

    // Throttle scroll events for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleStickyCTA, 10);
    });

    // Initial check
    handleStickyCTA();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            stickyCTA.classList.remove('active');
        } else {
            handleStickyCTA();
        }
    });


    // ============================================
    // Performance: Lazy Load Images
    // ============================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Collapsible Menu Categories
    // ============================================

    const menuToggles = document.querySelectorAll('.menu-toggle');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuHeaders = document.querySelectorAll('.menu-category-header');
    let hasUserInteractedWithMenu = false;

    // Check if we're on mobile (using 768px as breakpoint, matching Tailwind 'md')
    function isMobile() {
        return window.innerWidth < 768;
    }

    function toggleCategory(category, toggle) {
        // Only allow toggle on mobile
        if (!isMobile()) {
            return;
        }

        // Once the user has interacted with any category,
        // we should no longer re-run the default-open logic on mobile.
        hasUserInteractedWithMenu = true;

        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            category.classList.add('collapsed');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = '+';
        } else {
            category.classList.remove('collapsed');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.textContent = '−';
        }
    }

    function initializeMenuStates() {
        if (isMobile()) {
            // Mobile: Only apply the default-open logic once,
            // before the user has interacted with the menu.
            if (!hasUserInteractedWithMenu) {
                // Mobile: Only the first category (ПИЦИ — Наши креации) is expanded by default
                // All others start collapsed
                menuCategories.forEach((category, index) => {
                    const toggle = menuToggles[index];
                    
                    if (index === 0) {
                        // First category: expanded
                        category.classList.remove('collapsed');
                        toggle.setAttribute('aria-expanded', 'true');
                        toggle.textContent = '−';
                    } else {
                        // All other categories: collapsed
                        category.classList.add('collapsed');
                        toggle.setAttribute('aria-expanded', 'false');
                        toggle.textContent = '+';
                    }
                });
            }
        } else {
            // Desktop: All categories always visible (expanded)
            menuCategories.forEach((category, index) => {
                const toggle = menuToggles[index];
                category.classList.remove('collapsed');
                toggle.setAttribute('aria-expanded', 'true');
                toggle.textContent = '−';
            });
        }
    }

    // Initialize menu toggles and headers
    function setupMenuInteractions() {
        menuCategories.forEach((category, index) => {
            const toggle = menuToggles[index];
            const header = menuHeaders[index];

            // Toggle on button click
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCategory(category, toggle);
            });

            // Toggle on header click
            // Button click stops propagation, so this only fires for header clicks
            header.addEventListener('click', () => {
                toggleCategory(category, toggle);
            });
        });
    }

    // Initialize on load
    initializeMenuStates();
    setupMenuInteractions();

    // Track whether the viewport was mobile or desktop to avoid
    // re-running initialization on every small resize (like mobile
    // address bar show/hide), while still updating when truly
    // crossing the breakpoint.
    let wasMobile = isMobile();

    // Handle window resize - update menu state when transitioning between mobile/desktop
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            const nowMobile = isMobile();

            // Only re-initialize when crossing the breakpoint between
            // mobile and desktop layouts. This prevents scroll-induced
            // viewport height changes on mobile from resetting the menu.
            if (nowMobile !== wasMobile) {
                initializeMenuStates();
                wasMobile = nowMobile;
            }
        }, 100);
    });


    // ============================================
    // Console Message
    // ============================================

    console.log('%c15 za 12', 'font-size: 20px; font-weight: bold; color: #c94a3d;');
    console.log('Neapolitan pizza in Skopje. Made with ❤️');

})();
