import type { ServiceCategory, BusinessType } from "@shared/schema";

export interface ServiceData {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  priceRange: string;
  businessTypes: BusinessType[];
  techStack: string[];
  features: string[];
}

export const servicesData: ServiceData[] = [
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
    ]
  },
  {
    id: "email-lead-automation",
    name: "Email & Lead Automation",
    description: "Auto-reply to leads, categorize, and store in spreadsheet automatically",
    category: "AI Automation",
    priceRange: "₹8,000 - ₹20,000",
    businessTypes: ["Retail", "Real Estate", "Service", "All"],
    techStack: ["Zapier", "Make", "Google Sheets API", "Python"],
    features: [
      "Automatic email responses",
      "Lead categorization",
      "Google Sheets integration",
      "Follow-up sequences",
      "Priority tagging",
      "Email templates"
    ]
  },
  {
    id: "invoice-generator",
    name: "Invoice Generator",
    description: "Auto-generate professional PDF invoices from form or Excel data",
    category: "AI Automation",
    priceRange: "₹5,000 - ₹12,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["Python", "HTML2PDF", "React"],
    features: [
      "Professional invoice templates",
      "GST calculation",
      "Bulk invoice generation",
      "Custom branding",
      "Excel import",
      "Email delivery"
    ]
  },
  {
    id: "attendance-system",
    name: "Attendance System",
    description: "Web tool for marking and tracking employee attendance with reports",
    category: "AI Automation",
    priceRange: "₹10,000 - ₹25,000",
    businessTypes: ["Education", "Retail", "Health", "Service", "All"],
    techStack: ["React", "Python", "SQLite", "Chart.js"],
    features: [
      "QR code check-in",
      "Mobile friendly",
      "Attendance reports",
      "Leave management",
      "Late/absent notifications",
      "Export to Excel"
    ]
  },
  {
    id: "inventory-tracker",
    name: "Inventory Tracker",
    description: "Small web app for stock tracking with search, edit, and low stock alerts",
    category: "AI Automation",
    priceRange: "₹12,000 - ₹30,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["React", "Python", "PostgreSQL"],
    features: [
      "Real-time stock updates",
      "Low stock alerts",
      "Barcode scanning",
      "Sales tracking",
      "Supplier management",
      "Analytics dashboard"
    ]
  },
  {
    id: "billing-software",
    name: "Billing Software",
    description: "Simple POS system for small shops or clinics with inventory sync",
    category: "AI Automation",
    priceRange: "₹15,000 - ₹40,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["React", "Python", "SQLite"],
    features: [
      "Fast billing interface",
      "Inventory sync",
      "Customer database",
      "Payment tracking",
      "GST reports",
      "Thermal printer support"
    ]
  },
  {
    id: "appointment-scheduler",
    name: "Appointment Scheduler",
    description: "Booking tool for doctors, salons, tutors with calendar sync",
    category: "AI Automation",
    priceRange: "₹10,000 - ₹28,000",
    businessTypes: ["Health", "Education", "Service", "All"],
    techStack: ["React", "Google Calendar API", "Twilio"],
    features: [
      "Online booking",
      "Calendar integration",
      "SMS reminders",
      "Cancellation handling",
      "Availability management",
      "Customer database"
    ]
  },
  {
    id: "whatsapp-reminder-bot",
    name: "WhatsApp Reminder Bot",
    description: "Sends automatic reminders or payment notifications via WhatsApp",
    category: "AI Automation",
    priceRange: "₹6,000 - ₹15,000",
    businessTypes: ["Health", "Education", "Service", "All"],
    techStack: ["Twilio API", "Python", "Scheduler"],
    features: [
      "Scheduled messages",
      "Payment reminders",
      "Appointment reminders",
      "Bulk messaging",
      "Delivery reports",
      "Custom templates"
    ]
  },
  {
    id: "feedback-collector",
    name: "Customer Feedback Collector",
    description: "Link-based form that saves reviews in Google Sheets automatically",
    category: "AI Automation",
    priceRange: "₹5,000 - ₹12,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["React", "Google Sheets API", "Tailwind"],
    features: [
      "Custom feedback forms",
      "Star ratings",
      "Google Sheets sync",
      "QR code access",
      "Analytics dashboard",
      "Email notifications"
    ]
  },
  {
    id: "pdf-summarizer",
    name: "PDF Summarizer / Extractor",
    description: "Reads long PDFs and outputs key points using AI",
    category: "AI Automation",
    priceRange: "₹8,000 - ₹20,000",
    businessTypes: ["Education", "Service", "All"],
    techStack: ["OpenAI", "PyPDF", "React"],
    features: [
      "AI-powered summaries",
      "Key point extraction",
      "Multi-language support",
      "Bulk processing",
      "Export to text/doc",
      "Highlight generation"
    ]
  },
  {
    id: "ai-report-writer",
    name: "AI Report Writer",
    description: "Generates summary reports based on uploaded data using AI",
    category: "AI Automation",
    priceRange: "₹10,000 - ₹25,000",
    businessTypes: ["Education", "Service", "All"],
    techStack: ["GPT API", "Python", "React"],
    features: [
      "Auto report generation",
      "Data visualization",
      "Custom templates",
      "Multi-format export",
      "Chart integration",
      "Scheduled reports"
    ]
  },
  {
    id: "business-landing-page",
    name: "Business Landing Page",
    description: "Professional website for promoting shop, clinic, course, or startup",
    category: "Web Apps",
    priceRange: "₹8,000 - ₹20,000",
    businessTypes: ["Retail", "Health", "Education", "Service", "All"],
    techStack: ["React", "Tailwind CSS", "Vite"],
    features: [
      "Responsive design",
      "SEO optimized",
      "Contact forms",
      "Google Maps integration",
      "Image galleries",
      "Fast loading"
    ]
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description: "Stunning portfolio for individuals & freelancers to showcase work",
    category: "Web Apps",
    priceRange: "₹6,000 - ₹15,000",
    businessTypes: ["Service", "All"],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Project showcase",
      "About section",
      "Contact form",
      "Blog integration",
      "Testimonials",
      "Dark mode"
    ]
  },
  {
    id: "ecommerce-store",
    name: "E-Commerce Store",
    description: "Small online shop with product catalog and payment integration",
    category: "Web Apps",
    priceRange: "₹25,000 - ₹60,000",
    businessTypes: ["Retail", "All"],
    techStack: ["React", "Stripe", "PostgreSQL"],
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Order tracking",
      "Customer accounts",
      "Admin dashboard"
    ]
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    description: "Sales, orders, and analytics panel with beautiful charts",
    category: "Web Apps",
    priceRange: "₹15,000 - ₹40,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["React", "Chart.js", "PostgreSQL"],
    features: [
      "Real-time analytics",
      "Sales reports",
      "User management",
      "Data export",
      "Custom widgets",
      "Role-based access"
    ]
  },
  {
    id: "staff-management",
    name: "Staff Management Portal",
    description: "Manage employees, attendance, salary with ease",
    category: "Web Apps",
    priceRange: "₹18,000 - ₹45,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["React", "PostgreSQL", "Chart.js"],
    features: [
      "Employee profiles",
      "Attendance tracking",
      "Salary management",
      "Leave requests",
      "Performance reviews",
      "Reports generation"
    ]
  },
  {
    id: "learning-dashboard",
    name: "Learning Dashboard",
    description: "Course upload, user login, progress tracker for online education",
    category: "Web Apps",
    priceRange: "₹20,000 - ₹50,000",
    businessTypes: ["Education", "All"],
    techStack: ["React", "PostgreSQL", "Video API"],
    features: [
      "Course management",
      "Video hosting",
      "Progress tracking",
      "Quizzes & tests",
      "Certificates",
      "Student analytics"
    ]
  },
  {
    id: "crm-system",
    name: "CRM System",
    description: "Store and track leads easily with follow-up reminders",
    category: "Web Apps",
    priceRange: "₹15,000 - ₹40,000",
    businessTypes: ["Real Estate", "Service", "All"],
    techStack: ["React", "PostgreSQL", "Email API"],
    features: [
      "Lead management",
      "Contact database",
      "Follow-up automation",
      "Deal pipeline",
      "Email integration",
      "Reports & analytics"
    ]
  },
  {
    id: "restaurant-menu",
    name: "Restaurant Menu App",
    description: "QR-based digital menu for hotels and restaurants",
    category: "Web Apps",
    priceRange: "₹5,000 - ₹12,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["React", "Tailwind CSS"],
    features: [
      "Digital menu display",
      "QR code access",
      "Multi-language",
      "Food images",
      "Category filtering",
      "Easy updates"
    ]
  },
  {
    id: "billing-web-app",
    name: "Billing Web App",
    description: "Simple, printable bills with logo upload and GST support",
    category: "Web Apps",
    priceRange: "₹8,000 - ₹18,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["React", "PDF Generation"],
    features: [
      "Custom branding",
      "GST compliance",
      "Print support",
      "Customer database",
      "Bill history",
      "Export options"
    ]
  },
  {
    id: "social-media-posts",
    name: "AI-Generated Social Media Posts",
    description: "Caption + Image packs for Instagram / LinkedIn with AI",
    category: "Marketing",
    priceRange: "₹500/post - ₹5,000/month",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["GPT API", "DALL-E", "Canva API"],
    features: [
      "AI captions",
      "Image generation",
      "Platform optimization",
      "Hashtag research",
      "Content calendar",
      "Engagement tips"
    ]
  },
  {
    id: "email-campaigns",
    name: "Email Campaign Templates",
    description: "Ready-made designs for newsletters with automation",
    category: "Marketing",
    priceRange: "₹3,000 - ₹10,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["Mailchimp", "HTML/CSS", "React"],
    features: [
      "Professional templates",
      "Responsive design",
      "A/B testing",
      "Analytics tracking",
      "Automation sequences",
      "Personalization"
    ]
  },
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    description: "Improve website ranking on Google with proven strategies",
    category: "Marketing",
    priceRange: "₹10,000 - ₹30,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["SEO Tools", "Analytics", "Content"],
    features: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO",
      "Content strategy",
      "Link building",
      "Performance reports"
    ]
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description: "Scheduled posting + email follow-ups automatically",
    category: "Marketing",
    priceRange: "₹8,000 - ₹25,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["Zapier", "Buffer", "Mailchimp"],
    features: [
      "Social media scheduling",
      "Email automation",
      "Lead nurturing",
      "Analytics dashboard",
      "Campaign management",
      "Multi-channel sync"
    ]
  },
  {
    id: "website-translation",
    name: "Website Translation (English ⇄ Hindi/Marathi)",
    description: "Translate website for local Indian businesses",
    category: "Localization",
    priceRange: "₹8,000 - ₹20,000",
    businessTypes: ["Retail", "Health", "Education", "Service", "All"],
    techStack: ["i18n", "React", "Translation API"],
    features: [
      "Multi-language support",
      "Hindi translation",
      "Marathi translation",
      "SEO for each language",
      "Language switcher",
      "Cultural adaptation"
    ]
  },
  {
    id: "multilingual-content",
    name: "Multilingual Blog/Content Creation",
    description: "Region-targeted writing in multiple Indian languages",
    category: "Localization",
    priceRange: "₹2,000/article - ₹15,000/month",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["Content Writing", "Translation", "SEO"],
    features: [
      "Native language content",
      "SEO optimization",
      "Cultural relevance",
      "Keyword research",
      "Regular publishing",
      "Social media sharing"
    ]
  },
  {
    id: "regional-seo",
    name: "Regional SEO Optimization",
    description: "Ranking for 'near me' searches in local languages",
    category: "Localization",
    priceRange: "₹12,000 - ₹35,000",
    businessTypes: ["Retail", "Health", "Service", "All"],
    techStack: ["Google My Business", "Local SEO"],
    features: [
      "Local keyword targeting",
      "Google My Business",
      "Regional directories",
      "Location pages",
      "Review management",
      "Local link building"
    ]
  },
  {
    id: "data-cleaning",
    name: "Data Cleaning Automation",
    description: "Auto-remove duplicates and format Excel files",
    category: "Data",
    priceRange: "₹5,000 - ₹15,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["Python", "Pandas", "Excel"],
    features: [
      "Duplicate removal",
      "Data formatting",
      "Validation rules",
      "Bulk processing",
      "Error detection",
      "Export cleaned data"
    ]
  },
  {
    id: "sales-analytics",
    name: "Sales Analytics Dashboard",
    description: "Chart and visualize sales data easily with insights",
    category: "Data",
    priceRange: "₹12,000 - ₹30,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["React", "Chart.js", "PostgreSQL"],
    features: [
      "Interactive charts",
      "Sales trends",
      "Product performance",
      "Customer insights",
      "Export reports",
      "Real-time updates"
    ]
  },
  {
    id: "excel-dashboard",
    name: "Excel → Dashboard Converter",
    description: "Upload Excel and get interactive chart page",
    category: "Data",
    priceRange: "₹8,000 - ₹20,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["React", "Chart.js", "Excel Parser"],
    features: [
      "Excel file upload",
      "Auto chart generation",
      "Interactive filters",
      "Data visualization",
      "Share dashboard",
      "Update data easily"
    ]
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description: "SMBs track expenses and profit automatically",
    category: "Data",
    priceRange: "₹10,000 - ₹25,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["React", "PostgreSQL", "Chart.js"],
    features: [
      "Expense logging",
      "Category management",
      "Profit calculation",
      "Monthly reports",
      "Budget alerts",
      "Export to Excel"
    ]
  },
  {
    id: "feedback-insights",
    name: "Feedback Insights",
    description: "Sentiment analysis on reviews or customer feedback",
    category: "Data",
    priceRange: "₹8,000 - ₹22,000",
    businessTypes: ["Retail", "Service", "All"],
    techStack: ["OpenAI", "Python", "React"],
    features: [
      "Sentiment analysis",
      "Trend detection",
      "Word clouds",
      "Rating analysis",
      "Action insights",
      "Automated reports"
    ]
  },
];

export const categories: Array<{
  id: ServiceCategory;
  name: string;
  icon: string;
  description: string;
}> = [
  {
    id: "AI Automation",
    name: "AI & Automation",
    icon: "AI_automation_category_icon_3307602c.png",
    description: "Smart AI-powered tools to automate your business"
  },
  {
    id: "Web Apps",
    name: "Web & App Development",
    icon: "Web_development_category_icon_e01389d8.png",
    description: "Custom websites and web applications"
  },
  {
    id: "Marketing",
    name: "Digital Marketing",
    icon: "Marketing_and_branding_icon_69e52eeb.png",
    description: "Grow your business with digital marketing"
  },
  {
    id: "Localization",
    name: "Localization Services",
    icon: "Localization_and_translation_icon_99ef7ebb.png",
    description: "Reach Indian audiences in their language"
  },
  {
    id: "Data",
    name: "Data & Insights",
    icon: "Data_and_insights_icon_e40b16da.png",
    description: "Transform data into actionable insights"
  },
];
