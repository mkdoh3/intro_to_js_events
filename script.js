document.addEventListener("DOMContentLoaded", function () {
    //   alert("Page loaded!");

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#animal-input");
        if (input.value !== "") {
            appendList(input.value);
            input.value = "";
        }
    });

    function appendList(input) {
        const ul = document.querySelector(".list-delegation");
        const li = document.createElement("li");
        li.innerText = input;
        ul.append(li);
    }

    document.querySelector(".level-1").addEventListener("click", function (e) {
        console.log("level 1 clicked??");
        if (e.target.className === "level-3") {
            console.log("You started from level 3!!!");
        }
    });
    document.querySelector(".level-2").addEventListener("click", function (e) {
        // e.stopPropagation();
        console.log("level 2 clicked??");
    });
    document.querySelector(".level-3").addEventListener("click", function () {
        console.log("Level 3 clicked!");
    });

    document.addEventListener("keyup", (event) => {
        console.log(event);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            document.querySelector(
                ".key-event"
            ).textContent = `You pressed: ${event.key}`;
        }
    });

    const cubeAdder = document.querySelector(".add-cube");

    const cubeContainer = document.querySelector(".cube-container");

    cubeAdder.addEventListener("click", renderCube);

    function renderCube() {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.addEventListener("mouseenter", (event) => {
            console.log(this);
            event.target.classList.add("spinner");
        });
        cube.addEventListener("mouseout", function (event) {
            event.target.classList.remove("spinner");
        });
        cubeContainer.append(cube);
    }

    cubeContainer.addEventListener("click", (event) => {
        console.log(event.target);
    });

    //   cubeContainer.addEventListener("mouseenter", function(event) {
    //     event.target.classList.add("spinner");
    //   });
    //   cubeContainer.addEventListener("mouseout", function(event) {
    //     event.target.classList.remove("spinner");
    //   });

    const clickDiv = document.querySelector(".click-example");
    clickDiv.addEventListener("click", function (event) {
        if (event.target === event.currentTarget) {
            renderTagName(event.target.tagName);
            renderInnerText(event.target.innerText);
            renderCoordinates(event.clientX, event.clientY);
            changeColor(event.target);
        }
    });

    const list = document.querySelector(".list-delegation");
    list.addEventListener("click", renderListText);

    function renderListText(event) {
        if (event.target !== event.currentTarget) {
            const pTag = document.querySelector(".animal-text");
            pTag.innerText = `You clicked: ${event.target.innerText}`;
        }
    }

    function renderTagName(tagName) {
        const li = document.querySelector(".event-tag");
        li.innerText = `Tag: ${tagName}`;
    }
    function renderInnerText(text) {
        const li = document.querySelector(".event-text");
        li.innerText = `Text: ${text}`;
    }
    function renderCoordinates(x, y) {
        const li = document.querySelector(".event-coordinates");
        li.innerText = `Coordinates: X ${x}, Y ${y}`;
    }
    function changeColor(target) {
        target.style.backgroundColor = generateRandomColor();
    }
    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
