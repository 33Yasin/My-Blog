# UI Rehberi – Android Tarzı Blog Sitesi

Bu dosya, blog sitesinin Android estetiğine sahip sade, modern ve kullanıcı dostu bir arayüzle tasarlanması için hazırlanmıştır.

---

## 🎨 Genel Tasarım İlkeleri

- **Material Design** prensiplerine sadık kal.
- Temiz, boşluklu bir arayüz (white space kullanımı).
- Yuvarlatılmış köşeler (`border-radius: 12px` ve üzeri).
- Hafif gölgeler (`box-shadow`) ile katman derinliği oluştur.
- Renkler arasında yüksek kontrast, ama yumuşak geçişler kullan.
- Mobil öncelikli (`mobile-first`) düşün; büyük butonlar, geniş dokunmatik alanlar.

---

## 🌈 Renk Paleti

| Tür | Renk | Kullanım Alanı |
|-----|------|----------------|
| Ana Renk (Primary) | `#2196F3` | Üst menü, butonlar, bağlantılar |
| İkincil Renk (Secondary) | `#03A9F4` | Hover efektleri, ikonlar |
| Arka Plan | `#FAFAFA` | Genel sayfa arka planı |
| Kart Arka Planı | `#FFFFFF` | Yazı kartları, yorum kutuları |
| Metin (Primary) | `#212121` | Başlık ve paragraf metinleri |
| Metin (Secondary) | `#757575` | Alt başlık, tarih, etiketler |
| Vurgu Rengi | `#FFC107` | Bildirimler, küçük görsel öğeler |
| Hata | `#F44336` | Hata mesajları |
| Başarı | `#4CAF50` | Onay mesajları |

---

## ✍️ Tipografi

**Font:** [Roboto](https://fonts.google.com/specimen/Roboto)  
Android'in varsayılan fontu, okunabilirliği yüksek ve modern bir yapı sunar.

| Tür | Font Boyutu | Kalınlık | Renk |
|-----|--------------|----------|------|
| H1 – Blog Başlığı | 32px | 700 | `#212121` |
| H2 – Yazı Başlığı | 24px | 500 | `#212121` |
| H3 – Alt Başlık | 18px | 500 | `#424242` |
| Paragraf | 16px | 400 | `#212121` |
| Meta (Tarih, Yazar) | 14px | 400 | `#757575` |

---

## 🧩 Bileşenler

### 📰 Blog Kartı
- Yuvarlatılmış kenarlar (`12px`)
- Hafif gölge: `box-shadow: 0 2px 5px rgba(0,0,0,0.1)`
- Hover’da:
  - Gölge artar.
  - Başlık rengi `#03A9F4` olur.
- İçerik:
  - Görsel (üstte)
  - Başlık
  - Kısa açıklama
  - “Devamını Oku” butonu

### 🔘 Butonlar
- Yüksekliği: 48px  
- Köşe yuvarlatma: 8px  
- Primary: `background: #2196F3; color: #fff`
- Hover: `background: #1976D2`
- İkonlu butonlar için soluna `Material Icons` eklenir.

### 🔍 Arama Çubuğu
- Arka plan: `#FFFFFF`
- Gölge: `0 2px 4px rgba(0,0,0,0.1)`
- Solunda 🔍 ikon
- Köşeler yuvarlatılmış, iç boşluk geniş.

### 📱 Navigasyon Bar
- Üst sabit bar (`position: sticky; top: 0;`)
- Arka plan: `#2196F3`
- Logo solda, menü sağda.
- Menü öğeleri: beyaz renk, hover’da `#BBDEFB`.

### 💬 Yorum Kutusu
- Açık gri arka plan (`#F5F5F5`)
- Yuvarlak kenarlar
- Placeholder yazısı `#9E9E9E`
- Gönder butonu: `#2196F3`

---

## 🌗 Tema Desteği (Opsiyonel)
Karanlık mod için:

| Eleman | Renk (Dark Mode) |
|--------|------------------|
| Arka Plan | `#121212` |
| Kart | `#1E1E1E` |
| Metin | `#E0E0E0` |
| Buton | `#03A9F4` |

---

## ⚙️ Animasyonlar
- Hover’da `transition: all 0.2s ease;`
- Kartlar sayfaya girerken fade-in efekti.
- Buton tıklamasında Android “ripple effect” benzeri dalga animasyonu.

---

## 🧠 Ekstra Öneriler
- Sayfa geçişleri için hafif animasyonlar (ör. Framer Motion).
- Yükleme animasyonları (ör. dairesel progress bar).
- Responsive grid sistemi:  
  - Mobil: 1 sütun  
  - Tablet: 2 sütun  
  - Masaüstü: 3 sütun

---

**Tasarım Amacı:**  
Kullanıcının Android uygulamasındaymış gibi hissetmesini sağlayan, minimal ama etkileşimli bir blog deneyimi oluşturmak.
