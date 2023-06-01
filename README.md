# Ex2

this is the therd exercise in Advanced Programming 2 course.

This is a simple chat application called 'Friends' built using React for real-time communication between users.<br /> The app allows users to register and create an account, log in, and start a conversation with other users that also have an acount.

# There are 3  pages:

**Register page-**
<img width="1440" alt="צילום מסך 2023-04-24 ב-18 41 09" src="https://user-images.githubusercontent.com/116814174/234047291-c7428dac-bc76-4978-aabb-12578b553392.png">

This page is the registretion page where you need to enter all your info and press the submit button to register.<br />
the password must contain at least 1 big letter and its lenght must be over than 8 characters.<br />
If you already have an acount you can press the 'Click here' button to go to the login page.

**login page-**
<img width="1440" alt="צילום מסך 2023-04-24 ב-18 45 01" src="https://user-images.githubusercontent.com/116814174/234048267-79965a66-d451-42f8-beb4-0f961140c67d.png">


This page is the login page where you need to enter your info and press the submit button to login to your acount.<br />
Only after entering Username and password correctly the user will see his chat page.<br />
If you still don't have an acount you can press the 'Click here' button to go to the registration page.

**chat page-**

<img width="1440" alt="צילום מסך 2023-04-24 ב-18 45 33" src="https://user-images.githubusercontent.com/116814174/234048419-f255b4b9-5e7a-4aea-8b1c-1f761a51a17b.png">

This page is the chat page where you can talk and see your chats with your friends.<br />
you can press the add contact button and than add new conversation with new friend(only if they also have an acount).

you can also switch conversations by pressing the person that you want to talk to(you can see that the friend who currently talk to be with blue background in the chats list).<br />
you can logout by pressing the logout button at the top left screen corner .

**using socket.io**
in this exercise we use socket.io and therefore when one person add his friend, his friend will get a new contact.
when one person send message to his friend he will get it and will see it alive.
when one person delete his friend, the contact's frienf will refresh it.

**using server**
all the data save in database (mongodb), and therefore refreshing will not distarbe the data, and all the data will save.




##### How to run:

      a.Clone the repository.
      
      b.Open a terminal and navigate to the root directory of the project.
      
      c. Install the required dependencies by running 'npm install' in the root directory.
      
      d. Run the app using 'node app.js'.
      
      e.The app will open in your default browser at the login page, where you can register or log in to start chatting with your friends.
     
      

***have fun***
