exports.sendImage = () => {
    let msg = {
        type: "image",
        originalContentUrl: process.env.BASE_URL + "/images/2.png",
        previewImageUrl: process.env.BASE_URL + "/images/1.png",
    };

    return msg;
};
