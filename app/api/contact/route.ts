import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const recipientEmail = 'Info.zarventures@gmail.com'
    
    const emailSubject = `Contact Form: ${subject}`
    const emailContent = `
New Contact Form Submission from Zar Ventures Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on zarventures.com
Reply to: ${email}
    `.trim()

    // Send email using Nodemailer with Gmail SMTP
    let nodemailer
    try {
      nodemailer = require('nodemailer')
    } catch (e) {
      // If nodemailer is not installed, log and return success
      console.log('=== CONTACT FORM SUBMISSION (Nodemailer not configured) ===')
      console.log('To:', recipientEmail)
      console.log('From:', email)
      console.log('Subject:', emailSubject)
      console.log('Content:', emailContent)
      console.log('==============================')
      
      // Return success for now (in production, configure email service)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        },
        { status: 200 }
      )
    }

    // Check if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS

    if (!smtpUser || !smtpPass) {
      // SMTP not configured - log the submission
      console.log('=== CONTACT FORM SUBMISSION (SMTP not configured) ===')
      console.log('To:', recipientEmail)
      console.log('From:', email)
      console.log('Subject:', emailSubject)
      console.log('Content:', emailContent)
      console.log('NOTE: Configure SMTP credentials in .env.local to send emails')
      console.log('==============================')
      
      // Return success (form submission is logged)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        },
        { status: 200 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM || smtpUser || 'noreply@zarventures.com',
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">
            This email was sent from the contact form on zarventures.com
          </p>
        </div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully to:', recipientEmail)
    } catch (emailError: any) {
      console.error('Failed to send email:', emailError)
      // Log the submission even if email fails
      console.log('=== CONTACT FORM SUBMISSION (Email failed, but logged) ===')
      console.log('To:', recipientEmail)
      console.log('From:', email)
      console.log('Subject:', emailSubject)
      console.log('Content:', emailContent)
      console.log('Error:', emailError.message)
      console.log('==============================')
      
      // Still return success to user (form submission is logged)
      // In production, you might want to handle this differently
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you soon.' 
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    )
  }
}

