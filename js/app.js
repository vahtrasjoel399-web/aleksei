// ── Состояние ─────────────────────────────────────────────────────────────────
let lang      = localStorage.getItem('lang') || 'et';
let rvRat     = 0;       // выбранная звезда в форме отзыва
let extras    = [];      // отзывы, добавленные пользователем на текущей сессии

// ── Утилиты ───────────────────────────────────────────────────────────────────

/** Получить значение из объекта по пути 'a.b.c' */
function gv(path, obj) {
  return path.split('.').reduce((o, k) => o && o[k], obj);
}

/** Текущая дата в формате DD.MM.YYYY */
function today() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;
}

// ── Переключение языка ─────────────────────────────────────────────────────────

function applyLang(l) {
  lang = l;
  const t = T[l];
  document.documentElement.lang = l;

  // Обычный текст
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = gv(el.dataset.i18n, t);
    if (typeof v === 'string') el.textContent = v;
  });

  // HTML (для заголовков с <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = gv(el.dataset.i18nHtml, t);
    if (typeof v === 'string') el.innerHTML = v;
  });

  // Placeholder-ы
  document.querySelectorAll('[data-ph]').forEach(el => {
    const v = gv(el.dataset.ph, t);
    if (typeof v === 'string') el.placeholder = v;
  });

  // Опции select в форме заявки
  const sel = document.getElementById('c-work');
  if (sel) {
    sel.innerHTML = t.cnt.wt
      .map((w, i) => `<option value="${i === 0 ? '' : w}"${i === 0 ? ' disabled selected' : ''}>${w}</option>`)
      .join('');
  }

  // Активная кнопка языка
  document.querySelectorAll('.lb').forEach(b => b.classList.toggle('on', b.dataset.lang === l));

  renderReviews();
  localStorage.setItem('lang', l);
}

// ── Отзывы ────────────────────────────────────────────────────────────────────

function starsHtml(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star${i < n ? ' on' : ''}">&#9733;</span>`
  ).join('');
}

function renderReviews() {
  const grid = document.getElementById('revgrid');
  const all  = [...T[lang].rev.items, ...extras];

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

// Звёзды в форме отзыва
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

// Отправка формы отзыва
document.getElementById('revform').addEventListener('submit', function (e) {
  e.preventDefault();
  const t  = T[lang];
  let ok   = true;
  const nm = document.getElementById('rv-name');
  const tx = document.getElementById('rv-text');
  const ne = document.getElementById('rv-ne');
  const re = document.getElementById('rv-re');
  const te = document.getElementById('rv-te');

  [ne, re, te].forEach(x => x.classList.remove('show'));
  nm.classList.remove('err');
  tx.classList.remove('err');

  if (!nm.value.trim()) { ne.textContent = t.e.req; ne.classList.add('show'); nm.classList.add('err'); ok = false; }
  if (!rvRat)           { re.textContent = t.e.rat; re.classList.add('show'); ok = false; }
  if (!tx.value.trim()) { te.textContent = t.e.req; te.classList.add('show'); tx.classList.add('err'); ok = false; }
  if (!ok) return;

  extras.push({ name: nm.value.trim(), rating: rvRat, text: tx.value.trim(), date: today() });
  renderReviews();

  const msg = document.getElementById('rv-ok');
  msg.textContent = t.rev.ok;
  msg.classList.add('show');
  this.reset();
  rvRat = 0;
  document.querySelectorAll('#starinp .si').forEach(x => x.classList.remove('on'));
  setTimeout(() => msg.classList.remove('show'), 5000);
});

// ── Форма заявки ──────────────────────────────────────────────────────────────

document.getElementById('cntform').addEventListener('submit', function (e) {
  e.preventDefault();
  const t  = T[lang];
  let ok   = true;
  const nm = document.getElementById('c-name');
  const ph = document.getElementById('c-phone');
  const em = document.getElementById('c-email');
  const ne = document.getElementById('c-ne');
  const pe = document.getElementById('c-pe');
  const ee = document.getElementById('c-ee');

  [ne, pe, ee].forEach(x => x.classList.remove('show'));
  [nm, ph, em].forEach(x => x.classList.remove('err'));

  if (!nm.value.trim())                             { ne.textContent = t.e.req;   ne.classList.add('show'); nm.classList.add('err'); ok = false; }
  if (!/^[\d\s+\-()]{6,}$/.test(ph.value.trim()))  { pe.textContent = t.e.phone; pe.classList.add('show'); ph.classList.add('err'); ok = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){ ee.textContent = t.e.email; ee.classList.add('show'); em.classList.add('err'); ok = false; }
  if (!ok) return;

  const msg = document.getElementById('c-ok');
  msg.textContent = t.cnt.ok;
  msg.classList.add('show');
  this.reset();
  setTimeout(() => msg.classList.remove('show'), 6000);
});

// ── Header при скролле ────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  document.getElementById('hdr').classList.toggle('sc', window.scrollY > 40);

  // Активный пункт навигации
  const sections = ['hero', 'about', 'services', 'projects', 'reviews', 'contact'];
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

hbg.addEventListener('click', () => {
  hbg.classList.toggle('open');
  mm.classList.toggle('open');
});

document.querySelectorAll('.mmenu a').forEach(a =>
  a.addEventListener('click', () => {
    hbg.classList.remove('open');
    mm.classList.remove('open');
  })
);

// ── Анимации при скролле ──────────────────────────────────────────────────────

const animObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      animObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fi, .fl, .fr').forEach(el => animObs.observe(el));

// ── Кнопки языка ──────────────────────────────────────────────────────────────

document.querySelectorAll('.lb').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);

// ── 3D Модель шкафа ───────────────────────────────────────────────────────────

function initModel() {
  const canvas = document.getElementById('model-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* --- Размер --- */
  const wrap = canvas.parentElement;
  const W = wrap.clientWidth;
  const H = Math.min(Math.round(W * 0.62), 520);

  /* --- Рендерер --- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  /* --- Сцена и камера --- */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100);
  camera.position.set(4.5, 1.8, 5.5);
  camera.lookAt(0, 0.3, 0);

  /* --- Освещение --- */
  scene.add(new THREE.AmbientLight(0xfff6e8, 0.55));

  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(5, 9, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0xc4783c, 0.35);
  fill.position.set(-5, 2, -4);
  scene.add(fill);

  /* --- Материалы --- */
  const mDark   = new THREE.MeshPhongMaterial({ color: 0x2e1e10, shininess: 18 });
  const mMid    = new THREE.MeshPhongMaterial({ color: 0x5c3d28, shininess: 28 });
  const mDoor   = new THREE.MeshPhongMaterial({ color: 0x8c6a48, shininess: 45 });
  const mMetal  = new THREE.MeshPhongMaterial({ color: 0xc4783c, shininess: 120 });
  const mFloor  = new THREE.MeshPhongMaterial({ color: 0x0f0f0f, shininess: 5  });

  /* --- Шкаф --- */
  const g = new THREE.Group();

  // Корпус
  g.add(mesh(box(2.5, 3.4, 0.7), mDark, 0, 0, 0));

  // Верхняя и нижняя панели
  g.add(mesh(box(2.62, 0.07, 0.76), mMid,  0,  1.735, 0));
  g.add(mesh(box(2.62, 0.07, 0.76), mMid,  0, -1.735, 0));

  // Левая дверь
  g.add(mesh(box(1.2, 3.26, 0.07), mDoor, -0.63, 0, 0.385));
  // Правая дверь
  g.add(mesh(box(1.2, 3.26, 0.07), mDoor,  0.63, 0, 0.385));

  // Разделитель дверей
  g.add(mesh(box(0.025, 3.26, 0.08), mDark, 0, 0, 0.38));

  // Ручки — левая
  addHandle(g, mMetal, -0.16, 0, 0.43);
  // Ручки — правая
  addHandle(g, mMetal,  0.16, 0, 0.43);

  // Ножки
  for (const x of [-1.15, 1.15]) {
    for (const z of [-0.26, 0.26]) {
      g.add(mesh(box(0.09, 0.2, 0.09), mDark, x, -1.8, z));
    }
  }

  scene.add(g);

  // Пол (тень)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(4, 48), mFloor);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.9;
  floor.receiveShadow = true;
  scene.add(floor);

  /* --- Controls --- */
  const ctrl = new THREE.OrbitControls(camera, renderer.domElement);
  ctrl.enableDamping    = true;
  ctrl.dampingFactor    = 0.06;
  ctrl.minDistance      = 3.5;
  ctrl.maxDistance      = 11;
  ctrl.maxPolarAngle    = Math.PI / 1.85;
  ctrl.autoRotate       = true;
  ctrl.autoRotateSpeed  = 0.9;
  ctrl.addEventListener('start', () => { ctrl.autoRotate = false; });

  /* --- Анимация --- */
  (function animate() {
    requestAnimationFrame(animate);
    ctrl.update();
    renderer.render(scene, camera);
  })();

  /* --- Ресайз --- */
  window.addEventListener('resize', () => {
    const w2 = wrap.clientWidth;
    const h2 = Math.min(Math.round(w2 * 0.62), 520);
    renderer.setSize(w2, h2);
    camera.aspect = w2 / h2;
    camera.updateProjectionMatrix();
  });

  /* --- Helpers --- */
  function box(w, h, d) { return new THREE.BoxGeometry(w, h, d); }

  function mesh(geo, mat, x, y, z) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow    = true;
    m.receiveShadow = true;
    return m;
  }

  function addHandle(group, mat, x, y, z) {
    // Стержень
    const bar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.38, 12),
      mat
    );
    bar.rotation.z = Math.PI / 2;
    bar.position.set(x, y, z);
    group.add(bar);
    // Торцы
    for (const dx of [-0.2, 0.2]) {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 10), mat);
      cap.position.set(x + dx, y, z);
      group.add(cap);
    }
  }
}

// ── Запуск ────────────────────────────────────────────────────────────────────

initStarInput();
applyLang(lang);
initModel();
