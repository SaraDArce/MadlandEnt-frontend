# Live Entertainment Booking Agent Website

This is a web application for a live entertainment booking agency. It allows users to browse and book live entertainment acts for various events.

## Features

- **Book Acts**: Users may inquire about booking their desired acts for their events.
- **Browse Acts**: Users can browse artists

## Stretch Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Browse Acts**: Users can browse by categories and search via favorite artists
- **Search Functionality**: Users can search for specific acts based on different criteria (e.g., genre, location, availability).
- **User Dashboard**: Users shall have a dashboard where they can manage their bookings, view past bookings, and update their profile information.
- **Admin Panel**: Admin users have access to an admin panel where they can manage acts, users, bookings, and other site content.
- **Responsive Design**: The website is optimized for various devices, including desktops, tablets, and mobile phones.

## Technologies Used

- **NPM**: Package manager for managing dependencies and scripts.
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: JavaScript runtime environment for building the backend server.
- **Express.js**: Web application framework for Node.js to handle HTTP requests and routes.
- **MongoDB**: NoSQL database for storing user data, act information, and bookings.
- **Mongoose**: MongoDB object modeling tool for Node.js to simplify interactions with MongoDB.
- **JWT (JSON Web Tokens)**: Authentication mechanism for securing user authentication and authorization.
- **React Router**: Library for routing in React.js applications.
- **CSS/SASS**: Styling languages for designing the user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MadlandEnt
   ```

2. Navigate to the project directory:

   ```bash
   cd live-entertainment-booking-agent-site
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new pull request.
