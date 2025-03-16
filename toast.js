const position = {
    TOP: "top",
    BOTTOM: "bottom",
    LEFT: "left",
    RIGHT: "right",
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    CENTER: "center",
    CENTER_LEFT: "center-left",
    CENTER_RIGHT: "center_right",
}

const createBodyNotification = (message = "") => {
    const bodyNotification = document.createElement("div");
    bodyNotification.classList.add("fai__notification__body");

    const iconNotification = document.createElement("div");
    iconNotification.classList.add("fai__icon__notification");
    iconNotification.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    const notificationTitle = document.createElement("h3");
    notificationTitle.classList.add("fai__notification__title");

    const messageNotification = document.createElement("div");
    messageNotification.classList.add("fai__message__notification");
    messageNotification.textContent = message;

    bodyNotification.appendChild(iconNotification);
    bodyNotification.appendChild(messageNotification);

    return bodyNotification;
}

const createNotification = (message = "", pos = position.TOP) => {
    const buttonSuccess = document.querySelector("#btn_success");
    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("fai__notification__container" ,pos);

    const notificationBody = createBodyNotification(message);

    notificationContainer.appendChild(notificationBody);

    button.addEventListener("click", () => {
        notificationContainer.classList.add("show");
        document.body.appendChild(notificationContainer);
    });

    deleteButton.addEventListener("click", () => {
        notificationContainer.classList.remove("show");
        notificationContainer.remove();
    });
}

const main = () => {
    createNotification("Hola esto es un mensaje de prueba!", "center");
}

main();