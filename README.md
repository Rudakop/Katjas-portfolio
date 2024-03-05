# My Developers portfolio
This application serves as my developer portfolio, showcasing my skills and projects. It utilizes various libraries and tools including React, MailJS, Font Awesome, GSAP, React animations, and Sass.

# Why Portfolio?
A portfolio is essential for any developer as it serves as a comprehensive showcase of their skills, projects, and accomplishments. It demonstrates proficiency in various technologies, showcases past work, and highlights capabilities to potential employers or clients.

# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

# Prerequisites
Ensure that Node.js is installed on your machine.

# Installation
Clone the repository to your local machine: 

git clone https://github.com/Rudakop/Katjas-portfolio.git

# Navigate to the project directory:
cd Katjas-portfolio

# Install the dependencies 
npm install
Sign Up for EmailJS:


# Start the application:
npm start
The application is now accessible at http://localhost:3000.

# Features and additional settings 
The application seamlessly sends emails to its owner, facilitating easy communication.

Go to the EmailJS website and sign up for an account if you haven't already.
1 Find Your Service ID:

2 Log in to your EmailJS account and navigate to the Integration section.
Find the service you want to use and note down its Service ID. For example, service_xxxxxx.
Create Your Email Template:

3 In the EmailJS Dashboard, go to the Email Templates section.
Create or select the email template you want to use and note down its Template ID.

4 Get Your Public Key:
In the EmailJS Dashboard, navigate to the Integration section.
Find your Public Key and note it down. For example, rxMV5Ixxxxxxxxx.

5 Set Up Environment Variables:
In React application, create or modify the .env file at the root of your project.
Add the following lines to the .env file:

REACT_APP_MY_PUBLIC_KEY="rxMV5Ixxxxxxxxx"
REACT_APP_SERVICE_ID="service_xxxxxx"
REACT_APP_TEMPLATE_ID="<YOUR_TEMPLATE_ID>"
Replace <YOUR_TEMPLATE_ID> with the Template ID you noted down in step 3.

Start or restart your React application for the changes to take effect.

Additionally, my app leverages maps and various animations to vividly demonstrate skills and expertise. With a keen eye for clean design, it ensures a visually appealing interface, coupled with clear user journeys and interactions across all elements of the website.

# Contributing
Feel free to contribute to the project by submitting issues or pull requests.

# CSS
Make sure to customize the URLs, project name, and other details based on your actual project information. Also, consider adding more sections or details depending on the complexity of your project.