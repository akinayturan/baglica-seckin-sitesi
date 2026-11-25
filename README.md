# Bağlıca Seçkin Sitesi

Türkçe, mobil uyumlu ve bağımlılıksız HTML/CSS/JavaScript web sitesi.

- Site: https://baglicaseckinsitesi.pages.dev/
- Kaynak kod: https://github.com/akinayturan/baglica-seckin-sitesi
- Yayın dosyaları: `dist/`
- Cloudflare Pages projesi: `baglicaseckinsitesi` (Webhuus hesabı).
- Yayın yöntemi: Direct Upload; yalnızca `dist/` içeriği yüklenir.
- Eski GitHub Pages adresi geçiş sonrası yeni siteye yönlendirilir.

## Yerel önizleme

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory dist
```

http://127.0.0.1:3000 adresini açın.

## Yayınlama

Cloudflare panelinde **Workers & Pages → baglicaseckinsitesi → Create a new deployment → Production** yoluyla `dist/` içeriğini veya bu içerikten hazırlanmış ZIP dosyasını yükleyin. ZIP içinde `index.html` doğrudan kökte olmalıdır.

Wrangler oturumu açılmış bir bilgisayardan alternatif yayın komutu:

```sh
bunx wrangler@4.168.0 pages deploy dist --project-name baglicaseckinsitesi --branch main
```

`wrangler.jsonc` hesap ve proje ayarlarını içerir; kimlik bilgisi içermez. Doğrudan yükleme projesidir; GitHub’a kaynak kodu göndermek Cloudflare’da otomatik yayın başlatmaz.

Kaynak kodu GitHub’daki `main` dalında tutulur. `gh-pages` dalı eski adres için yönlendirme görevi görür. Önce Cloudflare yayını doğrulanır, ardından eski adres yeni siteye yönlendirilir. `.openai/hosting.json` ilk özel Sites yayınının tarihsel kaydıdır; Cloudflare Pages tarafından kullanılmaz.

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

Google Fonts ve Google Haritalar dış servislerdir. Diğer içerik ve görseller yereldir. Arama motoru indekslemesi açık, canonical, site haritası ve sosyal paylaşım bilgileri Cloudflare Pages adresine ayarlıdır.

## Sakin işlemleri ve mevzuat (23 Kasım 2026)

Kullanıcının verdiği https://baglicaseckinsitesi.com.tr/ sayfası incelendi. Üye girişi bağlantısı `https://konsiyon.com/panel`, uygulama bağlantısı `https://konsiyon.com/app.html`, iletişim formu `https://baglicaseckinsitesi.com.tr/#contact` olarak doğrulandı. Bunlar dış servislere doğrudan bağlantılardır; hesap içinde oturum açılmadı ve ödeme/talep gönderimi denenmedi. Yeni Bağlıca mahalle bilgisi kaynak sayfayla eşleştirildi.

Kaynak sayfadaki sekiz mevzuat başlığı özgün kısa özetlere dönüştürüldü. Toplantıyı her durumda ocak ayının ilk on beş gününe bağlayan ifade ve yönetici uygunluğuna ilişkin kaynak metindeki desteklenmeyen nitelemeler aktarılmadı. Kanunun genel yönetim hükümleri ile toplu yapılara ilişkin özel hükümler ayrımı belirtildi; bunlar sitenin kendi yönetim planı veya kurul kararı olarak sunulmaz.

- Resmi kanun: https://mevzuat.adalet.gov.tr/mevzuat/103807
- Kaynak sitedeki resmi PDF bağlantısı: https://www.mevzuat.gov.tr/MevzuatMetin/1.5.634.pdf (araştırma sırasında doğrudan PDF erişimi zaman aşımına uğradı; alternatif resmi metin bağlantısı da sunulur).
- Toplu yapı ve vekâlet değişiklikleri: https://cdn.tbmm.gov.tr/KKBSPublicFile/D23/Y2/T1/KanunMetni/97c75496-a5a3-4aef-9a21-db212b3db65a.html

Duyurular sitede otomatik eşitlenmez. Güncel kişisel duyurular ve hesap özellikleri yönetimin Konsiyon tanımlarına bağlıdır.

## Yönetim galerisinden fotoğraflar

Kaynak: https://baglicaseckinsitesi.com.tr/#gallery. Kullanıcının isteğiyle dört farklı fotoğraf indirildi, WebP formatında sıkıştırıldı ve galerinin başına eklendi. Önceki dört görüntü korunur; toplam sekiz fotoğraf aynı büyütme penceresinde gezilebilir. Dikey fotoğraflar kartlarda tam oranıyla gösterilir.

| Yerel dosya | Kaynak dosya |
| --- | --- |
| `yonetim-bahce.webp` | `uploads/galeri/77595949172974_galeri.jpg` |
| `yonetim-dis-cephe.webp` | `uploads/galeri/720875978469848_galeri.jpg` |
| `yonetim-blok-onu.webp` | `uploads/galeri/174672365188599_galeri.jpg` |
| `yonetim-site-tabelasi.webp` | `uploads/galeri/857548952102661_galeri.jpg` |

## Cloudflare geçişi — 25 Kasım 2026

`baglicaseckinsitesi.pages.dev` Webhuus hesabında Direct Upload projesi olarak yayınlandı. Sayfa, stil, JavaScript, örnek görseller, robots.txt ve sitemap.xml için HTTP 200 ve yerel dosya eşleşmesi doğrulandı. `legacy-redirect/index.html` eski GitHub Pages adresinde kullanılan yönlendirme sayfasıdır; JavaScript etkinse bağlantının sorgu ve bölüm bilgisini korur. Kaynak kodu GitHub’da tutulmaya devam eder.
