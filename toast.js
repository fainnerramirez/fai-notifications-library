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
    CENTER_RIGHT: "center-right",
}

const type_notification = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info"
}

const options_notification = {
    title: "",
    message: "",
    pos: position.TOP,
    duration: 3000
}

let timeDurationNotification = null;

const createBodyNotification = (title = "", message = "", type = type_notification.SUCCESS) => {
    const bodyNotification = document.createElement("div");
    bodyNotification.classList.add("fai__notification__body");

    const iconNotification = document.createElement("div");
    iconNotification.classList.add("fai__notification__icon");

    const notificationTitle = document.createElement("h3");
    notificationTitle.classList.add("fai__notification__title");
    notificationTitle.textContent = title;

    const messageNotification = document.createElement("div");
    messageNotification.classList.add("fai__notification__message");
    messageNotification.textContent = message;

    const closeNotification = document.createElement("button");
    closeNotification.classList.add("fai__notification__close");
    closeNotification.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    const containerTextNotification = document.createElement("div");
    containerTextNotification.classList.add("fai__notification__container__text")

    switch (type) {
        case type_notification.SUCCESS: iconNotification.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; break;
        case type_notification.ERROR: iconNotification.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>'; break;
        case type_notification.INFO: iconNotification.innerHTML = '<i class="fa-solid fa-circle-info"></i>'; break;
        case type_notification.INFO: iconNotification.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'; break;
        default: iconNotification.innerHTML = '<i class="fa-solid fa-face-meh-blank"></i>'; break;
    }

    containerTextNotification.appendChild(notificationTitle);
    containerTextNotification.appendChild(messageNotification);

    bodyNotification.appendChild(iconNotification);
    bodyNotification.appendChild(containerTextNotification);
    bodyNotification.appendChild(closeNotification);

    return bodyNotification;
}

const closeNotificationEvent = () => {
    const container = document.querySelector(".fai__notification__container");
    const buttonClose = document.querySelector(".fai__notification__close");
    buttonClose.addEventListener("click", () => {
        console.log("Click en close");
        container.remove();
    });
}

const closeNotification = () => {
    const container = document.querySelector(".fai__notification__container");
    if(container) container.remove();
}

const closeByTimeDuration = (duration = 5000) => { // volver la duracion de la notificación dinámico dada por el usuario
    timeDurationNotification = setTimeout(() => {
        console.log("Se cerro la notificacion");
        closeNotification();
    }, duration);
}

const assigmentEvent = () => {
    closeNotificationEvent();
    closeByTimeDuration();
}

const createNotification = (options = options_notification) => {
    const { title, message, pos, duration, type } = options;

    const buttonSuccess = document.querySelector("#btn_success");
    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("fai__notification__container" ,pos, "show");

    const notificationBody = createBodyNotification(title, message, type);
    notificationContainer.appendChild(notificationBody);

    buttonSuccess.addEventListener("click", () => {
        notificationContainer.classList.add("show", "variant-success");
        document.body.appendChild(notificationContainer);
        assigmentEvent();
    });    
}

const main = () => {

    const options = {
        title: "Success!",
        message: "Your action was completed successfully.",
        duration: 5000,
        pos: "center",
        type: "success"
    }

    createNotification(options);
}

main();