const config = require('../config/line')

exports.handleMessage = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === "promotion") {
        msg = { type: "text", text: "มีโปรโมชั่น ราคา 1,500 บาท" }
    } else if (msgText === "ต้น") {
        msg = { type: "text", text: "รถเสียทำไมไม่ใช้ได้เกียวละเพราะใช้แล้วเครื่องฟิตสตาติดง่าย" }
    } else if (msgText === "love") {
        msg = {
            "type": "sticker",
            "packageId": "446",
            "stickerId": "1988"
        }
    }
    else {
        msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" }
    }
    return config.client.replyMessage(event.replyToken, msg)
}