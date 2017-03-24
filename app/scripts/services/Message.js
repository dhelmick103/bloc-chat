(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;

        Message.getByRoomId = function (roomId) {
            var data = $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
            //console.log(data);
            return data;
        }

        Message.send = function (newMessage) {
            messages.$add(newMessage);
            newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        }

        Message.createMessage = function(newMessage, roomID) {
            messages.$add({
              "roomID" : roomID,
              "content" : newMessage,
              "username" : $cookies.get('blocChatCurrentUser'),
              "sentAt" : firebase.database.ServerValue.TIMESTAMP
            });
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
