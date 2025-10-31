# Product Images List

## Location to Place Images
**Directory:** `client/public/images/products/`

All product images should be placed in the `client/public/images/products/` directory and referenced in `client/src/data/services.ts` using the `imageUrl` property.

## List of All Products (28 Total)

### AI Automation Category (11 products)

1. **AI Chatbot** (`ai-chatbot`)
   - Image: `ai-chatbot.jpg` or `ai-chatbot.png`
   - Description: WhatsApp / Website chatbot

2. **Email & Lead Automation** (`email-lead-automation`)
   - Image: `email-lead-automation.jpg` or `email-lead-automation.png`
   - Description: Auto-reply to leads

3. **Invoice Generator** (`invoice-generator`)
   - Image: `invoice-generator.jpg` or `invoice-generator.png`
   - Description: Auto-generate PDF invoices

4. **Attendance System** (`attendance-system`)
   - Image: `attendance-system.jpg` or `attendance-system.png`
   - Description: Web attendance tracking tool

5. **Inventory Tracker** (`inventory-tracker`)
   - Image: `inventory-tracker.jpg` or `inventory-tracker.png`
   - Description: Stock tracking web app

6. **Billing Software** (`billing-software`)
   - Image: `billing-software.jpg` or `billing-software.png`
   - Description: POS system for shops/clinics

7. **Appointment Scheduler** (`appointment-scheduler`)
   - Image: `appointment-scheduler.jpg` or `appointment-scheduler.png`
   - Description: Booking tool with calendar sync

8. **WhatsApp Reminder Bot** (`whatsapp-reminder-bot`)
   - Image: `whatsapp-reminder-bot.jpg` or `whatsapp-reminder-bot.png`
   - Description: Automatic WhatsApp reminders

9. **Customer Feedback Collector** (`feedback-collector`)
   - Image: `feedback-collector.jpg` or `feedback-collector.png`
   - Description: Google Sheets feedback forms

10. **PDF Summarizer / Extractor** (`pdf-summarizer`)
    - Image: `pdf-summarizer.jpg` or `pdf-summarizer.png`
    - Description: AI-powered PDF summaries

11. **AI Report Writer** (`ai-report-writer`)
    - Image: `ai-report-writer.jpg` or `ai-report-writer.png`
    - Description: Auto-generate reports with AI

---

### Web Apps Category (9 products)

12. **Business Landing Page** (`business-landing-page`)
    - Image: `business-landing-page.jpg` or `business-landing-page.png`
    - Description: Professional business website

13. **Portfolio Website** (`portfolio-website`)
    - Image: `portfolio-website.jpg` or `portfolio-website.png`
    - Description: Portfolio for freelancers

14. **E-Commerce Store** (`ecommerce-store`)
    - Image: `ecommerce-store.jpg` or `ecommerce-store.png`
    - Description: Online shop with payments

15. **Admin Dashboard** (`admin-dashboard`)
    - Image: `admin-dashboard.jpg` or `admin-dashboard.png`
    - Description: Sales & analytics panel

16. **Staff Management Portal** (`staff-management`)
    - Image: `staff-management.jpg` or `staff-management.png`
    - Description: Employee management system

17. **Learning Dashboard** (`learning-dashboard`)
    - Image: `learning-dashboard.jpg` or `learning-dashboard.png`
    - Description: Online course platform

18. **CRM System** (`crm-system`)
    - Image: `crm-system.jpg` or `crm-system.png`
    - Description: Lead tracking & management

19. **Restaurant Menu App** (`restaurant-menu`)
    - Image: `restaurant-menu.jpg` or `restaurant-menu.png`
    - Description: QR-based digital menu

20. **Billing Web App** (`billing-web-app`)
    - Image: `billing-web-app.jpg` or `billing-web-app.png`
    - Description: Printable bill generator

---

### Marketing Category (4 products)

21. **AI-Generated Social Media Posts** (`social-media-posts`)
    - Image: `social-media-posts.jpg` or `social-media-posts.png`
    - Description: AI captions & image packs

22. **Email Campaign Templates** (`email-campaigns`)
    - Image: `email-campaigns.jpg` or `email-campaigns.png`
    - Description: Newsletter templates

23. **SEO Optimization** (`seo-optimization`)
    - Image: `seo-optimization.jpg` or `seo-optimization.png`
    - Description: Google ranking improvements

24. **Marketing Automation** (`marketing-automation`)
    - Image: `marketing-automation.jpg` or `marketing-automation.png`
    - Description: Scheduled posting & emails

---

### Localization Category (3 products)

25. **Website Translation** (`website-translation`)
    - Image: `website-translation.jpg` or `website-translation.png`
    - Description: English ⇄ Hindi/Marathi

26. **Multilingual Content Creation** (`multilingual-content`)
    - Image: `multilingual-content.jpg` or `multilingual-content.png`
    - Description: Region-targeted content

27. **Regional SEO Optimization** (`regional-seo`)
    - Image: `regional-seo.jpg` or `regional-seo.png`
    - Description: Local language SEO

---

### Data Category (5 products)

28. **Data Cleaning Automation** (`data-cleaning`)
    - Image: `data-cleaning.jpg` or `data-cleaning.png`
    - Description: Excel data cleanup

29. **Sales Analytics Dashboard** (`sales-analytics`)
    - Image: `sales-analytics.jpg` or `sales-analytics.png`
    - Description: Sales visualization

30. **Excel → Dashboard Converter** (`excel-dashboard`)
    - Image: `excel-dashboard.jpg` or `excel-dashboard.png`
    - Description: Upload Excel, get charts

31. **Expense Tracker** (`expense-tracker`)
    - Image: `expense-tracker.jpg` or `expense-tracker.png`
    - Description: Track expenses & profit

32. **Feedback Insights** (`feedback-insights`)
    - Image: `feedback-insights.jpg` or `feedback-insights.png`
    - Description: Sentiment analysis on reviews

---

## How to Update the Images

After placing your images in `client/public/images/products/`, you need to add the `imageUrl` property to each service in `client/src/data/services.ts`.

**Example:**
```typescript
{
  id: "ai-chatbot",
  name: "AI Chatbot",
  description: "WhatsApp / Website chatbot to answer customer queries automatically, available 24/7",
  category: "AI Automation",
  priceRange: "₹15,000 - ₹35,000",
  businessTypes: ["Retail", "Health", "Education", "Service", "All"],
  techStack: ["ChatGPT API", "Twilio", "Python", "React"],
  features: [
    "24/7 automated customer support",
    "WhatsApp integration",
    "Website chat widget",
    "Multi-language support",
    "Custom training on your business data",
    "Analytics dashboard"
  ],
  imageUrl: "/images/products/ai-chatbot.jpg" // ← Add this line
}
```

## Current Status

The `imageUrl` property has been added to the `ServiceData` interface. You now need to:
1. Create the directory: `client/public/images/products/`
2. Place all 28 product images in that directory
3. Update each service object in `client/src/data/services.ts` with the `imageUrl` property

## Image Recommendations

- **Format:** JPG or PNG
- **Size:** Recommended 800x600px or similar aspect ratio
- **File Naming:** Use the exact product ID as the filename (e.g., `ai-chatbot.jpg`)
- **Quality:** Optimize images for web (keep under 500KB per image if possible)

