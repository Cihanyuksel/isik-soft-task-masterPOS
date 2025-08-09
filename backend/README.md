# MasterPOS Backend

MasterPOS uygulamasının backend servisi, **Express.js**, **MongoDB** ve **TypeScript** kullanılarak geliştirilmiştir.  
MongoDB Atlas üzerinden bağlantı sağlanmıştır.

## API Endpoint

- GET /api/products — Ürün listesini sayfalı şekilde döner (örnek: /api/products?page=<number>)
- Örnek: https://products-api-9kbo.onrender.com/api/products?page=2
- Not: Render ilk yükleme 15-30 saniye civarı sürüyor.

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

## Teknolojiler

- Express.js
- MongoDB
- Typescript

## Deployment

Proje Render platformunda deploy edilmiştir.
