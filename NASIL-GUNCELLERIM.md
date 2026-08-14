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

## 4. Değişikliği yayına alma

Dosyayı kaydettikten sonra değişiklik **kendiliğinden yayına girmez**.
GitHub'a yükledikten sonra Vercel otomatik olarak siteyi günceller.
Bunun nasıl yapıldığını sohbette adım adım anlattım.
