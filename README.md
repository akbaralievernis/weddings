<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Wedding.KG — Создайте своё свадебное приглашение онлайн. Выберите дизайн, укажите данные и получите готовый сайт за 1 день!" />
  <title data-i18n="title">Wedding.KG — Свадебные приглашения онлайн</title>
  <link rel="icon" href="favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Animated Background -->
  <div class="animated-bg">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="#" class="brand" data-i18n="brand">Wedding.KG</a>
        <nav class="nav">
          <a href="#hero" class="nav-link" data-i18n="home">Главная</a>
          <a href="#designs" class="nav-link" data-i18n="designs">Дизайны</a>
          <a href="#order" class="nav-link" data-i18n="order">Заказ</a>
          <a href="#testimonials" class="nav-link" data-i18n="testimonials">Отзывы</a>
          <a href="#contacts" class="nav-link" data-i18n="contacts">Контакты</a>
        </nav>
        <div class="controls">
          <div class="lang-switch">
            <button class="lang-btn active" data-lang="ru">🇷🇺</button>
            <button class="lang-btn" data-lang="en">🇬🇧</button>
            <button class="lang-btn" data-lang="kg">🇰🇬</button>
          </div>
          <button class="burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero" data-aos="fade-down">
    <div class="container">
      <div class="hero-inner">
        <h1 class="hero-title" data-i18n="hero_title">Создай своё свадебное приглашение онлайн 💍</h1>
        <p class="hero-subtitle" data-i18n="hero_subtitle">Выбери дизайн, укажи дату — и получи красивый сайт-приглашение за 1 день.</p>
        <a href="#order" class="hero-btn" data-i18n="start_order">Начать заказ</a>
      </div>
    </div>
  </section>

  <!-- Designs Section -->
  <section id="designs" class="section" data-aos="fade-up">
    <div class="container">
      <h2 data-i18n="designs_title">Выберите дизайн</h2>
      <div class="designs-grid">
        <div class="design-card" data-aos="zoom-in" data-aos-delay="100">
          <img src="https://picsum.photos/seed/minimal/400/300" alt="Minimal Gold" loading="lazy">
          <h3 data-i18n="design_minimal">Minimal Gold</h3>
          <p data-i18n="design_minimal_desc">Чистый минимализм с золотыми акцентами.</p>
          <div class="design-actions">
            <a href="https://akbaralievernis.github.io/wedding/" class="btn secondary" target="_blank" data-i18n="view_example">Посмотреть пример</a>
            <button class="btn primary" data-design-id="minimal-gold" data-i18n="select_design">Выбрать</button>
          </div>
        </div>
        <div class="design-card" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://picsum.photos/seed/classic/400/300" alt="Classic Love" loading="lazy">
          <h3 data-i18n="design_classic">Classic Love</h3>
          <p data-i18n="design_classic_desc">Элегантная классика и каллиграфия.</p>
          <div class="design-actions">
            <a href="https://akbaralievernis.github.io/wedding/" class="btn secondary" target="_blank" data-i18n="view_example">Посмотреть пример</a>
            <button class="btn primary" data-design-id="classic-love" data-i18n="select_design">Выбрать</button>
          </div>
        </div>
        <div class="design-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="https://www.google.com/imgres?q=%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0&imgurl=https%3A%2F%2Fstatic.tildacdn.com%2Ftild6139-3466-4433-a564-316666376137%2FPPu1wH0hqDA.jpg&imgrefurl=https%3A%2F%2Fhouseforwedding.ru%2Fvesennyaya-svadba&docid=WoN8R5mRUazv-M&tbnid=q57YchA7CTtr7M&vet=12ahUKEwj2uo_27rCQAxXnHRAIHQaoKBEQM3oECB0QAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwj2uo_27rCQAxXnHRAIHQaoKBEQM3oECB0QAA" alt="Kyrgyz Style" loading="lazy">
          <h3 data-i18n="design_kyrgyz">Kyrgyz Style</h3>
          <p data-i18n="design_kyrgyz_desc">Национальные орнаменты, мягкие цвета.</p>
          <div class="design-actions">
            <a href="https://akbaralievernis.github.io/wedding/" class="btn secondary" target="_blank" data-i18n="view_example">Посмотреть пример</a>
            <button class="btn primary" data-design-id="kyrgyz-style" data-i18n="select_design">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Order Form Section -->
  <section id="order" class="section" data-aos="fade-up">
    <div class="container narrow">
      <h2 data-i18n="order_title">Оформить заказ</h2>
      <p class="order-subtitle" data-i18n="order_subtitle">Заполните данные, и мы создадим ваше идеальное приглашение!</p>
      <form id="order-form" class="order-form">
        <input id="names" placeholder="Имена жениха и невесты*" required data-i18n-placeholder="names_ph">
        <input id="wedding_date" type="date" required data-i18n-placeholder="wedding_date_ph">
        <input id="phone" type="tel" placeholder="Телефон*" required data-i18n-placeholder="phone_ph">
        <input id="contact" placeholder="Email или Telegram*" required data-i18n-placeholder="contact_ph">
        <input id="design_id" type="hidden" value="">
        <textarea id="comments" placeholder="Комментарий (пожелания, язык приглашения и т.д.)" data-i18n-placeholder="comments_ph"></textarea>
        <button class="btn primary" type="submit" data-i18n="submit_order">Отправить заказ 💌</button>
        <div class="loader" style="display: none;"></div>
      </form>
      <p class="success-message" style="display: none;" data-i18n="order_success">Спасибо! Мы свяжемся с вами в течение 24 часов.</p>
    </div>
  </section>

  <!-- Advantages Section -->
  <section id="advantages" class="section" data-aos="fade-up">
    <div class="container">
      <h2 data-i18n="advantages_title">Почему выбирают нас</h2>
      <div class="advantages-grid">
        <div class="advantage-card" data-aos="zoom-in" data-aos-delay="100">💍 <span data-i18n="advantage_1">Готово за 1 день</span></div>
        <div class="advantage-card" data-aos="zoom-in" data-aos-delay="200">🌐 <span data-i18n="advantage_2">3 языка (KG/RU/EN)</span></div>
        <div class="advantage-card" data-aos="zoom-in" data-aos-delay="300">📱 <span data-i18n="advantage_3">Работает на всех устройствах</span></div>
        <div class="advantage-card" data-aos="zoom-in" data-aos-delay="400">💌 <span data-i18n="advantage_4">Индивидуальный дизайн</span></div>
        <div class="advantage-card" data-aos="zoom-in" data-aos-delay="500">💸 <span data-i18n="advantage_5">Доступная цена — от 2000 сомов</span></div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="section" data-aos="fade-up">
    <div class="container">
      <h2 data-i18n="testimonials_title">Отзывы наших клиентов</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
          <img src="https://picsum.photos/seed/testimonial1/100/100" alt="Aizhan & Taalay" loading="lazy">
          <p data-i18n="testimonial_1">“Получили сайт-приглашение за пару часов — это было невероятно красиво!”</p>
          <strong data-i18n="testimonial_1_author">Айжан & Таалай</strong>
        </div>
        <div class="testimonial-card" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://picsum.photos/seed/testimonial2/100/100" alt="Nargiza & Bekzat" loading="lazy">
          <p data-i18n="testimonial_2">“Очень удобный сервис, всё сделали быстро и с душой!”</p>
          <strong data-i18n="testimonial_2_author">Наргиза & Бекзат</strong>
        </div>
        <div class="testimonial-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="https://picsum.photos/seed/testimonial3/100/100" alt="Gulnaz & Ernis" loading="lazy">
          <p data-i18n="testimonial_3">“Наши гости были в восторге от приглашения, спасибо Wedding.KG!”</p>
          <strong data-i18n="testimonial_3_author">Гульназ & Кутман</strong>
        </div>
      </div>
    </div>
  </section>

  <!-- Contacts Section -->
  <section id="contacts" class="section" data-aos="fade-up">
    <div class="container narrow">
      <h2 data-i18n="contacts_title">Свяжитесь с нами</h2>
      <div class="contacts-grid">
        <p><strong data-i18n="email_label">Email:</strong> <a href="mailto:astanovohrano@gmail.com">astanovohrano@gmail.com</a></p>
        <p><strong data-i18n="phone_label">Телефон:</strong> <a href="tel:+996776230205">+996 776 230205</a></p>
        <p><strong data-i18n="telegram_label">Telegram:</strong> <a href="https://t.me/Ernis" target="_blank">@Ernis</a></p>
        <p><strong data-i18n="instagram_label">Instagram:</strong> <a href="https://instagram.com/wedding.kg" target="_blank">wedding.kg</a></p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p data-i18n="footer">Wedding.KG © 2025 — Сделано с любовью 💍</p>
    </div>
  </footer>

  <!-- Scroll to Top Button -->
  <button class="scroll-to-top" title="Наверх">
    <svg viewBox="0 0 24 24">
      <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z"/>
    </svg>
  </button>

  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="app.js"></script>
</body>
</html>
