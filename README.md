# AI-Powered Quiz Application

A modern, interactive quiz application built with React and powered by Google's Gemini AI. Users can select from various topics and take dynamically generated multiple-choice quizzes.

## 🚀 Features

- **Dynamic Quiz Generation**: Uses Google Gemini AI to generate 5 MCQ questions on any selected topic
- **Topic Selection**: Choose from 6 predefined topics including Wellness, Technology, Finance, and more
- **Interactive UI**: Modern, responsive design with smooth animations and transitions
- **Score Tracking**: Real-time score calculation with percentage display
- **Replay Functionality**: Take the same quiz multiple times to improve your score
- **Loading States**: Smooth loading experience with animated spinners

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with React Router 7.9.3
- **Styling**: Tailwind CSS 4.1.14
- **AI Integration**: Google Gemini AI (@google/genai)
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint with React-specific rules

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google AI API key

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend_ps2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Google AI API key:

   ```
   VITE_GOOGLE_API_KEY=your_google_ai_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Available Topics

The application includes 6 predefined topics:

- Wellness & Mindfulness
- Technology Trends
- Personal Finance
- Sustainable Living
- Creative Arts
- Sports & Fitness

## 🎮 How to Use

1. **Select a Topic**: Choose from the available topics on the main screen
2. **Start Quiz**: Click "Start Quiz" to begin
3. **Answer Questions**: Select your answer from the 4 multiple-choice options
4. **Navigate**: Use "Next" to proceed to the next question
5. **Submit**: Click "Submit" on the final question to see your score
6. **Replay**: Click "Play Again" to retake the quiz

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── FlexContainer.jsx # Layout component
│   └── index.js        # Component exports
├── pages/              # Application pages
│   ├── TopicSelectionScreen.jsx # Topic selection interface
│   ├── Quiz.jsx        # Quiz interface and logic
│   └── index.js        # Page exports
├── App.jsx             # Main application component
├── main.jsx            # Application entry point with routing
└── index.css           # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### AI-Powered Question Generation

The application uses Google's Gemini AI to dynamically generate quiz questions. Each quiz contains 5 multiple-choice questions with 4 options each, ensuring fresh content every time.

### Responsive Design

Built with Tailwind CSS for a mobile-first, responsive design that works seamlessly across all device sizes.

### State Management

Uses React hooks for efficient state management, including:

- Quiz progress tracking
- Score calculation
- User selections
- Loading states

## 🔒 Environment Variables

Make sure to set up your `.env` file with the required API key:

```env
VITE_GOOGLE_API_KEY=your_actual_api_key_here
```

**Note**: Never commit your `.env` file to version control. Add it to your `.gitignore` file.

## 🚀 Deployment

To deploy this application:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service (Vercel, Netlify, etc.)

3. **Set environment variables** in your hosting platform's dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues

1. **API Key Not Working**

   - Ensure your Google AI API key is valid and has the necessary permissions
   - Check that the environment variable is properly set

2. **Build Errors**

   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors if any

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check that all CSS classes are valid

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository or contact the development team.

---

**Happy Quizzing! 🎉**
