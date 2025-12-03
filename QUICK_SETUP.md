# ⚡ Quick Setup - Google Sign In

## Your Supabase Info
```
Project ID: 0ec90b57d6e95fcbda19832f
URL: https://0ec90b57d6e95fcbda19832f.supabase.co
Anon Key: (Already in .env)
```

## Step 1: Google Cloud Console
**URL**: https://console.cloud.google.com/

1. Create new project or select existing
2. Enable **Google+ API**
3. Create **OAuth Client ID** (Web Application)
4. Add Authorized Redirect URI:
   ```
   https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback
   ```
5. Copy **Client ID** and **Client Secret**

## Step 2: Supabase Dashboard
**URL**: https://supabase.com/dashboard/project/0ec90b57d6e95fcbda19832f

1. Go to: **Authentication** → **Providers**
2. Find **Google** and toggle **Enable**
3. Paste:
   - Client ID: `xxxxxx.apps.googleusercontent.com`
   - Client Secret: `GOCSPX-xxxxxx`
4. Click **Save**

## Step 3: Test
```bash
npm run dev
```

Go to: http://localhost:3000/auth/login
Click Google button → Should work! ✅

---

## That's It!

**NO .env changes needed!**

Supabase handles OAuth credentials internally.

---

## Quick Links

- **Google Console**: https://console.cloud.google.com/apis/credentials
- **Supabase Auth**: https://supabase.com/dashboard/project/0ec90b57d6e95fcbda19832f/auth/providers
- **Full Guide**: See GOOGLE_AUTH_SETUP.md

---

## Troubleshooting

**"redirect_uri_mismatch"**
→ Check redirect URI in Google Console is exactly:
`https://0ec90b57d6e95fcbda19832f.supabase.co/auth/v1/callback`

**"Access blocked"**
→ Add your email to Test Users in OAuth Consent Screen

**"Invalid provider"**
→ Make sure Google is enabled in Supabase Dashboard
