# Real Estate Property Website

## Live Site URL
[Your Live Site URL Here]( https://real-eastate-e5129.web.app)

## Project Description
This is a real estate property website focused on a specific category of properties. It allows users to browse properties, view details, and save properties to their list. The website implements authentication, protected routes, and dynamic features for a seamless user experience.

## Features
- 🔐 **User Authentication**: Users can register, log in, and log out using email/password authentication, Google login, and one other provider Github login.
- 🏠 **Property Listings**: Displays real estate properties dynamically based on a selected category (e.g., Industrial.).
- 🛡️ **Protected Routes**: Some pages are only accessible to logged-in users, ensuring data security.
- 📌 **Save & Delete Properties**: Users can save properties to their list and remove them as needed.
- 🎨 **Responsive Design**: Fully responsive for mobile, tablet, and desktop views.
- 📄 **Dynamic Page Titles**: Each page displays a relevant title dynamically.
- 🚀 **User Profile Management**: Users can update their profile information (name, photo, etc.) using Firebase's `updateProfile()` method.
- 🚧 **404 Page**: A custom-designed Not Found page for invalid routes.
- 🎭 **Animations & Effects**: Smooth animations using AOS, Animate.css, and Swiper slider.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, Daisy UI
- **Authentication**: Firebase Authentication
- **Routing**: React Router
- **State Management**: useState, useEffect, Context API
- **Packages Used**:
  - `react-hook-form` (For form validation)
  - `aos` (For animations)
  - `animate.css` (For CSS animations)
  - `sweetalert2` (For alert messages)
  - `swiper` (For slider functionality)

## Installation & Setup
```bash
# Clone the repository
git clone https://github.com/mohdbinharun56/Real-Estate.git
cd Real-Eastate

# Install dependencies
npm install

# Create a .env.local file and add your Firebase credentials
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
...

# Start the development server
npm run dev
```

## Usage
1. Sign up or log in to access all features.
2. Browse through real estate listings.
3. Save or remove properties from your list.
4. Update your profile from the user dashboard.
5. Logout securely when done.

## Folder Structure
```
/src
 ├── components/        # Reusable UI components
 ├── pages/             # Page components (Home, Login, Register, etc.)
 ├── assets/            # Images, icons, etc.
 ├── utilities          # Helper functions
 ├── Root.jsx           # Main application entry
 ├── index.js           # React DOM rendering
 └── firebase.config.js # Firebase configuration
```

## Future Improvements
- Add more property categories.
- Implement property search and filters.
- Improve UI/UX with advanced animations.
- Add a messaging system for buyers and sellers.

## Contributors
- **[Mohammad Bin Harun]** - [ GitHub Profile](https://github.com/mohdbinharun56)

