(function() {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;

        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }

        home.setCurrentRoom = function(room) {
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
        }
        home.createMessage = function(newMessage) {
            Message.createMessage(newMessage, home.currentRoom.$id);
            $scope.home.newMessage.text = '';
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();
