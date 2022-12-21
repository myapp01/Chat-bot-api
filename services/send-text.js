exports.sendText = (event) => {
    let msg

    let msgText = event.message.text.toLowerCase().trim()
    
    if (msgText === "promotion") {
        msg = { type: "text", text: "มีโปรโมชั่น ราคา 1,500 บาท" }
    } else if (msgText === "555") {
        msg = { type: "text", text: "ฮ่าๆๆๆ" }
    } else if (msgText === "love") {
        msg = {
            "type": "sticker",
            "packageId": "446",
            "stickerId": "1994"
        }
    }
    else {
        msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" }
    }
    return msg
}