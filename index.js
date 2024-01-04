const rollBtn = document.getElementById("rollBtn");

rollBtn.addEventListener("click", () => {
    let numOfDice = document.getElementById("numOfDice").value;
    let valuesDiv = document.getElementById("valuesDiv");
    let imgsDiv = document.getElementById("imgsDiv");
    const values = [];
    const imgs = [];

    for(let i = 1; i <= numOfDice; i++) {
        const randNum = Math.floor(Math.random() * 6) + 1;
        values.push(randNum);
        imgs.push(`<img src="image/${randNum}.png">`);
    }
    valuesDiv.innerHTML = values.join(", ");
    imgsDiv.innerHTML = imgs.join(" ");

})