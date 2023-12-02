$(function(){
    let initApplication = function() {
        $('.messages-and-users').css({display: 'flex'});
        $('.controls').css({display: 'flex'});

        $('.send-message').on('click', function(){
            les message = $('.new-message').val();
            $.post('/message', {message: message}, function(response){
                if(response.result) {
                    $('.new-message').val('');
                } else {
                    alert('Something went wrong');
                }
            });
        });
    };

    let registerUser = function(name) {
        $.post('/auth', {name: name}, function(response){
            if(response.result) {
                initApplication();
            }
        });
    };

    $.get('/init', {}, function(response){
        if(response !== "false") {
            let name = prompt('Input your name: ');
            registerUser(name);
            return;
        }
        initApplication();
    });
});
