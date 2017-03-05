(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function (roomId) {
            var data = $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
            //console.log(data);
            return data;
        }
        Message.createMessage = function(newMessage, roomID) {
            messages.$add({
              "roomID" : roomID,
              "content" : newMessage,
              "username" : "Timmy123",
              "sentAt" : "1"
            });
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
