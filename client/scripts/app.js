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
                     $( "#chats" ).append(`<div id=username >${mess.username}</div>
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
        return $.ajax({
            url: this.server,
            type: 'GET',
            contentType: `application/json`,
            // dataType: "text",
            success: function(data) {
                console.log('chatterbox messages got', data)
                return data;
            },

        })
     
    }
    clearMessages(){
        $( "#chats" ).empty();
    }
    renderMessage(mess){
           $( "#chats" ).append(`<div id="chatbox" class="${mess.roomname}"><div id="username">${mess.username}</div> <div id="text">${mess.text}</div> </div>
                    `);
    }
    renderRoom(room){
        $( "#roomSelect" ).append(`<option>${room}</option>`);
    }
    handleUsernameClick(){
        console.log("test");
         return true;
        }

        
}

    var app = new App("http://parse.sfm6.hackreactor.com/chatterbox/classes/messages");


