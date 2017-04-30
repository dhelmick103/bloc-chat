Welcome to Bloc Chat!  Bloc Chat is a real-time client chat application that incorporate AngularJS and Firebase.  

List Chat Rooms

In this task, I added a list of chat rooms to the database in firebase.  Once complete, I created a room factory in Angular that defined all Room-related APIs.  I also created a controller and associated it with the home template.  Furthermore, I injected the Room service and displayed the rooms in the template using ng-repeat.  

[Source Code](https://github.com/dhelmick103/bloc-chat/commit/b3d5062f1a74bdab9eff7fa682af9cd319dc27de)

Checkpoint 3 – Create Chat Rooms

In this task, I included Bootstrap in the application and created the chat rooms.  I added the UI Bootstrap $uibModal Service to add a form to create a new chat room.  A separate controller was created for the modal and dependencies were injected for using the modal.  

[Source Code](https://github.com/dhelmick103/bloc-chat/commit/670f0b3a69373bd344bfd00701f81d778ef6f515)


Checkpoint 4 – List Messages

In this task, I displayed a list of message by chat room.  I also created a message factory in Angular that defines all Message-related API queries.  Furthermore, I referenced the Firebase database and injected the $firebaseArray service provided by AngularFire.  

[Source Code](https://github.com/dhelmick103/bloc-chat/commit/fadf46097aba108ce0b37be00c3fd41b481b5c53)

Checkpoint 5 – Set Username

In this task, I set username to display in the chat rooms.  To accomplish this, I included the Angular cookies module and injected the ngCookies module into the dependency array.  In the event that a user name is not present, I added logic to prompt the user to enter one before entering their message.  

[Source Code](https://github.com/dhelmick103/bloc-chat/commit/e6867025cb949cff9a97f8099265beeeec1f47c1)

Checkpoint 6 – Send Messages
In this task, I associated messages with a username in a chat room and took action to ensure that new messages are associated with no chat rooms other than the active one.

[Source Code](https://github.com/dhelmick103/bloc-chat/commit/5fd8647a77a8f42639a22631b8fd1991e45a903f)
