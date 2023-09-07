const notButton = document.getElementById("notButton");
const yesButton = document.getElementById("yesButton");

notButton.addEventListener("mouseover", () => {
    // const randomX = Math.floor(Math.random() * (window.innerWidth ));
    const randomX = Math.floor(Math.random() * ((window.innerWidth / 4) - ((window.innerWidth / 4) * -1)) + ((window.innerWidth / 4) * -1));
    // const randomY = Math.floor(Math.random() * (window.innerHeight));
    const randomY = Math.floor(Math.random() * ((window.innerHeight / 4) - ((window.innerHeight / 4) * -1)) + ((window.innerHeight / 4) * -1));
    notButton.style.position = "relative";
    notButton.style.left = `${randomX}px`;
    notButton.style.top = `${randomY}px`;
});

notButton.addEventListener("click", function () {
    console.log("Botão NAO clicado!");
    // const randomX = Math.floor(Math.random() * (window.innerWidth ));
    const randomX = Math.floor(Math.random() * ((window.innerWidth / 4) - ((window.innerWidth / 4) * -1)) + ((window.innerWidth / 4) * -1));
    // const randomY = Math.floor(Math.random() * (window.innerHeight));
    const randomY = Math.floor(Math.random() * ((window.innerHeight / 4) - ((window.innerHeight / 4) * -1)) + ((window.innerHeight / 4) * -1));
    notButton.style.position = "relative";
    notButton.style.left = `${randomX}px`;
    notButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", function () {
    console.log("Botão SIM clicado!");
    location.href = "https://www.instagram.com/reel/CwWAlTrRSLv/?igshid=MWZjMTM2ODFkZg==";
});
