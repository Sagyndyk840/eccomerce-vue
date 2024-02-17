import { notify } from "@kyvg/vue3-notification";


const notifyError = (error) => {

    for (const key in error) {
        notify({
            title: "Валидация",
            text: error[key],
            type: 'error',
        });
    }

}

const notifyDefault = (message, type = 'success') => {
    notify({
        text: message,
        type: type,
    });
}

export {notifyError, notifyDefault}