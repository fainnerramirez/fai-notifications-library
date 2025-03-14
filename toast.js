const createNotification = () => {}

const createHeaderNotification = () => {
    const headerNotification = document.createElement("div");
    headerNotification.classList.add("fai__notification__header");
    return headerNotification;
}

const createBodyNotification = () => {
    const bodyNotification = document.createElement("div");
    bodyNotification.classList.add("fai__notification_body");
    return bodyNotification;
}