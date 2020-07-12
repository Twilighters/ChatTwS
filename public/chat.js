$(function(){
	//make connection
	var socket = io.connect('http://localhost:3000/')

	//buttons and inputs
	var nick = $("#nick")
	var send_nick = $("#send_nick")
	var msg = $("#msg")
	var send_msg = $("#send_msg")
	var chat_window = $("#chat_window")
	var feedback = $("#feedback")

	//Emit msg
	send_msg.click(function(){
		socket.emit('new_msg', {msg : msg.val()})
	})

	//Listen on new_message
	socket.on("new_msg", (data)=>{
		feedback.html('');
		msg.val('');
		chat_window.append("<p class='msg'>" + data.nick + ": " + data.msg + "</p>")
	})

	//Emit a nick
	send_nick.click(function(){
		socket.emit('change_nick', {nick : nick.val()})
	})	
});