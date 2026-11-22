class ClimbRequest {
    constructor(data) {
        this.data = data;
    }

    printLog() {
        console.log("Заявка на тренировку");
        console.log("Имя:", this.data.name);
        console.log("Уровень:", this.data.level);
        console.log("Согласие:", this.data.agree ? "Да" : "Нет");
        console.log("________________________________________");
    }
}

const form = document.getElementById("climb-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userData = {
            name: document.getElementById("name").value,
            level: document.getElementById("level").value,
            agree: document.getElementById("agree").checked
        };

        const request = new ClimbRequest(userData);
        request.printLog();
        form.reset();
    });
}