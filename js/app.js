// ── Google Analytics 4 ID ────────────────────────────────────────────────────
// Замените на свой ID из analytics.google.com (вида G-XXXXXXXXXX)
const GA_ID = 'G-4REWHN7858';


const LS_PENDING   = 'mildanmar_reviews_pending';
const LS_APPROVED  = 'mildanmar_reviews_approved';
const LS_CONTACTS  = 'mildanmar_contacts';
const LS_COOKIE    = 'mildanmar_cookie';
const LS_LANG      = 'lang';

// ── Состояние ─────────────────────────────────────────────────────────────────
let lang   = localStorage.getItem(LS_LANG) || 'et';
let rvRat  = 0;

// ── Утилиты ───────────────────────────────────────────────────────────────────
function gv(path, obj) {
  return path.split('.').reduce((o, k) => o && o[k], obj);
}
function now() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;
}
function lsGet(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
}
function lsSet(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ── Переключение языка ─────────────────────────────────────────────────────────
function applyLang(l) {
  lang = l;
  const t = T[l];
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = gv(el.dataset.i18n, t);
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = gv(el.dataset.i18nHtml, t);
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll('[data-ph]').forEach(el => {
    const v = gv(el.dataset.ph, t);
    if (typeof v === 'string') el.placeholder = v;
  });

  // Опции select
  const sel = document.getElementById('c-work');
  if (sel) {
    sel.innerHTML = t.cnt.wt
      .map((w, i) => `<option value="${i===0?'':w}"${i===0?' disabled selected':''}>${w}</option>`)
      .join('');
  }

  document.querySelectorAll('.lb').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  renderReviews();
  localStorage.setItem(LS_LANG, l);
}

// ── Отзывы ────────────────────────────────────────────────────────────────────
function starsHtml(n) {
  return Array.from({length:5}, (_,i) =>
    `<span class="star${i<n?' on':''}">&#9733;</span>`
  ).join('');
}

function renderReviews() {
  const grid = document.getElementById('revgrid');
  if (!grid) return;

  // Базовые отзывы из переводов + одобренные из localStorage
  const approved = lsGet(LS_APPROVED);
  const all = [...T[lang].rev.items, ...approved];

  grid.innerHTML = all.map(r => `
    <div class="rcard fi in">
      <div class="rhead">
        <div class="rauthor">
          <div class="rav">${r.name.charAt(0)}</div>
          <div>
            <div class="rname">${r.name}</div>
            <div class="rdate">${r.date}</div>
          </div>
        </div>
        <div class="stars">${starsHtml(r.rating)}</div>
      </div>
      <p class="rtext">${r.text}</p>
    </div>
  `).join('');
}

// Звёзды
function initStarInput() {
  const sis = document.querySelectorAll('#starinp .si');
  sis.forEach(s => {
    s.addEventListener('mouseenter', () => {
      const v = +s.dataset.v;
      sis.forEach(x => x.classList.toggle('on', +x.dataset.v <= v));
    });
    s.addEventListener('mouseleave', () => {
      sis.forEach(x => x.classList.toggle('on', +x.dataset.v <= rvRat));
    });
    s.addEventListener('click', () => {
      rvRat = +s.dataset.v;
      sis.forEach(x => x.classList.toggle('on', +x.dataset.v <= rvRat));
    });
  });
}

// Отправка отзыва → в pending (на модерацию)
document.getElementById('revform').addEventListener('submit', function(e) {
  e.preventDefault();
  const t = T[lang]; let ok = true;
  const nm = document.getElementById('rv-name');
  const tx = document.getElementById('rv-text');
  const ne = document.getElementById('rv-ne');
  const re = document.getElementById('rv-re');
  const te = document.getElementById('rv-te');

  [ne,re,te].forEach(x => x.classList.remove('show'));
  nm.classList.remove('err'); tx.classList.remove('err');

  if (!nm.value.trim()) { ne.textContent=t.e.req; ne.classList.add('show'); nm.classList.add('err'); ok=false; }
  if (!rvRat)           { re.textContent=t.e.rat; re.classList.add('show'); ok=false; }
  if (!tx.value.trim()) { te.textContent=t.e.req; te.classList.add('show'); tx.classList.add('err'); ok=false; }
  if (!ok) return;

  // Сохранить как pending
  const pending = lsGet(LS_PENDING);
  pending.push({
    id: Date.now(),
    name: nm.value.trim(),
    rating: rvRat,
    text: tx.value.trim(),
    date: now(),
    lang
  });
  lsSet(LS_PENDING, pending);

  const msg = document.getElementById('rv-ok');
  msg.textContent = t.rev.ok;
  msg.classList.add('show');
  this.reset();
  rvRat = 0;
  document.querySelectorAll('#starinp .si').forEach(x => x.classList.remove('on'));
  setTimeout(() => msg.classList.remove('show'), 6000);
});

// ── Форма заявки → сохранить в localStorage ────────────────────────────────────
document.getElementById('cntform').addEventListener('submit', function(e) {
  e.preventDefault();
  const t = T[lang]; let ok = true;
  const nm = document.getElementById('c-name');
  const ph = document.getElementById('c-phone');
  const em = document.getElementById('c-email');
  const ne = document.getElementById('c-ne');
  const pe = document.getElementById('c-pe');
  const ee = document.getElementById('c-ee');

  [ne,pe,ee].forEach(x => x.classList.remove('show'));
  [nm,ph,em].forEach(x => x.classList.remove('err'));

  if (!nm.value.trim())                            { ne.textContent=t.e.req;   ne.classList.add('show'); nm.classList.add('err'); ok=false; }
  if (!/^[\d\s+\-()]{6,}$/.test(ph.value.trim())) { pe.textContent=t.e.phone; pe.classList.add('show'); ph.classList.add('err'); ok=false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){ ee.textContent=t.e.email; ee.classList.add('show'); em.classList.add('err'); ok=false; }
  if (!ok) return;

  // Сохранить заявку
  const d = new Date();
  const timestamp = `${now()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  const contacts = lsGet(LS_CONTACTS);
  contacts.push({
    id: Date.now(),
    name:      nm.value.trim(),
    phone:     ph.value.trim(),
    email:     em.value.trim(),
    workType:  document.getElementById('c-work').value,
    desc:      document.getElementById('c-desc').value.trim(),
    date:      timestamp,
    read:      false
  });
  lsSet(LS_CONTACTS, contacts);

  const msg = document.getElementById('c-ok');
  msg.textContent = t.cnt.ok;
  msg.classList.add('show');
  this.reset();
  setTimeout(() => msg.classList.remove('show'), 6000);
});

// ── Google Analytics — загружается только после согласия ─────────────────────
function loadGA() {
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;
  if (document.getElementById('ga-script')) return; // уже загружен
  const s = document.createElement('script');
  s.id  = 'ga-script';
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

// ── Cookie banner ─────────────────────────────────────────────────────────────
function initCookie() {
  // Если ранее согласился — сразу загружаем GA
  if (localStorage.getItem(LS_COOKIE)) { loadGA(); return; }

  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('show'), 800);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem(LS_COOKIE, '1');
    banner.classList.remove('show');
    loadGA(); // загружаем GA только после согласия
  });
}

// ── Header при скролле ────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('hdr').classList.toggle('sc', window.scrollY > 40);
  const sections = ['hero','about','services','projects','reviews','contact'];
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) current = id;
  });
  document.querySelectorAll('#mainnav a').forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + current)
  );
}, { passive: true });

// ── Мобильное меню ────────────────────────────────────────────────────────────
const hbg = document.getElementById('hbg');
const mm  = document.getElementById('mmenu');
hbg.addEventListener('click', () => { hbg.classList.toggle('open'); mm.classList.toggle('open'); });
document.querySelectorAll('.mmenu a').forEach(a =>
  a.addEventListener('click', () => { hbg.classList.remove('open'); mm.classList.remove('open'); })
);

// ── Анимации при скролле ──────────────────────────────────────────────────────
const animObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); animObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fi, .fl, .fr').forEach(el => animObs.observe(el));

// ── Кнопки языка ──────────────────────────────────────────────────────────────
document.querySelectorAll('.lb').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);

// ── Секретный вход в админку ──────────────────────────────────────────────────
// Клавиатура: напечатать "adm"
// Телефон:    нажать на логотип 5 раз быстро
(function() {
  // Клавиатура
  const secret = 'adm';
  let buf = '';
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    buf += e.key.toLowerCase();
    if (buf.length > secret.length) buf = buf.slice(-secret.length);
    if (buf === secret) window.location.href = 'admin.html';
  });

  // Логотип × 5 за 2 секунды
  let taps = 0, timer = null;
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      taps++;
      clearTimeout(timer);
      if (taps >= 5) { window.location.href = 'admin.html'; taps = 0; return; }
      timer = setTimeout(() => { taps = 0; }, 2000);
    });
  }
})();

// ── Запуск ────────────────────────────────────────────────────────────────────
initStarInput();
applyLang(lang);
initCookie();
initModel();
