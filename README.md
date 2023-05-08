# Node Express Blog with EJS and Cloudinary Image Uploads

This is a simple Node Express blog that uses EJS templates to display blog posts and Cloudinary API to upload images. The application features a web interface for creating, editing and deleting blog posts, and for uploading images using Multer package.

## Installation

To run this app on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/FREDVUNI/node-express-ejs-cloudinary-blog.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory of the project and add your Cloudinary API keys. Use the `.env.example` file as a template.
4. Start the server: `npm start`
5. Open the app in your browser at `http://localhost:3000`

## Features

- View a list of all blog posts on the home page
- View a single blog post with its content and image
- Create new blog posts with images using Cloudinary
- Edit and delete existing blog posts
- Search for blog posts by title or content

## Technologies Used

- Node JS
- Express
- EJS
- Cloudinary
- Multer
- PostgreSQL
- HTML
- CSS

## Credits

- This app was created by [FREDVUNI](https://github.com/FREDVUNI).
- The Cloudinary API documentation was used for implementing image upload and storage.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
