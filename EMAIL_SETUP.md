# Email Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails to `Info.zarventures@gmail.com` when users submit the form.

## Setup Instructions

### Step 1: Install Nodemailer

Run this command in your project directory:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer 
```

### Step 2: Configure Environment Variables

Create or update your `.env.local` file in the project root with the following:

```env
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=Zar Ventures Contact Form <noreply@zarventures.com>
```

### Step 3: Get Gmail App Password

Since you're using Gmail (`Info.zarventures@gmail.com`), you need to:

1. **Enable 2-Step Verification** on your Gmail account:
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Zar Ventures Website"
   - Click "Generate"
   - Copy the 16-character password

3. **Use the App Password**:
   - Paste it in `.env.local` as `SMTP_PASS`
   - Use `Info.zarventures@gmail.com` as `SMTP_USER`

### Step 4: Example .env.local File

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=Info.zarventures@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
SMTP_FROM=Zar Ventures Contact Form <Info.zarventures@gmail.com>
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`.

## Alternative Email Services

If you prefer not to use Gmail SMTP, you can use:

### Option 1: Resend (Recommended for Production)
1. Sign up at https://resend.com
2. Get your API key
3. Install: `npm install resend`
4. Update `app/api/contact/route.ts` to use Resend

### Option 2: SendGrid
1. Sign up at https://sendgrid.com
2. Get your API key
3. Install: `npm install @sendgrid/mail`
4. Update the API route accordingly

### Option 3: AWS SES
1. Set up AWS SES
2. Configure credentials
3. Use AWS SDK to send emails

## Testing

After setup:

1. Start your development server: `npm run dev`
2. Go to the Contact Us page
3. Fill out the form
4. Submit and check:
   - Success message appears
   - Email arrives at `Info.zarventures@gmail.com`

## Troubleshooting

### Email not sending?
- Check that `.env.local` is in the project root
- Verify SMTP credentials are correct
- Check Gmail App Password is valid (not your regular password)
- Check server logs for error messages

### "Module not found: nodemailer"
- Run: `npm install nodemailer`

### Gmail blocking emails?
- Make sure 2-Step Verification is enabled
- Use App Password, not regular password
- Check Gmail security settings

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords, not regular passwords
- Consider using a dedicated email service for production
- Rate limit the API endpoint to prevent abuse

## Production Deployment

For production (Hostinger):

1. Set environment variables in your hosting panel
2. Or use a service like Resend/SendGrid (more reliable)
3. Test thoroughly before going live
4. Monitor email delivery rates

---

**Need Help?** Check the API route at `app/api/contact/route.ts` for implementation details.

