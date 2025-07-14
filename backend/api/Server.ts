import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Define the expected shape of the request body
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

// Rate Limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many contact requests, please try again later'
});

// Create Nodemailer Transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation Middleware
const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters'),
  
  body('email')
    .trim()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .isLength({ min: 3, max: 100 }).withMessage('Subject must be between 3 and 100 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 500 }).withMessage('Message must be between 10 and 500 characters')
];

// Contact Form Endpoint
app.post('/api/contact', 
  contactLimiter, 
  validateContactForm, 
  async (req: Request<object, object, ContactFormData>, res: Response): Promise<void> => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, email, subject, message } = req.body;

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'yasmarfaq51@gmail.com',
        replyTo: email,
        subject: `New Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Message from Contact Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
        text: `
          New Message from Contact Form
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `
      });

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error: unknown) {
      console.error('Email sending error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;