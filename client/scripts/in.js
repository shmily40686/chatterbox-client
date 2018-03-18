$(document).ready(function(){
    var app = new App("http://parse.sfm6.hackreactor.com/chatterbox/classes/messages");

 
    
    var successCallback = function(results){
        var obj = {};
        console.log(results.results[0]);
        for (var i = 0; i < results.results.length; i++) {
            if (results.results[i].roomname === undefined ||
                results.results[i].roomname === ""        ||
                results.results[i].roomname.slice(0,1) === "<"         
            ) {
                

                results.results[i].roomname = "lobby";
                
            }
            console.log(
                results.results[i])
            
  
            if ( !obj[results.results[i].roomname]) { 
                obj[results.results[i].roomname]  = results.results[i].roomname
                app.renderRoom(obj[results.results[i].roomname]);
            }
            if(results.results[i].text){
                console.log(results.results[i].text);
                app.renderMessage(results.results[i]);
            }
        }
    }
    var failureCallback = function() {
        console.log("It failed with ");
    }

    app.fetch()
    .then(successCallback)

    var username = {}
  var getUserName = function(){
       var user = window.location.search.slice(1);
       var userArr =  user.split("=");
        username = { username : userArr[1]};
  }
  
    getUserName()
    $('.submit').on("click", function(event){
        event.preventDefault()
    var conceptName = $('#roomSelect').find(":selected").text();
    app.send({username: username.username,
                text: $('#message').val(),
                room: conceptName
            });
    
    })

    $('#chats').on('click', '#username', function(){

        // if (`username is not in friends, 
        // `
        // )
           var userName = $(this).text();
           app.handleUsernameClick()
        
        //    var a = this.innerHTML
           $('#friend').append(`<div>${(userName)}</div>`)

        //    `else toggle`

        })
        
     console.log(app.handleUsernameClick);

    });
 

    


