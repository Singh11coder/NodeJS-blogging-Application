 A blogging application built using Node.js, Express.js, MongoDB, and EJS, designed to allow users to create, read, update, and delete blog posts in a secure and user-friendly environment. The application utilizes server-side rendering, session-based authentication, and a modular route structure to deliver a seamless blogging experience
Key Features:
1. User Authentication – Users can sign up, log in, and log out securely using JWT-based authentication stored in cookies.
2.Create & Manage Blogs – Authenticated users can create, edit, and delete blog posts.
3.Home Page Feed – Displays a list of all blogs with support for dynamic rendering using EJS templates.
4.Middleware Protection – Custom middleware checks user authentication status before accessing protected routes.
5.Image Upload Support – Users can upload images with their blog posts using Multer.
6.Session Handling – Secure cookie handling using cookie-parser to manage user sessions.
7.MongoDB Integration – Blog data is stored in MongoDB with schema validation using Mongoose.
8. Routing – Organized routes for blog and user-related operations with separation of concerns.

// Home Page Of App
![Screenshot (605)](https://github.com/user-attachments/assets/d4acc408-593d-4020-bd01-e18f8db4cbf9)
![Screenshot (606)](https://github.com/user-attachments/assets/4051c67f-a313-4ea2-8d76-d7d227b00af1)

// Creating New User For Adding Blogs
![Screenshot (607)](https://github.com/user-attachments/assets/f5308de3-3c28-443f-ae49-a423e9afbec6)

//Authentication OR Login/Signin
![Screenshot (608)](https://github.com/user-attachments/assets/b25cdc4b-e24e-48e2-aa9f-214b6c322556)

//Login User Can View The Blogs And Can Comment on Blog
![Screenshot (609)](https://github.com/user-attachments/assets/04a5ccd1-edb1-43e5-9a0b-0495d54e954f)
Only Login User Can View Comments and Can Can Comment



