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

## İletişim ve harita

İletişim haritası Google Maps üzerinde işletme adresini arar; API anahtarı gerekmez. Harita ve Unsplash görselleri için internet erişimi gerekir.

İletişim formu, ad ve mesajı WhatsApp üzerinde 905517311893 numarasına hazırlar. Kullanıcı WhatsApp içindeki Gönder düğmesiyle mesajı iletir. E-posta ile iletişim kaldırılmıştır.

İşletme adresi: Siteler Fatin sokak No:36 4 numara Altındağ/ ANKARA.

Telefon: 0 551 731 18 93. Arama bağlantıları ve WhatsApp yönlendirmesi aynı numarayı kullanır. İşletme adresi ve telefon bağlantıları `lib/contact.ts` üzerinden yönetilir.

Adres tabanlı haritadaki işaretçinin doğru bina üzerinde olduğu doğrulanmalıdır.