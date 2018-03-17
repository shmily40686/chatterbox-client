$(document).ready(function(){
    console.log("test");
    $('.submit').on("click", function(event){
        event.preventDefault()

        var val = $('#message').val()
    $('#chats').append(`<div id='message'>${val}</div>`)
    send(val);
    })
});