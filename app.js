document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  // Замените 'YOUR_USER_ID' на ваш EmailJS User ID (Account -> API Keys -> Public Key)
  emailjs.init('YOUR_USER_ID');

  // Translations
  const translations = {
    ru: {
      title: 'Wedding.KG — Свадебные приглашения онлайн',
      brand: 'Wedding.KG',
      home: 'Главная',
      designs: 'Дизайны',
      order: 'Заказ',
      testimonials: 'Отзывы',
      contacts: 'Контакты',
      hero_title: 'Создай своё свадебное приглашение онлайн 💍',
      hero_subtitle: 'Выбери дизайн, укажи дату — и получи красивый сайт-приглашение за 1 день.',
      start_order: 'Начать заказ',
      designs_title: 'Выберите дизайн',
      design_minimal: 'Minimal Gold',
      design_minimal_desc: 'Чистый минимализм с золотыми акцентами.',
      design_classic: 'Classic Love',
      design_classic_desc: 'Элегантная классика и каллиграфия.',
      design_kyrgyz: 'Kyrgyz Style',
      design_kyrgyz_desc: 'Национальные орнаменты, мягкие цвета.',
      view_example: 'Посмотреть пример',
      select_design: 'Выбрать',
      order_title: 'Оформить заказ',
      order_subtitle: 'Заполните данные, и мы создадим ваше идеальное приглашение!',
      names_ph: 'Имена жениха и невесты*',
      wedding_date_ph: 'Дата свадьбы*',
      phone_ph: 'Телефон*',
      contact_ph: 'Email или Telegram*',
      comments_ph: 'Комментарий (пожелания, язык приглашения и т.д.)',
      submit_order: 'Отправить заказ 💌',
      order_success: 'Спасибо! Мы свяжемся с вами в течение 24 часов.',
      advantages_title: 'Почему выбирают нас',
      advantage_1: 'Готово за 1 день',
      advantage_2: '3 языка (KG/RU/EN)',
      advantage_3: 'Работает на всех устройствах',
      advantage_4: 'Индивидуальный дизайн',
      advantage_5: 'Доступная цена — от 2000 сомов',
      testimonials_title: 'Отзывы наших клиентов',
      testimonial_1: '“Получили сайт-приглашение за пару часов — это было невероятно красиво!”',
      testimonial_1_author: 'Айжан & Таалай',
      testimonial_2: '“Очень удобный сервис, всё сделали быстро и с душой!”',
      testimonial_2_author: 'Наргиза & Бекзат',
      testimonial_3: '“Наши гости были в восторге от приглашения, спасибо Wedding.KG!”',
      testimonial_3_author: 'Гульназ & Кутман',
      contacts_title: 'Свяжитесь с нами',
      email_label: 'Email:',
      phone_label: 'Телефон:',
      telegram_label: 'Telegram:',
      instagram_label: 'Instagram:',
      footer: 'Wedding.KG © 2025 — Сделано с любовью 💍'
    },
    en: {
      title: 'Wedding.KG — Online Wedding Invitations',
      brand: 'Wedding.KG',
      home: 'Home',
      designs: 'Designs',
      order: 'Order',
      testimonials: 'Testimonials',
      contacts: 'Contacts',
      hero_title: 'Create Your Wedding Invitation Online 💍',
      hero_subtitle: 'Choose a design, enter your details, and get a beautiful invitation website in 1 day.',
      start_order: 'Start Order',
      designs_title: 'Choose a Design',
      design_minimal: 'Minimal Gold',
      design_minimal_desc: 'Clean minimalism with golden accents.',
      design_classic: 'Classic Love',
      design_classic_desc: 'Elegant classic with calligraphy.',
      design_kyrgyz: 'Kyrgyz Style',
      design_kyrgyz_desc: 'National ornaments, soft colors.',
      view_example: 'View Example',
      select_design: 'Select',
      order_title: 'Place Your Order',
      order_subtitle: 'Fill in your details, and we’ll create your perfect invitation!',
      names_ph: 'Names of Bride and Groom*',
      wedding_date_ph: 'Wedding Date*',
      phone_ph: 'Phone*',
      contact_ph: 'Email or Telegram*',
      comments_ph: 'Comments (wishes, invitation language, etc.)',
      submit_order: 'Send Order 💌',
      order_success: 'Thank you! We will contact you within 24 hours.',
      advantages_title: 'Why Choose Us',
      advantage_1: 'Ready in 1 Day',
      advantage_2: '3 Languages (KG/RU/EN)',
      advantage_3: 'Works on All Devices',
      advantage_4: 'Custom Design',
      advantage_5: 'Affordable Price — from 2000 KGS',
      testimonials_title: 'Our Clients’ Reviews',
      testimonial_1: '“We got our invitation website in a few hours — it was incredibly beautiful!”',
      testimonial_1_author: 'Aizhan & Taalay',
      testimonial_2: '“Very convenient service, everything was done quickly and with care!”',
      testimonial_2_author: 'Nargiza & Bekzat',
      testimonial_3: '“Our guests loved the invitation, thank you Wedding.KG!”',
      testimonial_3_author: 'Gulnaz & Kutman',
      contacts_title: 'Contact Us',
      email_label: 'Email:',
      phone_label: 'Phone:',
      telegram_label: 'Telegram:',
      instagram_label: 'Instagram:',
      footer: 'Wedding.KG © 2025 — Made with Love 💍'
    },
    kg: {
      title: 'Wedding.KG — Онлайн той чакыруулары',
      brand: 'Wedding.KG',
      home: 'Башкы',
      designs: 'Дизайндар',
      order: 'Буйрутма',
      testimonials: 'Пикирлер',
      contacts: 'Байланыштар',
      hero_title: 'Онлайн той чакырууңузду түзүңүз 💍',
      hero_subtitle: 'Дизайнды тандаңыз, маалыматыңызды киргизиңиз жана 1 күндүн ичинде кооз чакыруу сайтын алыңыз.',
      start_order: 'Буйрутманы баштоо',
      designs_title: 'Дизайнды тандаңыз',
      design_minimal: 'Minimal Gold',
      design_minimal_desc: 'Алтын акценттер менен таза минимализм.',
      design_classic: 'Classic Love',
      design_classic_desc: 'Классикалык элеганттуулук жана каллиграфия.',
      design_kyrgyz: 'Kyrgyz Style',
      design_kyrgyz_desc: 'Улуттук оймо-чиймелер, жумшак түстөр.',
      view_example: 'Мисалды көрүү',
      select_design: 'Тандоо',
      order_title: 'Буйрутма берүү',
      order_subtitle: 'Маалыматыңызды толтуруңуз, биз сиздин идеалдуу чакырууңузду түзөбүз!',
      names_ph: 'Күйөө менен кыздын аттары*',
      wedding_date_ph: 'Той күнү*',
      phone_ph: 'Телефон*',
      contact_ph: 'Email же Telegram*',
      comments_ph: 'Комментарийлер (каалоолор, чакыруунун тили ж.б.)',
      submit_order: 'Буйрутманы жөнөтүү 💌',
      order_success: 'Рахмат! Биз сиз менен 24 сааттын ичинде байланышабыз.',
      advantages_title: 'Эмне үчүн бизди тандашат',
      advantage_1: '1 күндө даяр',
      advantage_2: '3 тил (KG/RU/EN)',
      advantage_3: 'Бардык түзмөктөрдө иштейт',
      advantage_4: 'Жеке дизайн',
      advantage_5: 'Жеткиликтүү баа — 2000 сомдон баштап',
      testimonials_title: 'Биздин кардарлардын пикирлери',
      testimonial_1: '“Бир нече сааттын ичинде чакыруу сайтыбызды алдык — бул укмуштуудай кооз болду!”',
      testimonial_1_author: 'Айжан & Таалай',
      testimonial_2: '“Абдан ыңгайлуу сервис, баары тез жана жан дили менен жасалды!”',
      testimonial_2_author: 'Наргиза & Бекзат',
      testimonial_3: '“Биздин коноктор чакыруудан кубанып калышты, Wedding.KGге рахмат!”',
      testimonial_3_author: 'Гульназ & Kutman',
      contacts_title: 'Биз менен байланышыңыз',
      email_label: 'Email:',
      phone_label: 'Телефон:',
      telegram_label: 'Telegram:',
      instagram_label: 'Instagram:',
      footer: 'Wedding.KG © 2025 — Сүйүү менен жасалган 💍'
    }
  };

  // Set language
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = translations[lang][el.dataset.i18n] || el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = translations[lang][el.dataset.i18nPlaceholder] || el.placeholder;
    });
    document.title = translations[lang].title;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  }

  const currentLang = localStorage.getItem('lang') || 'ru';
  setLanguage(currentLang);

  // Language switcher events
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Initialize AOS
  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  // Smooth scrolling and active nav
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
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
  const designButtons = document.querySelectorAll('.design-card button[data-design-id]');
  const designInput = document.getElementById('design_id');
  designButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const designId = btn.dataset.designId;
      designInput.value = designId;
      designButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      // Scroll to order form
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Theme toggle
  const themeToggle = document.querySelector('.cssbuttons-io');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});

