# Bağlıca Seçkin Sitesi

Mobil uyumlu, Türkçe, bağımlılıksız HTML/CSS/JavaScript web sitesi. Dosyalar `dist/` içindedir ve herhangi bir statik sunucuda çalışır.

## Yerelde çalıştırma

```sh
cd seckin-web
python3 -m http.server 3000 --directory dist
```

Ardından http://localhost:3000 adresini açın.

## İçerik durumu

- Adres kullanıcı tarafından sağlandı. Harita aynı adres sorgusuna açılır; işaret konumu yayın öncesinde yerinde teyit edilmelidir.
- Mimari ve doğa fotoğrafları Unsplash kaynaklı temsili görsellerdir; sitede bu açıkça belirtilir. Gerçek fotoğraflarla değiştirilmelidir.
- Yönetim telefonu/e-postası, çalışma saatleri, tesis özellikleri, sayısal bilgiler ve gerçek duyurular sağlanmadığından eklenmedi.
- Duyuru alanı gerçek bir boş durum gösterir. Yönetim paneli, sakin girişi ve form gönderimi bulunmaz.
- Galeri büyütme, klavyeyle fotoğraf değiştirme, mobil menü, adres kopyalama ve yol tarifi bağlantıları çalışır.
- Google Fonts ve Google Haritalar dış servislerdir; diğer içerik ve görseller yereldir.
- Taslak için arama motoru indekslemesi kapalıdır (`noindex,nofollow`). Gerçek içerikler tamamlandığında kaldırılabilir.

## Görseller

- Mimari: https://images.unsplash.com/photo-1460317442991-0ec209397118 (indirme kimliği: photo-1460317442991-0ec209397118)
- Doğa: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- Unsplash lisansı: https://unsplash.com/license

## İncelenen referanslar

- https://www.florabaglica.com/ — incelendi; görselleri ve marka öğeleri kopyalanmadı.
- https://www.parkbulvarsitesi.com/ — araştırma sırasında erişim zaman aşımına uğradı.

Yayın ayarları `.openai/hosting.json` içindedir. Sites kaydı başlangıçta özeldir.
