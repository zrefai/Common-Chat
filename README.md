
# Common Chat

A React app built with Google's Firebase that allows users to message each other in real time. https://common-chat-31864.web.app/lobby

## Goal of the Project

To learn more about full-stack development. I decided to learn about Firestore and implement it as my backend for this project. I also wanted to go through the understand the process of website deployement and maintenance. 

## Details

### How does it work?

With a high level explanation, the app uses Firestore to authenticate users, store any incoming messages recieved during regular use of the website, and retrieve new messages in real time.

#### General Chatting

The main idea behind Common Chat is that you can talk to anybody currently signed into the website. When a user registers for an account they are immediately brought to the chat lobby. At which point they are able to message back and forth with other users. There are currently no private lobbies (may be added in a future update) as I just wanted to experiment with React and Firestore at a basic level.

#### Some cool things to note

The app's routes are protected. This means that an individual is not able to access the chat lobby unless they are signed into the app. This also works the other way around; a user cannot exit out of the chat lobby unless they logout. These protected routes add a small layer of security.

I did some heavy research on Firestore security rules, and the app comes with another layer of security in the backend. This security layer determines if a user has read and write priviledges. Unauthorized users or users not currently signed in will not be able to read any incoming messages or send messages in the chat lobby. 
