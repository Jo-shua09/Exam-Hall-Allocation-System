# ExamHall - Find Your Examination Hall Instantly

ExamHall is a streamlined web application designed to help students quickly locate their assigned examination halls. No more confusion or stress during exam periods — simply enter your details and get your hall assignment instantly.

## Features

- **Instant Hall Allocation**: Find your examination hall in seconds
- **Real-time Validation**: Form validation with helpful error messages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User-Friendly Interface**: Clean, intuitive design with smooth animations
- **Fast Search**: Results displayed within 5 seconds

## How the Allocation Form Works

The allocation form is the core feature of ExamHall. Here's how it works:

### Required Fields

1. **Academic Session** (Required)

   - Format: `YYYY/YYYY` (e.g., `2024/2025`)
   - Specifies the academic year for the examination

2. **Level** (Required)

   - Format: `XXX Level` (e.g., `200 Level`)
   - Indicates the student's academic level

3. **Department** (Required)

   - Full department name (e.g., `Computer Science`)
   - Must be at least 3 characters long

4. **College** (Required)

   - Full college name (e.g., `College of Basic Science`)
   - Must be at least 5 characters long

5. **Matriculation Number** (Required)
   - 12-digit number (e.g., `240303010071`)
   - Unique student identifier

### Form Validation

- **Real-time Validation**: Fields are validated as you type and when you leave the field
- **Visual Feedback**: Green checkmarks for valid inputs, red error messages for invalid ones
- **Required Field Indicators**: Asterisks (\*) mark mandatory fields
- **Input Restrictions**: Matriculation number limited to 12 digits

### Search Process

1. Fill out all required fields
2. Click "Search for Hall" button
3. Form validates all inputs
4. If valid, displays loading animation for 2 seconds
5. Shows result card with:
   - Student name and matriculation number
   - Department and level
   - Assigned hall (e.g., TE 220)
   - Seat number (e.g., A15)
   - Exam date and time
   - Course code

### Result Display

Results are presented in a clean card format with:

- Hall location and seat assignment
- Examination schedule (date and time)
- Course information
- Option to perform a new search

## Technologies Used

This project is built with modern web technologies:

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript for better development experience
- **React**: Component-based UI library
- **shadcn-ui**: High-quality UI components
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Query**: Data fetching and state management
- **Lucide Icons**: Beautiful icon library

## Getting Started

### Installation

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:

```sh
cd <YOUR_PROJECT_NAME>
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
