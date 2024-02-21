
# WhatsApp Clone

This is a WhatsApp clone built using MERN (MongoDB, Express.js, React, Node.js) technologies with Firebase for authentication (Auth) and OAuth.

## Features

- **Real-time Messaging**: Send and receive messages in real-time.
- **Group Chat**: Create and join group chats with multiple participants.
- **Authentication**: Sign in with email/password or using OAuth providers (Google, Facebook, etc.) via Firebase Authentication.
- **User Profiles**: Customize your profile with a display name and profile picture.
- **Media Sharing**: Share images and videos within conversations.
- **Responsive Design**: The app is optimized for various screen sizes, including desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Redux (for state management), Firebase Authentication
- **Backend**: Node.js, Express.js, MongoDB (using Mongoose)
- **Authentication**: Firebase Authentication (for email/password authentication and OAuth)
- **Real-time Messaging**: Socket.io (for real-time communication)
- **Styling**: CSS (or use a CSS framework like Bootstrap or Material-UI)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/whatsapp-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd whatsapp-clone
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up Firebase Authentication:

   - Create a Firebase project and enable Firebase Authentication.
   - Add your Firebase configuration to the frontend code.
   - Set up OAuth providers (if needed) and configure them in Firebase.

5. Start the backend server:

   ```bash
   cd server
   npm start
   ```

6. Start the frontend development server:

   ```bash
   cd client
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## Usage

1. Sign in with your email/password or using OAuth providers via Firebase Authentication.
2. Start a new conversation by selecting a contact or create/join a group chat.
3. Send messages, share media, and engage in real-time conversations.
4. Customize your profile settings and manage your contacts.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to customize this template according to your project's specific requirements and features. Additionally, make sure to replace placeholders like `yourusername` and `yourrepository` with your actual GitHub username and repository name. Let me know if you need further assistance!