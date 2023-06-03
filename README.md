# Ex2

this is  exercise 2 in Advanced Programming 2 course.

Friends is a simple chat application built using React for real-time communication between users.<br /> The app allows users to register and create an account, log in, and start conversations with other registered users.

# There are 3  pages:

**Register page-**
<img width="1440" alt="צילום מסך 2023-04-24 ב-18 41 09" src="https://user-images.githubusercontent.com/116814174/234047291-c7428dac-bc76-4978-aabb-12578b553392.png">

The register page is where users can create a new account by providing their information and clicking the submit button.<br /> The password must contain at least one uppercase letter and be at least 8 characters long. If a user already has an account, they can click the "Click here" button to navigate to the login page.

**login page-**
<img width="1440" alt="צילום מסך 2023-04-24 ב-18 45 01" src="https://user-images.githubusercontent.com/116814174/234048267-79965a66-d451-42f8-beb4-0f961140c67d.png">


The login page allows registered users to log in to their accounts by entering their credentials and clicking the submit button.<br /> Only after entering the correct username and password, the user will be redirected to the chat page.<br /> If a user doesn't have an account yet, they can click the "Click here" button to navigate to the registration page.

**chat page-**

<img width="1440" alt="צילום מסך 2023-04-24 ב-18 45 33" src="https://user-images.githubusercontent.com/116814174/234048419-f255b4b9-5e7a-4aea-8b1c-1f761a51a17b.png">

The chat page is where users can engage in real-time conversations with their friends.<br />
Users can add new conversations by clicking the "Add Contact" button and initiating a conversation with another registered user.<br />
The current conversation is highlighted with a blue background in the chat list. <br />
Users can switch between conversations by selecting the person they want to talk to.<br />
Users can also delete the chat with a peson by click the delete button after chosing this contact.<br />
To log out, users can click the "Logout" button located at the top-left corner of the screen.



## How to Run

1. Clone the repository.

2. Open a terminal and navigate to the root directory of the project.

3. Install the required dependencies by running the command `npm install` in the root directory.

4. Run the app using `node app.js`.

5. Open any browser and navigate to [http://localhost:5000](http://localhost:5000), where you can register or log in to start chatting with your friends.
      

## Database

Friends uses MongoDB as its database to store user information and chat data. Make sure you have MongoDB installed on your system and running before starting the application. 

**MongoDB Setup**

To use MongoDB with the Friends chat application, please follow these steps to set up your MongoDB database:

1. Install MongoDB: Visit the [MongoDB website](https://www.mongodb.com/) and download the latest version of MongoDB for your operating system. Follow the installation instructions provided for your specific operating system.

2. Start MongoDB: Once MongoDB is installed, you need to start the MongoDB service. The process for starting the service may vary depending on your operating system. Here are a few common commands:

   - **Windows**: Open a command prompt as an administrator and run the following command: `mongod`

   - **Mac/Linux**: Open a terminal and run the following command: `sudo service mongod start`
   


      
      

