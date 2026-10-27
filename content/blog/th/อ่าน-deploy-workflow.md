---
title: "จาก push โค้ดถึงเว็บจริง: อ่าน deploy workflow แบบเข้าใจง่าย"
description: "อธิบาย GitHub Actions workflow ของเว็บนี้ ตั้งแต่ push เข้า main จน Cloudflare Worker รับเวอร์ชันใหม่"
date: 2026-10-27
---

เวลาแก้เว็บเสร็จ เราไม่อยาก build ไฟล์แล้วอัปโหลดขึ้นเซิร์ฟเวอร์เองทุกครั้ง บทความนี้พาอ่านไฟล์ `.github/workflows/deploy.yml` ว่าหลังส่งโค้ดขึ้น GitHub แล้วมีอะไรเกิดขึ้นบ้าง

## Workflow นี้เริ่มทำงานตอนไหน

workflow นี้เริ่มเมื่อมีการ push โค้ดเข้า branch `main` หรือเมื่อสั่งรันเองจาก GitHub Actions ได้ การรันเองมีประโยชน์เวลาต้องการ deploy ซ้ำ โดยไม่ต้องสร้าง commit ใหม่

## ก่อนเริ่ม deploy

งานรันบนเครื่อง runner ที่ทีมจัดเตรียมไว้ (`self-host`) และกำหนดเวลาให้ทำงานได้ไม่เกิน 20 นาที จากนั้น workflow จะ:

1. ดาวน์โหลดโค้ดของ commit ที่ต้องการ deploy
2. ติดตั้ง Bun เวอร์ชัน `1.4.2`
3. ติดตั้ง dependency ด้วย `bun install --frozen-lockfile`

คำว่า `--frozen-lockfile` หมายถึงให้ติดตั้งตามรายการเวอร์ชันที่บันทึกไว้แล้ว ถ้าไฟล์ dependency กับ lockfile ไม่ตรงกัน ขั้นตอนจะหยุดแทนการเปลี่ยน lockfile ให้อัตโนมัติ วิธีนี้ช่วยให้ build ใช้ชุด dependency ที่คาดเดาได้

## Build แล้วค่อยส่งขึ้น production

เมื่อเตรียมเครื่องพร้อมแล้ว workflow จะรัน `bun run build` เพื่อสร้างไฟล์เว็บ จากนั้น `prepare-gh-pages.mjs` จะจัดไฟล์ให้อยู่ในรูปแบบที่ขั้นตอน deploy ต้องใช้

ขั้นตอนสุดท้ายคือเรียก Wrangler เพื่อ deploy ไปยัง Cloudflare Worker ใน environment ชื่อ `production` ค่าลับอย่าง Cloudflare API token และ account ID ถูกส่งให้คำสั่งผ่าน GitHub Secrets ไม่ได้เขียนไว้ในไฟล์ workflow

## ทำไมต้องจำกัดสิทธิ์และจัดคิว

workflow ขอสิทธิ์อ่าน repository เท่านั้น เพราะงานนี้ไม่จำเป็นต้องแก้ไขโค้ดกลับเข้า GitHub ส่วน `concurrency` ใช้จัดคิว deployment ในกลุ่ม production เดียวกัน และไม่ยกเลิกงานที่กำลัง deploy อยู่ ป้องกันไม่ให้ deployment ซ้อนกันโดยไม่ตั้งใจ

## สิ่งที่ workflow นี้ยังไม่ได้ทำ

ไฟล์นี้ build และ deploy เว็บไซต์ แต่ยังไม่มีขั้นตอนรัน test หรือ lint ก่อน deploy ถ้าอยากให้การตรวจเหล่านั้นเป็นเงื่อนไขก่อนขึ้น production ต้องเพิ่ม step ตรวจสอบไว้ก่อนคำสั่ง deploy

สรุปสั้น ๆ: push เข้า `main` → เตรียม Bun และ dependency → build เว็บไซต์ → เตรียมไฟล์ → deploy ด้วย Wrangler โดยใช้ secrets สำหรับยืนยันตัวตน
