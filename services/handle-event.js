const service = require('./handle-message')

// event handler
exports.handleEvent = (event) => {
    switch (event.type) {
        case "message":
            switch (event.message.type) {
                case "text":
                    // console.log("text message")
                    service.handleMessage(event)
                    break;
                case "sticker":
                    console.log("sticker message")
                    break;
                default:
                    throw new Error("Unknow message" + JSON.stringify(event.message.type))
            }
            break;
        case "postback":
            console.log("postback")
            break;
        default:
            throw new Error("Unknow event" + JSON.stringify(event))
    }
}