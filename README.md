# Ever Tech Solutions

A comprehensive web application platform for educational technology services, course management, and student applications. Built with modern web technologies, this platform provides a complete solution for managing tech courses, student applications, and administrative operations.

## 🚀 Project Overview

Ever Tech Solutions is a full-stack web application that serves as a comprehensive platform for:
- **Course Management**: Display and manage various technology courses
- **Student Applications**: Handle course applications with document uploads
- **Admin Dashboard**: Comprehensive administrative interface for managing students
- **Client Showcase**: Display company achievements and client portfolio
- **Community Management**: Showcase community members and progress metrics

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.3.1** - React framework with App Router
- **React 19.0.0** - Latest React with modern features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **Framer Motion 12.10.5** - Animation library for React

### State Management
- **Redux Toolkit 2.8.1** - Modern Redux with simplified syntax
- **React Redux 9.2.0** - React bindings for Redux
- **Next Redux Wrapper 8.1.0** - Redux integration for Next.js

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Prisma 6.9.0** - Modern database ORM
- **MongoDB 6.16.0** - NoSQL database
- **NextAuth.js 4.24.11** - Authentication solution

### File Handling & Storage
- **Cloudinary 2.6.1** - Cloud-based image and file management
- **Next Cloudinary 6.16.0** - Cloudinary integration for Next.js
- **Multer 1.4.5** - File upload middleware

### Authentication & Security
- **bcryptjs 3.0.2** - Password hashing
- **jsonwebtoken 9.0.2** - JWT token management
- **js-cookie 3.0.5** - Cookie management

### Development Tools
- **ESLint 9.26.0** - Code linting and formatting
- **PostCSS 8.5.4** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## 📁 Project Structure

```
ever-tech-solutions/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin panel routes
│   │   │   ├── dashboard/     # Admin dashboard
│   │   │   └── login/        # Admin authentication
│   │   ├── api/              # API endpoints
│   │   │   ├── adminLogin/   # Admin authentication API
│   │   │   ├── contactUs/    # Contact form API
│   │   │   └── userData/     # Student data management API
│   │   ├── applyCourse/      # Course application routes
│   │   └── providers/        # Context providers
│   ├── components/            # Reusable UI components
│   │   ├── admin/            # Admin-specific components
│   │   ├── buttons/          # Button components
│   │   ├── coursesSection/   # Course display components
│   │   ├── fileUpload/       # File upload components
│   │   ├── heroSection/      # Landing page hero
│   │   ├── navbar/           # Navigation components
│   │   └── ...               # Other UI components
│   ├── config/               # Configuration files
│   ├── constant/             # Static data and constants
│   ├── generated/            # Prisma generated files
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries
│   ├── store/                # Redux store configuration
│   │   └── slices/           # Redux slices
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Utility functions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── ...                       # Configuration files
```

## 🚀 Features

### Core Functionality
- **Responsive Landing Page**: Modern, animated hero section with service showcase
- **Course Catalog**: Comprehensive display of available technology courses
- **Student Application System**: Complete application form with document uploads
- **Admin Dashboard**: Full administrative interface for managing applications
- **Contact Management**: Contact form with backend processing
- **File Management**: Secure file uploads to Cloudinary

### User Experience
- **Dark/Light Mode**: Theme switching capability
- **Responsive Design**: Mobile-first responsive layout
- **Smooth Animations**: Framer Motion powered interactions
- **Toast Notifications**: User feedback system
- **Form Validation**: Comprehensive input validation

### Administrative Features
- **Student Management**: View, accept, decline, and manage student applications
- **Status Tracking**: Track application status (New, Accepted, Declined)
- **Document Review**: Access to uploaded student documents
- **Filtering System**: Filter students by application status
- **Secure Access**: Protected admin routes with authentication

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- MongoDB database
- Cloudinary account

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/ever-tech-solutions"

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# JWT Secret
JWT_SECRET=your_jwt_secret

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ever-tech-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Generate Prisma client**
   ```bash
   npm run prisma:generate
   # or
   yarn prisma:generate
   ```

4. **Set up the database**
   ```bash
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server with Prisma generation
- `npm run build` - Build for production with Prisma generation
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client

## 🔐 Authentication

### Admin Access
- **Route**: `/admin/login`
- **Protected Routes**: `/admin/dashboard/*`
- **Middleware**: Automatic redirection for unauthenticated users

### Student Applications
- **Route**: `/applyCourse/form`
- **Features**: Course selection, document uploads, form validation

## 🗄️ Database Schema

The application uses Prisma with MongoDB and includes models for:
- **UserData**: Student application information
- **Admin**: Administrative user accounts
- **Contact**: Contact form submissions

## 🌐 API Endpoints

### Student Management
- `POST /api/userData` - Submit new student application
- `GET /api/userData` - Retrieve all student applications
- `PUT /api/userData` - Update application status

### Authentication
- `POST /api/adminLogin` - Admin authentication

### Contact
- `POST /api/contactUs` - Submit contact form

## 🎨 UI Components

### Core Components
- **Button**: Reusable button component with variants
- **InputField**: Form input components with validation
- **FileUpload**: Secure file upload with preview
- **Loader**: Loading state indicators
- **MainContainer**: Layout wrapper component

### Section Components
- **HeroSection**: Animated landing page hero
- **CoursesSection**: Course catalog display
- **AboutUsSection**: Company information
- **ContactUsSection**: Contact form and information
- **OurClients**: Client showcase
- **OurCommunity**: Community statistics and members

## 🔧 Custom Hooks

- **useApplyCourse**: Course application form management
- **useDashboard**: Admin dashboard functionality
- **useFileUpload**: File handling and upload management
- **useHeroSection**: Hero section animations and interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Considerations
- Ensure all environment variables are set
- Configure Cloudinary for production
- Set up production MongoDB instance
- Configure NextAuth for production domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary to Ever Tech Solutions.

## 📞 Support

For support and questions:
- Contact: [Contact information from company data]
- Office: 123 Tech Street, Innovation District, Karachi, Pakistan
- Phone: +92 300 1234567

---

**Built with ❤️ using Next.js, React, and modern web technologies**
