var messages = [
    {
       senderType: 'user',
       name: 'Vicky',
       message: 'Heelllo'
    },
    {
       senderType: 'bot',
       name: 'Bot',
       message: 'Hey!, how may i help you!'
    },
    {
        senderType: 'user',
        name: 'Vicky',
        message: 'How are you?'
     },
     {
        senderType: 'bot',
        name: 'Bot',
        message: 'Am doing good, how about you?'
     },
     {
        senderType: 'user',
        name: 'Vicky',
        message: 'What is your company about?'
     },
     {
        senderType: 'bot',
        name: 'Bot',
        message: 'Were in the business of making our customers happy'
     },
     {
        senderType: 'user',
        name: 'Vicky',
        message: 'What is your company culture?'
     },
     {
        senderType: 'bot',
        name: 'Bot',
        message: 'Our culture is to succeed, but have fun while doing it.'
     },
];
var text = "";
for (msg of messages) {
    text += `<div class="chat-area">
                <div class="` + msg.senderType + `-msg" style="margin-left:0px;">`;
                if(msg.senderType == "bot") {
                    text += `<h4><i class="fas fa-archway"></i></h4>`;
                }
                text += `<div class="msg">
                        <p>` + msg.message + `</p>
                    </div>
                </div>
            </div>`
}
document.getElementById("demo").innerHTML = text;

function submit() {
    var demoMesssage = {
        senderType: 'user',
        name: 'Vicky',
        message: document.getElementById("message1").value.trim()
    };
    if (demoMesssage.message != "") {
        messages.push(demoMesssage);
        text += `<div class="chat-area">
                    <div class="` + demoMesssage.senderType + `-msg" style="margin-left:0px;">`;
                    if(demoMesssage.senderType == "bot") {
                        text += `<h4><i class="fas fa-archway"></i></h4>`;
                    }
                    text += `<div class="msg">
                            <p>` + demoMesssage.message + `</p>
                        </div>
                    </div>
                </div>`;
        console.log(messages);
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("message1").value = "";
}

$(document).ready(function() {	
    $('#message1').keyup(function(event) {			
        if (event.keyCode == '13' && !event.shiftKey) {
            $('#submit').submit();
        };
    });
});