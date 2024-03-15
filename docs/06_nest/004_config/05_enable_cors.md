```typescript
app.enableCors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Expiry',
    'X-Refresh-Token',
  ],
});
```
