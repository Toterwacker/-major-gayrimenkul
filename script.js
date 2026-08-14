/* ============================================================
   MAVİ EŞİK GAYRİMENKUL — küçük sayfa davranışları
   ============================================================ */

/* 1) Telefonda menüyü açıp kapatma */
const menuDugmesi = document.getElementById('menuDugmesi');
const menu = document.getElementById('menu');

menuDugmesi.addEventListener('click', () => {
  const acik = menu.classList.toggle('acik');
  menuDugmesi.setAttribute('aria-expanded', String(acik));
  menuDugmesi.setAttribute('aria-label', acik ? 'Menüyü kapat' : 'Menüyü aç');
});

/* Menüden bir bağlantıya tıklanınca menü kapansın */
menu.querySelectorAll('a').forEach((baglanti) => {
  baglanti.addEventListener('click', () => {
    menu.classList.remove('acik');
    menuDugmesi.setAttribute('aria-expanded', 'false');
    menuDugmesi.setAttribute('aria-label', 'Menüyü aç');
  });
});

/* 2) Sayfa aşağı kaydırılınca üst menüye ince bir çizgi gelsin */
const ustbar = document.getElementById('ustbar');
const cizgiyiGuncelle = () => {
  ustbar.classList.toggle('kaydirildi', window.scrollY > 8);
};
cizgiyiGuncelle();
window.addEventListener('scroll', cizgiyiGuncelle, { passive: true });

/* 3) Bölümler ekrana girdikçe yumuşakça belirsin */
const belirenler = document.querySelectorAll('.belir');

if ('IntersectionObserver' in window) {
  const gozlemci = new IntersectionObserver((girisler) => {
    girisler.forEach((giris) => {
      if (giris.isIntersecting) {
        giris.target.classList.add('gorundu');
        gozlemci.unobserve(giris.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  belirenler.forEach((oge) => gozlemci.observe(oge));
} else {
  belirenler.forEach((oge) => oge.classList.add('gorundu'));
}

/* 4) Alt bilgideki yıl her yıl kendi kendine güncellensin */
document.getElementById('yil').textContent = new Date().getFullYear();
