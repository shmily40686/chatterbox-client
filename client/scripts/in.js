$(document).ready(function(){
    $('.submit').on("click", function(event){
        event.preventDefault()
    
    app.send({username: "test",
                text: "test",
                room: "lobby"
            });
    
})
    console.log(app.server);
    console.log($.ajaxPrefilter)
    // app.send("test");
    // app.fetch();
  
    //  $.ajax({
    //         url: this.server,
    //         type: `POST`,
    //         // data: "",
    //         contentType: `application/json`,
    //          success: function(data){
    //                   console.log("cool");
    //         },
    //         error: function(data){
    //             console.error('chatterbox: failed to load message', data);
    //         }
    //     })

    //  $.ajax({
    //     url: app.server, 
    //     type: 'GET',
    //     // data: JSON.stringify(data),
    //     // dataType: "text",
    //     contentType: "application/json",
    //     success: function(data) {
    //         console.log('chatterbox messages got')
    //     },
    //     error: function(err) {
    //         console.error('ERROR', err);
    //     }
    // })
    
});

