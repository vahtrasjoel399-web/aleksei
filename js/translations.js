// ── Все тексты сайта на 4 языках ──────────────────────────────────────────────

const T = {

  /* ── ЭСТОНСКИЙ ──────────────────────────────────────────────────────── */
  et: {
    nav: {
      home: 'Avaleht', about: 'Meist', services: 'Teenused',
      projects: 'Projektid', reviews: 'Arvustused', contact: 'Kontakt'
    },
    hero: {
      titleHtml: 'Mööbli paigaldus<br><em>Eestis ja Soomes</em>',
      sub:  'Professionaalne mööbli paigaldus — kiirelt, täpselt ja garantiiga. Tellimusmööbel ja disain lisavõimalusena.',
      cta:  'Võta ühendust',
      cta2: 'Teenused',
      s1: 'Aastat kogemust', s2: 'Valmis projekti', s3: 'Riiki'
    },
    about: {
      ey: 'Meist',
      title: 'Mööbli paigaldus on meie põhitöö',
      p1: 'Mildanmar OÜ põhitegevus on mööbli professionaalne paigaldus Eestis ja Soomes. Kokkupanek, kinnitamine, reguleerimine — teeme seda kiirelt ja kvaliteetselt.',
      p2: 'Lisaks paigaldusele pakume ka tellimusmööbli valmistamist, ruumidisaini ja konsultatsioone — kõik ühest kohast, vastavalt kliendi soovidele.',
      l1: 'Ettevõte', l2: 'Asutatud', l3: 'Reg. number', l4: 'Piirkonnad',
      regions: 'Eesti, Soome'
    },
    m3d: {
      ey: '3D',
      title: 'Meie mööbel 3D-s',
      sub: 'Pöörake mudelit hiire või sõrmega.',
      hint: 'Lohista pööramiseks · Kerib suurendamiseks'
    },
    srv: {
      ey: 'Teenused', title: 'Mida me pakume',
      // Põhiteenus
      mainBadge: 'Põhitegevus',
      s0t: 'Mööbli paigaldus',
      s0d: 'Paigaldame kõiki mööblitüüpe — köögid, kapid, garderoobid, kontorimööbel. Täpne kokkupanek, kinnitamine ja funktsionaalsuse kontroll koos garantiiga.',
      s0l1: 'Kokkupanek ja kinnitamine',
      s0l2: 'Seinale ja põrandale fikseerimine',
      s0l3: 'Funktsionaalsuse kontroll + garantii',
      // Lisateenused
      addLabel: 'Lisateenused',
      s1t: 'Tellimusmööbel',        s1d: 'Valmistame mööbli mõõtu — riiulid, kapid, köögid. Materjal ja värv vastavalt soovile.',
      s2t: 'Disain ja planeerimine',s2d: 'Ruumi planeerimine ja mööbli paigutuse lahendamine enne tellimist.',
      s3t: 'Tööd Soomes',           s3d: 'Pakume paigaldus- ja tootmisteenust ka Soomes samal kvaliteeditasemel.',
      s4t: 'Konsultatsioon',        s4d: 'Aitame materjali valikul, hinnapakkumise koostamisel ja projekti planeerimisel.'
    },
    prj: {
      ey: 'Projektid', title: 'Tehtud tööd',
      c1: 'Paigaldus', p1: 'Köögimööbli paigaldus',
      c2: 'Paigaldus', p2: 'Sektsioonmööbel elutuppa',
      c3: 'Paigaldus', p3: 'Riidekapp magamistuppa',
      c4: 'Paigaldus', p4: 'Kontori mööblilahendus',
      c5: 'Soome',     p5: 'Projekt Soomes',
      c6: 'Disain',    p6: 'Sisekujundus ja mööbel'
    },
    rev: {
      ey: 'Arvustused', title: 'Klientide tagasiside',
      fmTitle: 'Jäta arvustus',
      nameL: 'Nimi', namePh: 'Teie nimi',
      ratingL: 'Hinnang',
      textL: 'Arvustus', textPh: 'Kirjutage oma kogemusest...',
      submit: 'Saada arvustus',
      ok: 'Täname! Arvustus on edastatud.',
      items: [
        { name: 'Tiit Mäger',    rating: 5, text: 'Köök paigaldati täpselt nagu soovisin. Kiire töö, kõik kinnitused korras ja garantii olemas. Kindlasti soovitan.',  date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Установили мебель в спальне быстро и аккуратно. Всё на месте, ничего не скрипит. Очень довольна.',                  date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'Keittiökalusteiden asennus sujui erinomaisesti. Nopea, tarkka ja siisti työ. Suosittelen.',                         date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Hea teenindus, kiire reageerimine ja korralik paigaldus. Soovitan.',                                                 date: '10.05.2025' }
      ]
    },
    cnt: {
      ey: 'Kontakt', title: 'Võta ühendust',
      addrL: 'Aadress', addr: 'Uus tn 10-4, Kiviõli linn,\nLüganuse vald, Ida-Viru maakond,\n43124 Eesti',
      phoneL: 'Telefon', emailL: 'E-post',
      hoursL: 'Tööaeg', hours: 'Esmaspäev – Reede, 08:00–18:00',
      fmTitle: 'Saada päring',
      nameL: 'Nimi', namePh: 'Teie nimi',
      phonePh: '+372 XXXX XXXX', emailPh: 'teie@email.ee',
      workL: 'Töö liik', descL: 'Kirjeldus', descPh: 'Kirjeldage projekti...',
      submit: 'Saada päring',
      ok: 'Päring saadetud. Võtame ühendust 24 tunni jooksul.',
      wt: ['Vali töö liik', 'Mööbli paigaldus', 'Tellimusmööbel', 'Disain ja planeerimine', 'Tööd Soomes', 'Konsultatsioon', 'Muu']
    },
    ft: {
      desc: 'Mööbli paigaldus Eestis ja Soomes.',
      col1: 'Teenused', col2: 'Kontakt',
      copy: '© 2025 Mildanmar OÜ',
      privacy: 'Privaatsuspoliitika'
    },
    cookie: {
      text: 'Kasutame küpsiseid parima kasutuskogemuse tagamiseks.',
      link: 'Privaatsuspoliitika',
      accept: 'Nõustun'
    },
    e: {
      req: 'Väli on kohustuslik.', email: 'Sisestage kehtiv e-posti aadress.',
      phone: 'Sisestage kehtiv telefoninumber.', rat: 'Valige hinnang.'
    }
  },

  /* ── РУССКИЙ ────────────────────────────────────────────────────────── */
  ru: {
    nav: {
      home: 'Главная', about: 'О нас', services: 'Услуги',
      projects: 'Проекты', reviews: 'Отзывы', contact: 'Контакты'
    },
    hero: {
      titleHtml: 'Монтаж мебели<br><em>в Эстонии и Финляндии</em>',
      sub:  'Профессиональный монтаж мебели — быстро, точно и с гарантией. Изготовление на заказ и дизайн — дополнительно.',
      cta:  'Связаться',
      cta2: 'Услуги',
      s1: 'Года опыта', s2: 'Готовых проектов', s3: 'Страны'
    },
    about: {
      ey: 'О нас',
      title: 'Монтаж мебели — наша основная работа',
      p1: 'Основная деятельность Mildanmar OÜ — профессиональный монтаж мебели в Эстонии и Финляндии. Сборка, крепление, регулировка — делаем быстро и качественно.',
      p2: 'Дополнительно предлагаем изготовление мебели на заказ, дизайн интерьера и консультации — всё в одном месте, по пожеланиям клиента.',
      l1: 'Компания', l2: 'Основана', l3: 'Рег. номер', l4: 'Регионы',
      regions: 'Эстония, Финляндия'
    },
    m3d: {
      ey: '3D',
      title: 'Наша мебель в 3D',
      sub: 'Крутите модель мышью или пальцем.',
      hint: 'Тяните для вращения · Колесо для масштаба'
    },
    srv: {
      ey: 'Услуги', title: 'Что мы предлагаем',
      mainBadge: 'Основная деятельность',
      s0t: 'Монтаж мебели',
      s0d: 'Устанавливаем любую мебель — кухни, шкафы, гардеробы, офисная мебель. Точная сборка, крепление и проверка функциональности с гарантией.',
      s0l1: 'Сборка и крепление',
      s0l2: 'Настенный и напольный монтаж',
      s0l3: 'Проверка функциональности + гарантия',
      addLabel: 'Дополнительные услуги',
      s1t: 'Мебель на заказ',        s1d: 'Изготавливаем мебель по размерам — стеллажи, шкафы, кухни. Материал и цвет по желанию.',
      s2t: 'Дизайн и планировка',    s2d: 'Планировка пространства и расстановка мебели перед заказом.',
      s3t: 'Работы в Финляндии',     s3d: 'Монтаж и производство в Финляндии — тот же уровень качества.',
      s4t: 'Консультация',           s4d: 'Помогаем с выбором материалов, составлением сметы и планированием проекта.'
    },
    prj: {
      ey: 'Проекты', title: 'Выполненные работы',
      c1: 'Монтаж',   p1: 'Установка кухонной мебели',
      c2: 'Монтаж',   p2: 'Стенка в гостиную',
      c3: 'Монтаж',   p3: 'Шкаф-купе в спальню',
      c4: 'Монтаж',   p4: 'Офисная мебель',
      c5: 'Финляндия',p5: 'Проект в Финляндии',
      c6: 'Дизайн',   p6: 'Дизайн и мебель'
    },
    rev: {
      ey: 'Отзывы', title: 'Отзывы клиентов',
      fmTitle: 'Оставить отзыв',
      nameL: 'Имя', namePh: 'Ваше имя',
      ratingL: 'Оценка',
      textL: 'Отзыв', textPh: 'Напишите о своём опыте...',
      submit: 'Отправить',
      ok: 'Спасибо! Отзыв отправлен.',
      items: [
        { name: 'Tiit Mäger',     rating: 5, text: 'Кухню установили именно так, как я хотел. Быстро, все крепления на месте, гарантия есть. Рекомендую.',                  date: '15.03.2025' },
        { name: 'Ольга Симонова', rating: 5, text: 'Установили мебель в спальне быстро и аккуратно. Всё на месте, ничего не скрипит. Очень довольна.',                      date: '02.04.2025' },
        { name: 'Jari Korhonen',  rating: 5, text: 'Монтаж кухонного гарнитура в Финляндии прошёл отлично. Быстро, аккуратно. Рекомендую.',                                 date: '20.04.2025' },
        { name: 'Маргус Тамм',    rating: 4, text: 'Хорошее обслуживание, быстрый ответ и качественный монтаж. Рекомендую.',                                                date: '10.05.2025' }
      ]
    },
    cnt: {
      ey: 'Контакты', title: 'Свяжитесь с нами',
      addrL: 'Адрес', addr: 'Uus tn 10-4, Kiviõli linn,\nLüganuse vald, Ida-Viru maakond,\n43124 Эстония',
      phoneL: 'Телефон', emailL: 'Эл. почта',
      hoursL: 'Рабочие часы', hours: 'Понедельник – Пятница, 08:00–18:00',
      fmTitle: 'Отправить заявку',
      nameL: 'Имя', namePh: 'Ваше имя',
      phonePh: '+372 XXXX XXXX', emailPh: 'ваш@email.com',
      workL: 'Вид работы', descL: 'Описание', descPh: 'Опишите проект...',
      submit: 'Отправить заявку',
      ok: 'Заявка отправлена. Свяжемся в течение 24 часов.',
      wt: ['Выберите вид работы', 'Монтаж мебели', 'Мебель на заказ', 'Дизайн и планировка', 'Работы в Финляндии', 'Консультация', 'Другое']
    },
    ft: {
      desc: 'Монтаж мебели в Эстонии и Финляндии.',
      col1: 'Услуги', col2: 'Контакты',
      copy: '© 2025 Mildanmar OÜ',
      privacy: 'Политика конфиденциальности'
    },
    cookie: {
      text: 'Мы используем файлы cookie для улучшения работы сайта.',
      link: 'Политика конфиденциальности',
      accept: 'Принять'
    },
    e: {
      req: 'Поле обязательно.', email: 'Введите корректный адрес.',
      phone: 'Введите корректный номер.', rat: 'Выберите оценку.'
    }
  },

  /* ── ENGLISH ────────────────────────────────────────────────────────── */
  en: {
    nav: {
      home: 'Home', about: 'About', services: 'Services',
      projects: 'Projects', reviews: 'Reviews', contact: 'Contact'
    },
    hero: {
      titleHtml: 'Furniture Installation<br><em>in Estonia & Finland</em>',
      sub:  'Professional furniture installation — fast, precise and guaranteed. Custom manufacturing and design available as extras.',
      cta:  'Get in Touch',
      cta2: 'Services',
      s1: 'Years of Experience', s2: 'Projects Done', s3: 'Countries'
    },
    about: {
      ey: 'About Us',
      title: 'Furniture Installation Is Our Core Business',
      p1: 'The main activity of Mildanmar OÜ is professional furniture installation in Estonia and Finland. Assembly, securing, adjustment — we do it fast and with quality.',
      p2: 'We also offer custom furniture manufacturing, interior design and consultations as additional services — everything in one place, tailored to the client.',
      l1: 'Company', l2: 'Founded', l3: 'Reg. number', l4: 'Regions',
      regions: 'Estonia, Finland'
    },
    m3d: {
      ey: '3D',
      title: 'Our Furniture in 3D',
      sub: 'Rotate the model with your mouse or finger.',
      hint: 'Drag to rotate · Scroll to zoom'
    },
    srv: {
      ey: 'Services', title: 'What We Offer',
      mainBadge: 'Main Service',
      s0t: 'Furniture Installation',
      s0d: 'We install all types of furniture — kitchens, wardrobes, cabinets, office furniture. Precise assembly, securing and function check with a guarantee.',
      s0l1: 'Assembly and securing',
      s0l2: 'Wall and floor mounting',
      s0l3: 'Function check + guarantee',
      addLabel: 'Additional Services',
      s1t: 'Custom Furniture',    s1d: 'We manufacture furniture to measure — shelving, wardrobes, kitchens. Material and colour to your choice.',
      s2t: 'Design & Planning',   s2d: 'Space planning and furniture layout before placing an order.',
      s3t: 'Works in Finland',    s3d: 'Installation and production in Finland — same quality standards.',
      s4t: 'Consultation',        s4d: 'We help with material selection, cost estimation and project planning.'
    },
    prj: {
      ey: 'Projects', title: 'Completed Work',
      c1: 'Installation', p1: 'Kitchen Furniture Installation',
      c2: 'Installation', p2: 'Living Room Wall Unit',
      c3: 'Installation', p3: 'Built-in Wardrobe',
      c4: 'Installation', p4: 'Office Furniture',
      c5: 'Finland',      p5: 'Project in Finland',
      c6: 'Design',       p6: 'Interior Design & Furniture'
    },
    rev: {
      ey: 'Reviews', title: 'Client Feedback',
      fmTitle: 'Leave a Review',
      nameL: 'Name', namePh: 'Your name',
      ratingL: 'Rating',
      textL: 'Review', textPh: 'Write about your experience...',
      submit: 'Submit Review',
      ok: 'Thank you! Your review has been submitted.',
      items: [
        { name: 'Tiit Mäger',    rating: 5, text: 'The kitchen was installed exactly as I wanted. Quick work, all fixings in place, warranty provided. Highly recommend.',      date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Bedroom furniture installed quickly and neatly. Everything is solid, nothing creaks. Very pleased.',                        date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'Kitchen installation in Finland went excellently. Fast, precise and tidy work. Recommended.',                               date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Good service, quick response and quality installation. Recommended.',                                                      date: '10.05.2025' }
      ]
    },
    cnt: {
      ey: 'Contact', title: 'Get in Touch',
      addrL: 'Address', addr: 'Uus tn 10-4, Kiviõli linn,\nLüganuse vald, Ida-Viru maakond,\n43124 Estonia',
      phoneL: 'Phone', emailL: 'Email',
      hoursL: 'Working Hours', hours: 'Monday – Friday, 08:00–18:00',
      fmTitle: 'Send Inquiry',
      nameL: 'Name', namePh: 'Your name',
      phonePh: '+372 XXXX XXXX', emailPh: 'your@email.com',
      workL: 'Type of Work', descL: 'Description', descPh: 'Describe the project...',
      submit: 'Send Inquiry',
      ok: 'Inquiry sent. We will contact you within 24 hours.',
      wt: ['Select type of work', 'Furniture Installation', 'Custom Furniture', 'Design & Planning', 'Works in Finland', 'Consultation', 'Other']
    },
    ft: {
      desc: 'Furniture installation in Estonia and Finland.',
      col1: 'Services', col2: 'Contact',
      copy: '© 2025 Mildanmar OÜ',
      privacy: 'Privacy Policy'
    },
    cookie: {
      text: 'We use cookies to improve your experience on this site.',
      link: 'Privacy Policy',
      accept: 'Accept'
    },
    e: {
      req: 'This field is required.', email: 'Enter a valid email address.',
      phone: 'Enter a valid phone number.', rat: 'Please select a rating.'
    }
  },

  /* ── SUOMI ──────────────────────────────────────────────────────────── */
  fi: {
    nav: {
      home: 'Etusivu', about: 'Meistä', services: 'Palvelut',
      projects: 'Projektit', reviews: 'Arvostelut', contact: 'Yhteystiedot'
    },
    hero: {
      titleHtml: 'Huonekalujen asennus<br><em>Virossa ja Suomessa</em>',
      sub:  'Ammattimainen huonekalujen asennus — nopeasti, tarkasti ja takuulla. Tilausvalmistus ja suunnittelu lisäpalveluina.',
      cta:  'Ota yhteyttä',
      cta2: 'Palvelut',
      s1: 'Vuotta kokemusta', s2: 'Valmistunutta projektia', s3: 'Maata'
    },
    about: {
      ey: 'Meistä',
      title: 'Huonekalujen asennus on ydinliiketoimintamme',
      p1: 'Mildanmar OÜ:n pääasiallinen toiminta on ammattimainen huonekalujen asennus Virossa ja Suomessa. Kokoaminen, kiinnittäminen, säätäminen — nopeasti ja laadukkaasti.',
      p2: 'Lisäksi tarjoamme tilausvalmistusta, sisustussuunnittelua ja konsultointia — kaikki yhdestä paikasta, asiakkaan toiveiden mukaan.',
      l1: 'Yritys', l2: 'Perustettu', l3: 'Rek. numero', l4: 'Alueet',
      regions: 'Viro, Suomi'
    },
    m3d: {
      ey: '3D',
      title: 'Kalusteet 3D:nä',
      sub: 'Pyöritä mallia hiirellä tai sormella.',
      hint: 'Vedä pyörittääksesi · Rulla zoomaamiseen'
    },
    srv: {
      ey: 'Palvelut', title: 'Mitä tarjoamme',
      mainBadge: 'Pääpalvelu',
      s0t: 'Huonekalujen asennus',
      s0d: 'Asennamme kaikentyyppisiä huonekaluja — keittiöt, kaapit, vaatehuoneet, toimistokalusteet. Tarkka kokoaminen, kiinnittäminen ja toimivuustarkistus takuulla.',
      s0l1: 'Kokoaminen ja kiinnittäminen',
      s0l2: 'Seinä- ja lattia-asennus',
      s0l3: 'Toimivuustarkistus + takuu',
      addLabel: 'Lisäpalvelut',
      s1t: 'Tilauskalusteet',    s1d: 'Valmistamme kalusteet mittojen mukaan — hyllyt, kaapit, keittiöt. Materiaali ja väri toiveiden mukaan.',
      s2t: 'Suunnittelu',        s2d: 'Tilasuunnittelu ja kalustesijoittelu ennen tilauksen tekemistä.',
      s3t: 'Työt Suomessa',      s3d: 'Asennus ja valmistus Suomessa — sama laatutaso.',
      s4t: 'Konsultointi',       s4d: 'Autamme materiaalivalinnoissa, kustannusarviossa ja projektisuunnittelussa.'
    },
    prj: {
      ey: 'Projektit', title: 'Valmiit työt',
      c1: 'Asennus',  p1: 'Keittiökalusteasennus',
      c2: 'Asennus',  p2: 'Olohuoneen seinäkalusto',
      c3: 'Asennus',  p3: 'Liukuovikaappi makuuhuoneeseen',
      c4: 'Asennus',  p4: 'Toimistokalusteet',
      c5: 'Suomi',    p5: 'Projekti Suomessa',
      c6: 'Suunnittelu', p6: 'Sisustussuunnittelu ja kalusteet'
    },
    rev: {
      ey: 'Arvostelut', title: 'Asiakaspalaute',
      fmTitle: 'Jätä arvostelu',
      nameL: 'Nimi', namePh: 'Nimesi',
      ratingL: 'Arvosana',
      textL: 'Arvostelu', textPh: 'Kirjoita kokemuksestasi...',
      submit: 'Lähetä arvostelu',
      ok: 'Kiitos! Arvostelu on lähetetty.',
      items: [
        { name: 'Tiit Mäger',    rating: 5, text: 'Keittiö asennettiin juuri niin kuin halusin. Nopea työ, kaikki kiinnikkeet paikallaan ja takuu voimassa. Suosittelen.',  date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Makuuhuoneen kalusteet asennettiin nopeasti ja siististi. Kaikki pitävät, ei rahise. Erittäin tyytyväinen.',             date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'Keittiökalustemontaasi Suomessa sujui erinomaisesti. Nopea, tarkka ja siisti työ. Suosittelen.',                        date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Hyvä palvelu, nopea vastaus ja laadukas asennus. Suosittelen.',                                                         date: '10.05.2025' }
      ]
    },
    cnt: {
      ey: 'Yhteystiedot', title: 'Ota yhteyttä',
      addrL: 'Osoite', addr: 'Uus tn 10-4, Kiviõli linn,\nLüganuse vald, Ida-Viru maakond,\n43124 Viro',
      phoneL: 'Puhelin', emailL: 'Sähköposti',
      hoursL: 'Aukioloajat', hours: 'Maanantai – Perjantai, 08:00–18:00',
      fmTitle: 'Lähetä kysely',
      nameL: 'Nimi', namePh: 'Nimesi',
      phonePh: '+372 XXXX XXXX', emailPh: 'sinun@email.fi',
      workL: 'Työn tyyppi', descL: 'Kuvaus', descPh: 'Kuvaile projekti...',
      submit: 'Lähetä kysely',
      ok: 'Kysely lähetetty. Otamme yhteyttä 24 tunnin kuluessa.',
      wt: ['Valitse työn tyyppi', 'Huonekalujen asennus', 'Tilauskalusteet', 'Suunnittelu', 'Työt Suomessa', 'Konsultointi', 'Muu']
    },
    ft: {
      desc: 'Huonekalujen asennus Virossa ja Suomessa.',
      col1: 'Palvelut', col2: 'Yhteystiedot',
      copy: '© 2025 Mildanmar OÜ',
      privacy: 'Tietosuojakäytäntö'
    },
    cookie: {
      text: 'Käytämme evästeitä sivustokokemuksen parantamiseen.',
      link: 'Tietosuojakäytäntö',
      accept: 'Hyväksy'
    },
    e: {
      req: 'Kenttä on pakollinen.', email: 'Syötä kelvollinen sähköpostiosoite.',
      phone: 'Syötä kelvollinen puhelinnumero.', rat: 'Valitse arvosana.'
    }
  }

};
