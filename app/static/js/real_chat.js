/**
 * Created by whiteunicorn on 2016. 3. 11..
 */

function escapeHtml(str) {
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

$(document).ready(function(){
    namespace = '/chat';
    var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);

    socket.on('my response', function(msg) {
        $('#log').append('<br>' + $('<div/>').text(msg.name + ': ' + msg.data).html());
        $('#log').scrollTop(999999);
    });

    // event handler for new connections
    socket.on('connect', function() {
        socket.emit('my event', {data: 'I\'m connected!'});
    });

    function sendMessage(){
        data = {
            'msg': escapeHtml($("#chat_content").val().trim())
        }

        socket.emit('my broadcast event', JSON.stringify(data));
        $('#chat_content').val('');

    }


    $('form#broadcast').submit(function(event) {
        sendMessage();
        return false;
    });
});
