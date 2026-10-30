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

Kullanıcının sağladığı bilgiler: iki blok, geniş arazi, basketbol sahası ve her iki blokta kapalı otopark. Bahçe ve yürüyüş yolları paylaşılan görüntülerde görülüyor. Adres: Bağlıca, Çambayırı Cd. No:134, 06790 Etimesgut/Ankara.

Yönetim telefonu/e-postası, çalışma saatleri, daire sayısı ve gerçek duyurular sağlanmadığından eklenmedi. Yönetim paneli, sakin girişi ve form gönderimi yoktur. Galeri, klavye ile fotoğraf geçişi, mobil menü, adres kopyalama ve yol tarifi çalışır.

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
