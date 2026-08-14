# MAJÖR Gayrimenkul — Siteyi nasıl güncellerim?

Bu klasörde 4 dosya var. Korkmanıza gerek yok, hepsi düz metin.

| Dosya | Ne işe yarar? |
|---|---|
| `index.html` | **Sitedeki bütün yazılar burada.** Metin değiştirmek isterseniz bu dosyayı açın. |
| `styles.css` | Renkler ve görünüm. |
| `script.js` | Menünün açılıp kapanması gibi küçük hareketler. |
| `favicon.svg` | Tarayıcı sekmesinde görünen küçük simge. |

Dosyaları **Not Defteri** ile bile açıp değiştirebilirsiniz. (Windows'ta dosyaya sağ tık → Birlikte aç → Not Defteri)

---

## 1. Telefon, WhatsApp, e-posta ve adresi doldurma

`index.html` dosyasını açın ve **DOLDURUN** kelimesini arayın (Ctrl + F).
Toplam 5 yerde geçiyor. Her birini şu şekilde değiştirin:

### Üstteki "Bizi arayın" düğmesi
```
href="tel:+90DOLDURUN"
```
şeklinde yazan yeri numaranızla değiştirin. Numarayı **boşluksuz** ve **+90 ile** yazın:
```
href="tel:+903261234567"
```

### İletişim bölümü — Telefon
```
<a class="baglanti-satiri" href="tel:+90DOLDURUN">
  <span class="etiket">Telefon</span>
  <strong>Telefon numarası eklenecek</strong>
</a>
```
İki yeri değiştirin:
- `href="tel:+903261234567"` → tıklanınca arama yapar (boşluksuz)
- `<strong>0326 123 45 67</strong>` → ekranda görünen yazı (istediğiniz gibi yazabilirsiniz)

### İletişim bölümü — WhatsApp
```
href="https://wa.me/90DOLDURUN"
```
→ `href="https://wa.me/905321234567"`
Buradaki numara **başındaki 0 olmadan, 90 ile** yazılır. Yani cep numaranız
0532 123 45 67 ise: `905321234567`

Görünen yazıyı da değiştirin: `<strong>0532 123 45 67</strong>`

### İletişim bölümü — E-posta
```
href="mailto:DOLDURUN@example.com"
```
→ `href="mailto:info@majorgayrimenkul.com"`
Görünen yazıyı da aynı adresle değiştirin.

### İletişim bölümü — Ofis adresi
```
<strong>İskenderun / Hatay — açık adres eklenecek</strong>
```
→ `<strong>Çay Mah. Atatürk Bul. No: 12, İskenderun / Hatay</strong>`

### Alt bilgideki sosyal medya
Sayfanın en altında Instagram ve WhatsApp bağlantıları var.
Instagram adresinizi `href="https://instagram.com/kullaniciadiniz"` şeklinde yazın.

---

## 2. Yazıları değiştirme

`index.html` içinde gördüğünüz Türkçe cümleleri doğrudan değiştirebilirsiniz.
Sadece şu iki şeye dikkat edin:

- `<` ve `>` işaretleri arasındaki kodlara **dokunmayın**. Sadece aralarındaki
  düz yazıyı değiştirin.
  Örnek: `<h3>Konut satışı</h3>` → `<h3>Arsa satışı</h3>` ✅
- Dosyayı kaydederken **kodlamayı UTF-8** seçin, yoksa Türkçe harfler bozulur.
  (Not Defteri'nde: Dosya → Farklı kaydet → alttaki "Kodlama" kutusundan UTF-8)

Her bölümün başında büyük harfli Türkçe açıklamalar var, hangi bölümde
olduğunuzu oradan anlarsınız.

---

## 3. Renkleri değiştirme

`styles.css` dosyasının en üstünde şöyle bir bölüm var:

```css
--gece:   #0E2439;  /* en koyu lacivert */
--deniz:  #23517A;  /* ana mavi */
--sis:    #A9C4D8;  /* açık mavi */
--kagit:  #FBF8F3;  /* sıcak kırık beyaz */
--kum:    #F1E9DC;  /* sıcak kum */
--pirinc: #B5813F;  /* pirinç sarısı vurgu */
```

`#` ile başlayan kodları değiştirirseniz sitenin rengi baştan sona değişir.
Renk kodu bulmak için: <https://htmlcolorcodes.com>

---

## 4. En kolay yol: tarayıcıdan düzenleme (program kurmadan)

Bilgisayarınızdaki dosyalarla hiç uğraşmanıza gerek yok. Siteyi doğrudan
tarayıcıdan düzenleyebilirsiniz. Kaydettiğiniz an site kendini günceller.

### Adım adım

**1.** Şu adrese gidin:
<https://github.com/Toterwacker/-major-gayrimenkul>

**2.** Dosya listesinde **`index.html`** yazısına tıklayın.

**3.** Sayfanın sağ üstünde küçük bir **kurşun kalem ✏️ simgesi** var. Ona tıklayın.
(Üzerine gelince "Edit this file" yazar.)

**4.** Artık yazıları değiştirebilirsiniz. Aradığınız yeri bulmak için
**Ctrl + F** ile arama yapın.

**5.** İşiniz bitince sağ üstteki yeşil **"Commit changes..."** düğmesine basın.

**6.** Küçük bir pencere açılır. Üstteki kutuya ne değiştirdiğinizi kısaca
yazın (örn. `telefon numarası eklendi`). Bu sadece sizin hatırlamanız için.

**7.** Yeşil **"Commit changes"** düğmesine basın.

**8.** Bitti. **Yaklaşık 1 dakika bekleyin**, sonra sitenizi açıp yenileyin
(Ctrl + F5). Değişiklik orada olacak.

### Önemli uyarılar

- `<` ve `>` işaretleri arasındaki kodlara **dokunmayın**. Sadece aralarındaki
  düz yazıyı değiştirin. Örnek:
  `<h3>Konut satışı</h3>` → `<h3>Arsa satışı</h3>` ✅
- Yanlış bir şey yaparsanız **hiçbir şey kaybolmaz**. GitHub her değişikliği
  saklar; deponun üstündeki **"Commits"** bölümünden eski hâline dönebilirsiniz.
- Site 1 dakika içinde güncellenmezse: Vercel'de
  <https://vercel.com/ali-2a69/major-gayrimenkul/deployments> adresinden
  en üstteki satırın **"Ready"** olmasını bekleyin.

---

## 5. Bir bölümü tamamen silme veya yeni bölüm ekleme

**Silmek için:** `index.html` içinde şuna benzer büyük harfli açıklama
satırlarını arayın:

```
<!-- ============================================================
     HİZMETLER
     ============================================================ -->
```

Bu açıklamadan başlayıp, o bölümün kapanışı olan `</section>` satırına kadar
olan **her şeyi** silin. Bir de üst menüden ilgili bağlantıyı silin:
`<a href="#hizmetler">Hizmetler</a>`

**Hizmet kartı eklemek için:** `<article class="kart belir">` ile başlayıp
`</article>` ile biten bloklardan birini komple kopyalayıp hemen altına
yapıştırın, sonra başlığını ve metnini değiştirin.

Emin olamadığınız bir şey olursa bana sorun — birlikte yaparız.
