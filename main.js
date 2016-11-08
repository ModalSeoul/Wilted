const websocket = require("nodejs-websocket");

var wsClient = websocket.connect("ws://localhost:5672", connected);

wsClient.on("error", function (error) {
    console.log("error", error);
});
wsClient.on("text", function (str) {
    var json = JSON.parse(str);
    if(json.channel == "track"){
        console.log(json);
        // alright, at this point we should scrobble to WILT
        // I'll need to look at https://github.com/ModalSeoul/Weeb-Chrome-Scrobbler/blob/master/WILT.js scrobble function to see how Modal scrobbles data
        // sending post requests, for ref: http://stackoverflow.com/questions/6158933/how-to-make-an-http-post-request-in-node-js
    }
});

function connected(){
    console.log("Connected to websocket");
}
