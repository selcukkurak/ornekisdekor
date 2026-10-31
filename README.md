# Örnek İş Dekor

Next.js tabanlı bahçe mobilyaları tanıtım sitesi.

## Gereksinimler

- Node.js 20.9 veya üzeri (Node.js 22 LTS önerilir)
- pnpm

## Yerel çalıştırma

1. Bağımlılıkları `pnpm install --frozen-lockfile` ile kurun.
2. Geliştirme sunucusunu `pnpm dev` ile başlatın.
3. http://localhost:3000 adresini açın.

VS Code içindeki “Siteyi çalıştır” görevi üretim sunucusunu http://localhost:3001 adresinde açar (önce `pnpm build` çalıştırın).

## Kontroller ve üretim

- `pnpm typecheck`: TypeScript kontrolü.
- `pnpm lint`: kod kalitesi kontrolü.
- `pnpm build`: üretim derlemesi.
- `pnpm start`: derleme sonrası üretim sunucusu.

## Site haritası

Next.js, `app/sitemap.ts` üzerinden `/sitemap.xml`, `app/robots.ts` üzerinden `/robots.txt` üretir. Site haritası ana sayfa, ürünler, hakkımızda ve iletişim sayfalarını içerir. Alan adı `lib/site.ts` üzerinden yönetilir.

Yayın adresi: https://www.xn--rnekisdekor-qfb.com/sitemap.xml

Yeni rotaların canlıda açılması için değişiklikleri GitHub'a gönderip Vercel dağıtımının tamamlanmasını bekleyin. Ardından site haritasını Google Search Console'a gönderin.

## İletişim ve harita

İletişim haritası Google Maps üzerinde işletme adresini arar; API anahtarı gerekmez. Harita için internet erişimi gerekir. Ürün fotoğrafları yerel WhatsApp görselleridir; harici stok fotoğraf kullanılmaz.

İletişim formu, ad ve mesajı WhatsApp üzerinde 905517311893 numarasına hazırlar. Kullanıcı WhatsApp içindeki Gönder düğmesiyle mesajı iletir. E-posta ile iletişim kaldırılmıştır.

İşletme adresi: Siteler Fatin sokak No:36 4 numara Altındağ/ ANKARA.

Telefon: 0 551 731 18 93. Arama bağlantıları ve WhatsApp yönlendirmesi aynı numarayı kullanır. İşletme adresi ve telefon bağlantıları `lib/contact.ts` üzerinden yönetilir.

Adres tabanlı haritadaki işaretçinin doğru bina üzerinde olduğu doğrulanmalıdır.

## Ürün fotoğrafları ve marka

Katalog, 3 doğrudan yüklenen fotoğraf ve WhatsApp arşivinden çıkarılan 22 fotoğrafı içerir. Aynı mobilyanın farklı açıları ayrı kartlarda gösterilir. Fotoğraflar kırpılmadan gösterilir; tıklanınca tam boy açılır. Her kart ürün koduyla WhatsApp mesajı hazırlar.

Ürün listesi `lib/products.ts` içinde tutulur. Orijinal fotoğraflar `public` ve `public/products` klasörlerindedir.

Özgün logo `public/logo.svg` üzerinden header ve footer içinde kullanılır. `app/icon.svg` tarayıcı simgesini, `app/apple-icon.tsx` mobil simgeyi, `app/opengraph-image.tsx` logo içeren sosyal paylaşım önizlemesini üretir. Arama motorları için işletme yapılandırılmış verisinde de logo tanımlıdır. Dış platformların logo ve önizleme güncellemeleri kendi önbelleklerine bağlıdır.