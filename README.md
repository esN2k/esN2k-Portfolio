# esN2k.github.io

Doğukan Balaman'ın GitHub Pages üzerinde yayınlanan iki dilli statik portfolyo sitesi.

## Yapı

- `index.html`: Sayfa iskeleti ve içerik blokları
- `style.css`: Tasarım sistemi, layout ve responsive stiller
- `script.js`: Etkileşimler, dil değiştirme ve içerik çevirileri
- `assets/profile.jpg`: Optimize edilmiş profil görseli
- `assets/fonts/*.woff2`: Self-hosted font dosyaları
- `icons/`: PWA ve paylaşım ikonları

## Özellikler

- Build step gerektirmeyen saf HTML, CSS ve JavaScript
- İngilizce ve Türkçe dil desteği
- Harici font isteği olmadan çalışan self-hosted tipografi
- GitHub Pages uyumlu sade deploy yapısı
- SEO için `robots.txt`, `sitemap.xml` ve `site.webmanifest`

## Lokal Çalıştırma

```bash
python3 -m http.server 4173
```

Ardından `http://127.0.0.1:4173` adresini aç.

## İçerik Güncelleme

- Metinler ve çeviriler `script.js` içindeki `translations` objesinde tutulur.
- Düzen veya görsel güncellemeler için `index.html` ve `style.css` düzenlenir.
- Repo içinde yalnızca gerçekten kullanılan asset dosyaları tutulur.
