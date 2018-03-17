// YOUR CODE HERE:
//url to use:http://parse.hrsf92.hackreactor.com/chatterbox/classes/messages

class App {
    constructor(server){
        this.server = server;
    };
    init(){
    }
    send(mess){
        $.ajax({
            url: this.server,
            type: `POST`,
            data: JSON.stringify(mess),
            contentType: `application/json`,
            success: function(data){
                console.log('chatterbox: Message sent');
            },
            error: function(data){
                console.error('chatterbox: failed to load message', data);
            }

        })

    }
    fetch(){
        $.ajax({
        url: this.server,
        // data: JSON.stringify(data),
        dataType: "text",
        type: 'GET',
        })
    }
    clearMessages(){
        $( "#chats" ).empty();
    }
    renderMessage(str){
        // $(`<div>${str}</div>`).appendTo(`#chats`)
        $( "#chats" ).append(`<div>${str}</div>`);
    }
    renderRoom(room){
        $( "#roomSelect" ).append(`<div>${room}</div>`);
    }
    // handleUsernameClick(){
    //     $('#main').find('.username');
        
        
    // }
}

var app = new App("http://parse.hrsf92.hackreactor.com/chatterbox/classes/messages");

app.fetch()

