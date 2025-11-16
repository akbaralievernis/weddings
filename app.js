document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
  emailjs.init('YOUR_USER_ID');

  // Enhanced translations with new keys
  const translations = {
    ru: {
      // ... existing translations ...
      view_designs: 'Смотреть дизайны',
      designs_subtitle: '3 уникальных стиля для вашего особенного дня',
      selected_design: 'Выбранный дизайн:',
      advantages_subtitle: 'Мы делаем ваш особенный день еще прекраснее',
      testimonials_subtitle: 'Что говорят пары, которые уже воспользовались нашими услугами',
      contacts_subtitle: 'Мы всегда рады ответить на ваши вопросы',
      footer_tagline: 'Создаем красивые свадебные приглашения с любовью',
      design_elegant: 'Elegant Silver',
      design_elegant_desc: 'Элегантный стиль с серебряными акцентами.',
      design_romantic: 'Romantic Rose',
      design_romantic_desc: 'Романтический стиль с розовыми акцентами.'
    },
    en: {
      // ... existing translations ...
      view_designs: 'View Designs',
      designs_subtitle: '3 unique styles for your special day',
      selected_design: 'Selected design:',
      advantages_subtitle: 'We make your special day even more beautiful',
      testimonials_subtitle: 'What couples who already used our services say',
      contacts_subtitle: 'We are always happy to answer your questions',
      footer_tagline: 'Creating beautiful wedding invitations with love',
      design_elegant: 'Elegant Silver',
      design_elegant_desc: 'Elegant style with silver accents.',
      design_romantic: 'Romantic Rose',
      design_romantic_desc: 'Romantic style with pink accents.'
    },
    kg: {
      // ... existing translations ...
      view_designs: 'Дизайндарды көрүү',
      designs_subtitle: 'Сиздин айрыкча күнүңүз үчүн 3 уникалдуу стиль',
      selected_design: 'Тандалган дизайн:',
      advantages_subtitle: 'Биз сиздин айрыкча күнүңүздү дагы кооз кылабыз',
      testimonials_subtitle: 'Биздин кызматтарды колдонгон жуптар эмне деп айтышат',
      contacts_subtitle: 'Суроолоруңузга жооп берүүгө ар дайым бекенбиз',
      footer_tagline: 'Сүйүү менен кооз той чакырууларды түзөбүз',
      design_elegant: 'Элеганттуу Күмүш',
      design_elegant_desc: 'Күмүш акценттер менен элеганттуу стили.',
      design_romantic: 'Романтикалык Роза',
      design_romantic_desc: 'Кызгылт акценттер менен романтикалык стили.'
    }
  };

  // Set language function
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = translations[lang][el.dataset.i18nPlaceholder] || el.placeholder;
    });
    document.title = translations[lang].title;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  }

  // Initialize language
  const currentLang = localStorage.getItem('lang') || 'ru';
  setLanguage(currentLang);

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Initialize AOS
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling and active nav
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      // Close mobile menu
      document.querySelector('.nav').classList.remove('active');
      document.querySelector('.burger').classList.remove('active');
    });
  });

  // Burger menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Design selection
  const designButtons = document.querySelectorAll('.select-btn');
  const designInput = document.getElementById('design_id');
  const designName = document.getElementById('design-name');
  const selectedDesign = document.getElementById('selected-design');
  
  designButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const designId = btn.dataset.designId;
      const designTitle = btn.closest('.design-content').querySelector('h3').textContent;
      
      designInput.value = designId;
      designName.textContent = designTitle;
      selectedDesign.style.display = 'block';
      
      designButtons.forEach(b => {
        b.classList.remove('selected');
        b.textContent = translations[currentLang][b.dataset.i18n] || 'Выбрать';
      });
      
      btn.classList.add('selected');
      btn.textContent = '✓ ' + translations[currentLang]['selected'] || '✓ Выбран';
      
      // Scroll to order form
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // New: Modal for preview
  const modal = document.getElementById('design-modal');
  const iframe = document.getElementById('design-iframe');
  const closeBtn = document.querySelector('.close');
  const selectModalBtn = document.getElementById('select-from-modal');
  let currentSelectBtn;

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.href;
      iframe.src = url;
      modal.style.display = 'block';
      currentSelectBtn = btn.closest('.design-card').querySelector('.select-btn');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = '';
    }
  });

  selectModalBtn.addEventListener('click', () => {
    if (currentSelectBtn) {
      currentSelectBtn.click();
    }
    modal.style.display = 'none';
    iframe.src = '';
  });

  // Form submission
  const orderForm = document.getElementById('order-form');
  const submitBtn = orderForm.querySelector('.submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  const successMessage = document.querySelector('.success-message');
  const errorMessage = document.querySelector('.error-message');

  orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = orderForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--error)';
        isValid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    
    if (!isValid) {
      showMessage(errorMessage, translations[currentLang]['fill_fields'] || 'Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    if (!designInput.value) {
      showMessage(errorMessage, translations[currentLang]['select_design_error'] || 'Пожалуйста, выберите дизайн приглашения');
      return;
    }
    
    // Show loading state
    btnText.style.opacity = '0';
    btnLoader.style.display = 'block';
    submitBtn.disabled = true;
    
    try {
      // Prepare form data
      const formData = {
        names: document.getElementById('names').value,
        wedding_date: document.getElementById('wedding_date').value,
        phone: document.getElementById('phone').value,
        contact: document.getElementById('contact').value,
        design_id: designInput.value,
        design_name: designName.textContent,
        comments: document.getElementById('comments').value,
        language: currentLang
      };
      
      // Send email using EmailJS
      // Replace with your actual Service ID and Template ID
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
      
      // Show success message
      showMessage(successMessage);
      orderForm.reset();
      selectedDesign.style.display = 'none';
      designButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.textContent = translations[currentLang][btn.dataset.i18n] || 'Выбрать';
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      showMessage(errorMessage, translations[currentLang]['send_error'] || 'Ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.');
    } finally {
      // Reset loading state
      btnText.style.opacity = '1';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
    }
  });

  function showMessage(messageElement, customText = null) {
    // Hide all messages first
    document.querySelectorAll('.form-message').forEach(msg => {
      msg.style.display = 'none';
    });
    
    // Show the target message
    if (customText && messageElement.querySelector('p')) {
      messageElement.querySelector('p').textContent = customText;
    }
    
    messageElement.style.display = 'block';
    
    // Auto-hide success message after 5 seconds
    if (messageElement.classList.contains('success-message')) {
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 5000);
    }
  }

  // Scroll to top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Form field validation styling
  const formFields = orderForm.querySelectorAll('input, textarea');
  formFields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim()) {
        field.style.borderColor = '';
      }
    });
  });

  // Add loading animation to cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards for animation
  document.querySelectorAll('.design-card, .advantage-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
