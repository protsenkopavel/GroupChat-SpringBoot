$(function(){
    let initApplication = function()
     {
        $('.messages-and-users').css({display: 'flex'});
        $('.controls').css({display: 'flex'});
    };

    let registerUser = function(name) {
        $.post('/auth', {name: name}, function(response){
            if(response.result) {
                initApplication();
            }
        });
    };


        $.get('/init', {}, function(response){
            if(!response == "false") {
                let name = prompt('Input your name: ');
                registerUser(name);
                return;
            }
            initApplication;
        });
    });