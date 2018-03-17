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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            contentType: `application/json`,
            dataType: "text",
            success: function(data){
                      console.log(mess);
                     $( "#chats" ).append(`<div id=username >${mess.user}</div>
                    <div id=text>${mess.text}</div>
                    <div id=${mess.renderRoom}></div>
                    
                    `);
            },
            error: function(data){
                console.error('chatterbox: failed to load message', data, this.data);
            }

        })

    }
    fetch(){
        $.ajax({
        url: this.server,
        // data: JSON.stringify(data),
        dataType: "text",
        success: function(data) {
            console.log('chatterbox messages got', data)
        },
        error: function(err) {
            console.error('ERROR', err);
        },
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

var app = new App("http://parse.sfm6.hackreactor.com/chatterbox/classes/messages");

// app.fetch()

