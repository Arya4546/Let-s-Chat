💬 Let's Chat
A real-time chat and video calling web application built with the MERN stack, styled using Tailwind CSS and DaisyUI, and powered by Stream's Chat & Video SDKs.

🚀 Live Demo
🔗 https://let-s-chat-six.vercel.app

✨ Features
🔒 User authentication and secure login

💬 Real-time 1-on-1 messaging using WebSockets

📹 Video calling between friends (powered by Stream)

👥 Friend request system: send, accept, reject

😄 Emoji reactions on messages

💡 Typing indicators & online/offline status

📱 Fully responsive UI with Tailwind CSS + DaisyUI

🛠️ Tech Stack
Frontend:

React.js

Tailwind CSS

DaisyUI

Stream Chat & Video SDK

Backend:

Node.js

Express.js

MongoDB

Socket.IO

JWT for auth

📂 Project Structure
/frontend         → React frontend (Tailwind + DaisyUI)
/backend        → Node.js backend (Express, MongoDB, Socket.IO)
/config         → Env & API configs
⚙️ Installation
Prerequisites:
Node.js & npm

MongoDB

Stream account (for API keys)

1. Clone the repo:

git clone: https://github.com/Arya4546/Let-s-Chat
cd lets-chat
2. Setup Backend
cd server
npm install
Create a `.env` file with the following:

PORT=5001
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret

npm start
3. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
Create a `.env` file with:

VITE_STREAM_API_KEY=your_stream_key
VITE_BACKEND_URL=http://localhost:5001

npm run dev

🤝 Contributing
Pull requests are welcome! If you want to improve features, UI, or fix bugs, feel free to open an issue first and discuss what you want to change.

🙋‍♂️ Author
Made with ❤️ by Arya Deep Singh

🔗 Links
[Live Website](https://let-s-chat-six.vercel.app/)

[GitHub Repo](https://github.com/Arya4546/Let-s-Chat)

[Stream API Docs](https://getstream.io/)

