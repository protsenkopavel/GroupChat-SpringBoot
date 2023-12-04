$(function(){

    let getMessageElement = function (message) {
        let item = $('<div class="message-item"></div>');
        let header = $('<div class="message-header"></div>');
        header.append($('<div class="datetime">' + message.datetime +'</div>'));
        header.append($('<div class="username">' + message.username +'</div>'));
        let textElement = $('<div class="message-text"></div>');
        textElement.text(message.text);
        item.append(header, textElement);
        return item;
    };

    let updateMessages = function () {
        $('.message.list').html('<i>No messages</i>');
        $.get('/message', function(response) {
            if(response.length == 0) {
                return;
            }

            $('.message.list').html('');
            for(i in response) {
                let element = getMessageElement(response[i]);
                $('.message-list').append(element);
            }
        });
    };

    let initApplication = function() {
        $('.messages-and-users').css({display: 'flex'});
        $('.controls').css({display: 'flex'});

        $('.send-message').on('click', function(){
            let message = $('.new-message').val();
            $.post('/message', {message: message}, function(response){
                if(response.result) {
                    $('.new-message').val('');
                } else {
                    alert('Something went wrong');
                }
            });
        });

        setInterval(updateMessages, 1000);
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
