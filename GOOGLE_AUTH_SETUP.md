# Google OAuth Setup Guide

## Current Status ✅
- ✅ Code already implemented in login/register pages
- ✅ Supabase credentials configured
- ✅ Google button UI ready

## What You Need to Do

### Step 1: Setup Google OAuth Credentials

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Login dengan akun Google kamu

2. **Create or Select Project**
   - Kalau belum punya project, create new project
   - Nama project terserah (contoh: "Aichiow")

3. **Enable Google+ API**
   - Di sidebar, pilih: **APIs & Services** > **Library**
   - Search: "Google+ API"
   - Click dan enable API nya

4. **Create OAuth Credentials**
   - Di sidebar: **APIs & Services** > **Credentials**
   - Click: **+ CREATE CREDENTIALS** > **OAuth client ID**
   - Application type: **Web application**
   - Name: "Aichiow Web App" (atau nama lain)

5. **Configure OAuth Consent Screen** (jika diminta)
   - User Type: **External**
   - App name: "Aichiow"
   - User support email: email kamu
   - Developer contact: email kamu
   - Save and continue
   - Scopes: Skip (default sudah cukup)
   - Test users: Add email kamu untuk testing
   - Save

6. **Add Authorized Redirect URIs**
   Ini yang PENTING! Add kedua URL ini:

   ```
   https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback
   http://localhost:3000/auth/callback
   ```

   **Note**: URL pertama adalah Supabase callback URL (sudah sesuai dengan project kamu)

7. **Copy Credentials**
   Setelah create, kamu akan dapat:
   - **Client ID**: `xxxxxxxx.apps.googleusercontent.com`
   - **Client Secret**: `GOCSPX-xxxxxxxxxxxxx`

   **SIMPAN INI!** Kamu akan butuh di step berikutnya.

---

### Step 2: Configure Supabase Dashboard

1. **Login ke Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Project: `0ec90b57d6e95fcbda19832f`

2. **Go to Authentication Settings**
   - Sidebar: **Authentication** > **Providers**
   - Scroll ke **Google**

3. **Enable & Configure Google Provider**
   - Toggle **Enable** ke ON
   - **Client ID**: Paste dari Google Console
   - **Client Secret**: Paste dari Google Console
   - **Authorized Client IDs**: (Leave empty or paste Client ID lagi)
   - Click **Save**

---

### Step 3: Update Environment Variables

Your current `.env` already has Supabase configured:
```env
NEXT_PUBLIC_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**You don't need to add Google credentials to .env!**

Supabase handles OAuth credentials internally. Kamu hanya perlu:
1. ✅ Configure di Google Cloud Console
2. ✅ Enable di Supabase Dashboard
3. ✅ That's it!

---

### Step 4: Test Login

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Navigate to Login**
   - Go to: `http://localhost:3000/auth/login`

3. **Click Google Button**
   - Should redirect to Google OAuth page
   - Select your Google account
   - Grant permissions
   - Redirects back to app
   - User logged in! ✅

4. **Check Profile**
   - After login, redirects to `/profile`
   - Your Google profile data should be visible

---

## Troubleshooting

### Error: "redirect_uri_mismatch"
**Fix**: Double check Authorized Redirect URIs di Google Console:
```
https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback
```

### Error: "Invalid OAuth provider"
**Fix**: Make sure Google provider is **enabled** di Supabase Dashboard

### Error: "Access blocked: This app's request is invalid"
**Fix**:
1. Configure OAuth Consent Screen
2. Add your email ke Test Users (untuk development)

### User data not showing
**Fix**: Check Supabase database:
```sql
SELECT * FROM auth.users;
```

---

## What Happens Behind the Scenes

1. User clicks Google button
2. Redirects to Google OAuth (`accounts.google.com`)
3. User authorizes app
4. Google redirects to: `https://[PROJECT].supabase.co/auth/v1/callback`
5. Supabase creates/updates user in `auth.users` table
6. Supabase redirects to: `/auth/callback` (your app)
7. Your callback page handles session
8. Redirects to `/profile`

---

## Security Notes

### ✅ Good Practices (Already Implemented)
- OAuth credentials stored in Supabase (server-side)
- Client ID not exposed in frontend code
- HTTPS required for production
- Callback URLs whitelisted

### ⚠️ Important
- Never commit Google Client Secret to Git
- Use different credentials for dev/prod
- Keep Supabase keys secure

---

## Quick Reference

**Supabase Project ID**: `0ec90b57d6e95fcbda19832f`
**Supabase URL**: `https://0ec90b57d6e95fcbda19832f.supabase.co`
**Callback URL**: `https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback`

**Google Cloud Console**: https://console.cloud.google.com/
**Supabase Dashboard**: https://supabase.com/dashboard/project/0ec90b57d6e95fcbda19832f

---

## Additional OAuth Providers

Code also supports GitHub and Discord! To enable:

### GitHub OAuth
1. Go to: https://github.com/settings/developers
2. Create OAuth App
3. Callback URL: `https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback`
4. Add credentials to Supabase Dashboard

### Discord OAuth
1. Go to: https://discord.com/developers/applications
2. Create Application
3. OAuth2 → Add Redirect: `https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback`
4. Add credentials to Supabase Dashboard

---

## Summary

**To enable Google Sign-In, you only need:**

1. ✅ Create Google OAuth credentials (Google Cloud Console)
2. ✅ Enable Google provider (Supabase Dashboard)
3. ✅ Test login flow

**NO .env changes needed!** OAuth credentials managed by Supabase.

---

**Need Help?**
- Google OAuth Docs: https://developers.google.com/identity/protocols/oauth2
- Supabase Auth Docs: https://supabase.com/docs/guides/auth/social-login/auth-google
