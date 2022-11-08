# edu-jwt

```bash
git clone
cd edu-jwt
echo REFRESH_TOKEN_SECRET=`node -p "require('crypto').randomBytes(64).toString('hex');"` > .env
echo ACCESS_TOKEN_SECRET=`node -p "require('crypto').randomBytes(64).toString('hex');"` >> .env
npm run dev
```
