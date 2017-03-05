(function() {
    function Room($firebaseArray) {
        var Room = {};

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function (room) {
            rooms.$add(room);
        };

        Room.createMesssage = function(roomId, message) {
           //add provided message to firebase, use roomIdd and userName and datetime stamp
        };

        Room.roomMessages = function (roomId) {
           //return all message for provided roomId
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
