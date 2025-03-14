const styles = `
    .fai__notification__container {
        background-color: red;
        width: 400px;
        height: 100px;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .fai__notification__header {
        padding: 10px;
    }

    .fai__notification_body {
        padding: 20px;
    }

    .top {
        position: absolute;
        top: 10px;
        left: 10px;
    }
`;

const style = document.createElement("style");
style.innerText = styles;
document.head.appendChild(style);

const position = {
    TOP: "top",
    BOTTOM: "bottom",
    LEFT: "left",
    RIGHT: "right",
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    CENTER: "center"
}

const createHeaderNotification = () => {
    const headerNotification = document.createElement("div");
    headerNotification.classList.add("fai__notification__header");
    headerNotification.textContent = "Hola que tal";

    return headerNotification;
}

const createBodyNotification = (title = "", message = "") => {
    const bodyNotification = document.createElement("div");
    bodyNotification.classList.add("fai__notification__body");

    const iconNotification = document.createElement("div");
    iconNotification.classList.add("fai__icon__notification");
    iconNotification.textContent = "ICON";

    const titleNotification = document.createElement("h3");
    titleNotification.classList.add("fai__title__notification");
    titleNotification.textContent = title;

    const messageNotification = document.createElement("div");
    messageNotification.classList.add("fai__message__notification");
    messageNotification.textContent = message;

    bodyNotification.appendChild(iconNotification);
    bodyNotification.appendChild(titleNotification);
    bodyNotification.appendChild(messageNotification);

    return bodyNotification;
}

const createNotification = (message = "", pos = position.TOP) => {
    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("fai__notification__container", pos);

    const header = createHeaderNotification();
    const body = createBodyNotification(message);

    notificationContainer.appendChild(header);
    notificationContainer.appendChild(body);

    document.body.appendChild(notificationContainer);
}

const main = () => {
    console.log("Se ejecuto el main");
    createNotification("Hola esto es un mensaje de prueba!", "top");
}

main();