// ── Все тексты сайта на 4 языках ──────────────────────────────────────────────
// Структура: T[lang].секция.ключ
// Языки: et (эстонский, по умолчанию), ru, en, fi

const T = {

  /* ── ЭСТОНСКИЙ ──────────────────────────────────────────────────────── */
  et: {
    nav: {
      home: 'Avaleht', about: 'Meist', services: 'Teenused',
      projects: 'Projektid', reviews: 'Arvustused', contact: 'Kontakt'
    },
    hero: {
      titleHtml: 'Tellimusmööbel<br><em>Eestis ja Soomes</em>',
      sub:  'Valmistame ja paigaldame kvaliteetset mööblit kodudesse, kontoridesse ja äriruumidesse alates 2023. aastast.',
      cta:  'Võta ühendust',
      cta2: 'Teenused',
      s1: 'Aastat kogemust', s2: 'Valmis projekti', s3: 'Riiki'
    },
    about: {
      ey: 'Meist',
      title: 'Usaldusväärne mööblipartner',
      p1: 'Mildanmar OÜ valmistab ja paigaldab tellimusmööblit Eestis ja Soomes. Tegeleme köögimööbli, kappide, garderoobide, kontori- ja ärimööbli ning siseviimistlusega.',
      p2: 'Töötame peamiselt Ida-Virumaal, kuid võtame tellimusi vastu üle kogu Eesti ning Soomes. Iga projekt on unikaalne ja valmistatakse vastavalt kliendi soovidele.',
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
      s1t: 'Korpusmööbel',   s1d: 'Valmistame ja paigaldame korpusmööblit — riiulid, kapid, sahtlid. Täpne mõõtmine, kvaliteetsed materjalid.',
      s2t: 'Köögimööbel',    s2d: 'Köögi planeerimine ja mööbli valmistamine mõõtu. Töötasapinnad, ülemised ja alumised kapid.',
      s3t: 'Tööd Soomes',    s3d: 'Teeme mööblitöid ka Soomes. Sama kvaliteet, samad hinnad, sama täpsus.',
      s4t: 'Konsultatsioon', s4d: 'Aitame planeerida ruumi, valida materjale ja koostada hinnapakkumise.'
    },
    prj: {
      ey: 'Projektid', title: 'Tehtud tööd',
      c1: 'Köök',     p1: 'Köögimööbli paigaldus',
      c2: 'Elutuba',  p2: 'Sektsioonmööbel elutuppa',
      c3: 'Garderoop',p3: 'Riidekapp magamistuppa',
      c4: 'Kontor',   p4: 'Kontori mööblilahendus',
      c5: 'Soome',    p5: 'Projekt Soomes',
      c6: 'Siseruum', p6: 'Sisekujundus ja mööbel'
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
        { name: 'Tiit Mäger',    rating: 5, text: 'Köök valmis täpselt nagu soovisin. Täpne töö, ilusad viimistlused ja paigaldus läks kiirelt. Kindlasti soovitan.',                         date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Заказала корпусную мебель для спальни. Всё сделано аккуратно, в срок. Очень довольна результатом.',                                       date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'Tilasimme keittiökalusteet Suomeen. Erittäin tyytyväinen — laatu erinomainen ja asennus sujui hyvin.',                                    date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Hea teenindus, kiire reageerimine ja korralik tulemus. Soovitan.',                                                                          date: '10.05.2025' }
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
      wt: ['Vali töö liik', 'Köögimööbel', 'Korpusmööbel', 'Garderoop/Riidekapp', 'Kontori mööbel', 'Tööd Soomes', 'Muu']
    },
    ft: {
      desc: 'Tellimusmööbel Eestis ja Soomes. Reg. kood 2362585.',
      col1: 'Teenused', col2: 'Kontakt',
      copy: '© 2025 Mildanmar OÜ', reg: 'Registrikood: 2362585'
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
      titleHtml: 'Мебель на заказ<br><em>в Эстонии и Финляндии</em>',
      sub:  'Изготавливаем и устанавливаем качественную мебель для домов, офисов и коммерческих помещений с 2023 года.',
      cta:  'Связаться',
      cta2: 'Услуги',
      s1: 'Года опыта', s2: 'Готовых проектов', s3: 'Страны'
    },
    about: {
      ey: 'О нас',
      title: 'Надёжный мебельный партнёр',
      p1: 'Mildanmar OÜ изготавливает и устанавливает мебель на заказ в Эстонии и Финляндии. Занимаемся кухонной мебелью, шкафами, гардеробами, офисной мебелью и отделкой интерьеров.',
      p2: 'Работаем преимущественно в уезде Ида-Вирумаа, принимаем заказы по всей Эстонии и Финляндии. Каждый проект уникален и выполняется по пожеланиям клиента.',
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
      s1t: 'Корпусная мебель',  s1d: 'Изготавливаем и устанавливаем корпусную мебель — стеллажи, шкафы, комоды. Точные замеры, качественные материалы.',
      s2t: 'Кухонная мебель',   s2d: 'Проектирование кухни и изготовление мебели на заказ. Столешницы, верхние и нижние шкафы.',
      s3t: 'Работы в Финляндии',s3d: 'Выполняем мебельные работы в Финляндии. То же качество, те же цены, та же точность.',
      s4t: 'Консультация',      s4d: 'Помогаем планировать пространство, выбирать материалы и составлять смету.'
    },
    prj: {
      ey: 'Проекты', title: 'Выполненные работы',
      c1: 'Кухня',     p1: 'Установка кухонной мебели',
      c2: 'Гостиная',  p2: 'Стенка в гостиную',
      c3: 'Гардероб',  p3: 'Шкаф-купе в спальню',
      c4: 'Офис',      p4: 'Офисная мебель',
      c5: 'Финляндия', p5: 'Проект в Финляндии',
      c6: 'Интерьер',  p6: 'Дизайн и мебель'
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
        { name: 'Tiit Mäger',       rating: 5, text: 'Кухня получилась именно такой, как я хотел. Точная работа, аккуратная отделка, монтаж прошёл быстро. Рекомендую.',        date: '15.03.2025' },
        { name: 'Ольга Симонова',   rating: 5, text: 'Заказала корпусную мебель для спальни. Всё сделано аккуратно, в срок. Очень довольна результатом.',                      date: '02.04.2025' },
        { name: 'Jari Korhonen',    rating: 5, text: 'Заказали кухонный гарнитур в Финляндию. Очень доволен — качество отличное, монтаж прошёл хорошо.',                       date: '20.04.2025' },
        { name: 'Маргус Тамм',      rating: 4, text: 'Хорошее обслуживание, быстрый ответ и качественный результат. Рекомендую.',                                              date: '10.05.2025' }
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
      wt: ['Выберите вид работы', 'Кухонная мебель', 'Корпусная мебель', 'Гардероб/Шкаф', 'Офисная мебель', 'Работы в Финляндии', 'Другое']
    },
    ft: {
      desc: 'Мебель на заказ в Эстонии и Финляндии. Рег. номер 2362585.',
      col1: 'Услуги', col2: 'Контакты',
      copy: '© 2025 Mildanmar OÜ', reg: 'Регистрационный номер: 2362585'
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
      titleHtml: 'Custom Furniture<br><em>in Estonia & Finland</em>',
      sub:  'We manufacture and install quality furniture for homes, offices and commercial spaces. Operating since 2023.',
      cta:  'Get in Touch',
      cta2: 'Services',
      s1: 'Years of Experience', s2: 'Projects Done', s3: 'Countries'
    },
    about: {
      ey: 'About Us',
      title: 'A Reliable Furniture Partner',
      p1: 'Mildanmar OÜ manufactures and installs custom furniture in Estonia and Finland. We handle kitchen furniture, wardrobes, shelving units, office furniture and interior finishing.',
      p2: "We are based in Ida-Virumaa and accept orders throughout Estonia and Finland. Every project is individual and made to the client's exact requirements.",
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
      s1t: 'Cabinet Furniture', s1d: 'We manufacture and install cabinet furniture — shelving, wardrobes, drawers. Precise measurements, quality materials.',
      s2t: 'Kitchen Furniture', s2d: 'Kitchen planning and furniture made to measure. Countertops, upper and lower cabinets.',
      s3t: 'Works in Finland',  s3d: 'We carry out furniture projects in Finland to exactly the same quality standards.',
      s4t: 'Consultation',      s4d: 'We help plan the space, choose materials and prepare a cost estimate.'
    },
    prj: {
      ey: 'Projects', title: 'Completed Work',
      c1: 'Kitchen',    p1: 'Kitchen Furniture Installation',
      c2: 'Living Room',p2: 'Living Room Wall Unit',
      c3: 'Wardrobe',   p3: 'Built-in Wardrobe',
      c4: 'Office',     p4: 'Office Furniture',
      c5: 'Finland',    p5: 'Project in Finland',
      c6: 'Interior',   p6: 'Interior Design & Furniture'
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
        { name: 'Tiit Mäger',    rating: 5, text: 'The kitchen turned out exactly as I wanted. Precise work, clean finish and the installation was quick. Highly recommend.',                    date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Ordered bedroom cabinet furniture. Everything done neatly, on time. Very pleased with the result.',                                          date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'We ordered kitchen furniture for our home in Finland. Very satisfied — excellent quality and smooth installation.',                          date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Good service, quick response and a solid result. Recommended.',                                                                             date: '10.05.2025' }
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
      wt: ['Select type of work', 'Kitchen Furniture', 'Cabinet Furniture', 'Wardrobe', 'Office Furniture', 'Works in Finland', 'Other']
    },
    ft: {
      desc: 'Custom furniture in Estonia and Finland. Reg. no. 2362585.',
      col1: 'Services', col2: 'Contact',
      copy: '© 2025 Mildanmar OÜ', reg: 'Registration number: 2362585'
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
      titleHtml: 'Tilauskalusteet<br><em>Virossa ja Suomessa</em>',
      sub:  'Valmistamme ja asennamme laadukkaita kalusteita koteihin, toimistoihin ja liiketiloihin vuodesta 2023 lähtien.',
      cta:  'Ota yhteyttä',
      cta2: 'Palvelut',
      s1: 'Vuotta kokemusta', s2: 'Valmistunutta projektia', s3: 'Maata'
    },
    about: {
      ey: 'Meistä',
      title: 'Luotettava kalustekumppani',
      p1: 'Mildanmar OÜ valmistaa ja asentaa tilauskalusteita Virossa ja Suomessa. Teemme keittiökalusteita, kaappeja, vaatehuoneita, toimistokalusteita ja sisustuksia.',
      p2: 'Toimimme pääasiassa Ida-Virumaan maakunnassa ja otamme tilauksia koko Virosta ja Suomesta. Jokainen projekti on ainutlaatuinen ja tehdään asiakkaan toiveiden mukaan.',
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
      s1t: 'Kaapistot',        s1d: 'Valmistamme ja asennamme kaapistoja — hyllyt, kaapit, laatikostot. Tarkat mitat, laadukkaat materiaalit.',
      s2t: 'Keittiökalusteet', s2d: 'Keittiön suunnittelu ja mittatilauskalusteet. Työtasot, ylä- ja alakaapit.',
      s3t: 'Työt Suomessa',    s3d: 'Teemme kalustetyöt myös Suomessa. Sama laatu, samat hinnat, sama tarkkuus.',
      s4t: 'Konsultointi',     s4d: 'Autamme suunnittelemaan tilan, valitsemaan materiaalit ja tekemään kustannusarvion.'
    },
    prj: {
      ey: 'Projektit', title: 'Valmiit työt',
      c1: 'Keittiö',    p1: 'Keittiökalusteasennus',
      c2: 'Olohuone',   p2: 'Olohuoneen seinäkalusto',
      c3: 'Vaatehuone', p3: 'Liukuovikaappi makuuhuoneeseen',
      c4: 'Toimisto',   p4: 'Toimistokalusteet',
      c5: 'Suomi',      p5: 'Projekti Suomessa',
      c6: 'Sisustus',   p6: 'Sisustussuunnittelu ja kalusteet'
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
        { name: 'Tiit Mäger',    rating: 5, text: 'Keittiö tuli juuri sellaiseksi kuin halusin. Tarkka työ, siisti viimeistely ja asennus sujui nopeasti. Suosittelen.',                date: '15.03.2025' },
        { name: 'Olga Simonova', rating: 5, text: 'Tilasin makuuhuoneen kaapiston. Kaikki tehty siististi, ajallaan. Erittäin tyytyväinen tulokseen.',                                  date: '02.04.2025' },
        { name: 'Jari Korhonen', rating: 5, text: 'Tilasimme keittiökalusteet kotiin Suomeen. Erittäin tyytyväinen — laatu erinomainen ja asennus sujui hyvin.',                        date: '20.04.2025' },
        { name: 'Margus Tamm',   rating: 4, text: 'Hyvä palvelu, nopea vastaus ja laadukas tulos. Suosittelen.',                                                                        date: '10.05.2025' }
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
      wt: ['Valitse työn tyyppi', 'Keittiökalusteet', 'Kaapistot', 'Vaatehuone', 'Toimistokalusteet', 'Työt Suomessa', 'Muu']
    },
    ft: {
      desc: 'Tilauskalusteet Virossa ja Suomessa. Rek. nro 2362585.',
      col1: 'Palvelut', col2: 'Yhteystiedot',
      copy: '© 2025 Mildanmar OÜ', reg: 'Rekisterinumero: 2362585'
    },
    e: {
      req: 'Kenttä on pakollinen.', email: 'Syötä kelvollinen sähköpostiosoite.',
      phone: 'Syötä kelvollinen puhelinnumero.', rat: 'Valitse arvosana.'
    }
  }

};
