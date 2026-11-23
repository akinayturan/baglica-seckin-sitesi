# Bağlıca Seçkin Sitesi

Türkçe, mobil uyumlu ve bağımlılıksız HTML/CSS/JavaScript web sitesi.

- Site: https://akinayturan.github.io/baglica-seckin-sitesi/
- Kaynak kod: https://github.com/akinayturan/baglica-seckin-sitesi
- Yayın dosyaları: `dist/`
- GitHub Pages: `gh-pages` dalının kökünden yayınlanır.

## Yerel önizleme

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory dist
```

http://127.0.0.1:3000 adresini açın.

## Yayınlama

Kaynak değişikliklerini `main` dalına kaydedip gönderin. Ardından `dist/` içeriğinden yayın dalını üretin:

```sh
git push origin main
git subtree split --prefix=dist -b pages-release
git push origin pages-release:gh-pages
git branch -D pages-release
```

Geçici `pages-release` dalı daha önce kalmışsa önce kontrol edin. GitHub Pages, `gh-pages` güncellendiğinde otomatik yayınlar; derleme veya GitHub Actions iş akışı gerekmez. Varlık yolları göreli olduğundan proje adresi altında çalışır. `.openai/hosting.json` önceki özel Sites yayınının kaydıdır; GitHub Pages tarafından kullanılmaz.

## İçerik

Kullanıcının sağladığı bilgiler: iki blok, geniş arazi, basketbol sahası, çocuk oyun alanı ve her iki blokta kapalı otopark. Site yönetim birimi A Blok’un en alt katındadır. Bahçe ve yürüyüş yolları paylaşılan görüntülerde görülüyor. Adres: Bağlıca, Çambayırı Cd. No:134, 06790 Etimesgut/Ankara.

Yönetim telefonu/e-postası, çalışma saatleri ve daire sayısı sağlanmadığından eklenmedi. Sakin işlemleri ve duyurular için Konsiyon girişine, mobil uygulama için Konsiyon indirme sayfasına bağlantı verilir. Talep için Konsiyon’a ve yönetimin mevcut iletişim formuna yönlendirilir; bu statik sitede form veya hesap bilgisi işlenmez. Galeri, klavye ile fotoğraf geçişi, mobil menü, adres kopyalama ve yol tarifi çalışır.

## Görseller

Stok fotoğraflar kaldırıldı. Kullanıcının proje köküne eklediği görüntüler, kırpılmadan ve kaynak işaretleri korunarak web için sıkıştırıldı:

| Dosya | Kaynak |
| --- | --- |
| `iki-blok.webp` | Screenshot 2026-10-30 at 13.03.11.png |
| `site-girisi.webp` | Screenshot 2026-10-30 at 12.58.15.png |
| `basketbol-sahasi.webp` | Screenshot 2026-10-30 at 13.02.29.png |
| `bahce.webp` | Screenshot 2026-10-30 at 13.01.33.png |
| `blok-ve-otopark-girisi.webp` | 95ad8169d6d64fa58aefe8b48a877931.webp |

Sokak görüntüleri Google kaynaklıdır. Kaynak işaretleri görsellerde ve açıklamalarda korunmuştur. Görüntü tarihlerinden bu yana site görünümü değişmiş olabilir. Kapalı otopark içi fotoğrafı henüz bulunmuyor.

Google Fonts ve Google Haritalar dış servislerdir. Diğer içerik ve görseller yereldir. Arama motoru indekslemesi açık, canonical ve sosyal paylaşım bilgileri GitHub Pages adresine ayarlıdır.

## Sakin işlemleri ve mevzuat (23 Kasım 2026)

Kullanıcının verdiği https://baglicaseckinsitesi.com.tr/ sayfası incelendi. Üye girişi bağlantısı `https://konsiyon.com/panel`, uygulama bağlantısı `https://konsiyon.com/app.html`, iletişim formu `https://baglicaseckinsitesi.com.tr/#contact` olarak doğrulandı. Bunlar dış servislere doğrudan bağlantılardır; hesap içinde oturum açılmadı ve ödeme/talep gönderimi denenmedi. Yeni Bağlıca mahalle bilgisi kaynak sayfayla eşleştirildi.

Kaynak sayfadaki sekiz mevzuat başlığı özgün kısa özetlere dönüştürüldü. Toplantıyı her durumda ocak ayının ilk on beş gününe bağlayan ifade ve yönetici uygunluğuna ilişkin kaynak metindeki desteklenmeyen nitelemeler aktarılmadı. Kanunun genel yönetim hükümleri ile toplu yapılara ilişkin özel hükümler ayrımı belirtildi; bunlar sitenin kendi yönetim planı veya kurul kararı olarak sunulmaz.

- Resmi kanun: https://mevzuat.adalet.gov.tr/mevzuat/103807
- Kaynak sitedeki resmi PDF bağlantısı: https://www.mevzuat.gov.tr/MevzuatMetin/1.5.634.pdf (araştırma sırasında doğrudan PDF erişimi zaman aşımına uğradı; alternatif resmi metin bağlantısı da sunulur).
- Toplu yapı ve vekâlet değişiklikleri: https://cdn.tbmm.gov.tr/KKBSPublicFile/D23/Y2/T1/KanunMetni/97c75496-a5a3-4aef-9a21-db212b3db65a.html

Duyurular sitede otomatik eşitlenmez. Güncel kişisel duyurular ve hesap özellikleri yönetimin Konsiyon tanımlarına bağlıdır.
