class ToastyFai {

    constructor() {
        this.toasts = [];
        this.defaultOptions = {
            duration: 3000,
            position: "top-right"
        }
    }

    dismiss(id) {
        this.toasts = this.toasts.filter((e) => e.id !== id);
        document.querySelector(`#toast-${id}`)?.remove();
    }

    #show(message = "", options = {}) {
        const id = Date.now();
        const toast = { id, message, ...this.defaultOptions, ...options };
        this.toasts.push(toast);
        setTimeout(() => this.dismiss(id), toast.duration);
    }

    success(message, options = {}) {
        this.#show(message, { ...options, type: "success" });
    }

    error(message, options = {}) {
        this.#show(message, { ...options, type: "error" });
    }

    info(message, options = {}) {
        this.#show(message, { ...options, type: "info" });
    }

    warning(message, options = {}) {
        this.#show(message, { ...options, type: "warning" });
    }

    neutral(message, options = {}) {
        this.#show(message, { ...options, type: "neutral" });
    }

    #clearClass(element) {
        Array.from(element.classList).forEach((e) => e.startWith('variant-') && element.classList.remove(e));
    }

    render(toast) {
        const buttonsVariant = document.querySelectorAll(".button-action");
        const notificationContainer = document.createElement("div");
        notificationContainer.id = `#toast-${toast.id}`
        notificationContainer.classList.add("toastifai__notification__container", options.pos);

        const notificationBody = createBodyNotification(options);
        notificationContainer.appendChild(notificationBody);

        buttonsVariant.forEach(elem => {
            elem.addEventListener("click", (e) => {
                const { dataset } = e.target;
                this.#clearClass(notificationContainer);
                notificationContainer.classList.add("show", dataset.variant);
                document.body.appendChild(notificationContainer);
            });
        });
    }
}