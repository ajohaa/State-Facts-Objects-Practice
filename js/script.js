let sharkList = document.getElementById("shark-list");

sharkList.onchange = function () {
    let selected = this.value;
    document.getElementById("shark-img").src = `img/${order}.jpg`
    document.getElementById("shark-name").textContent = (sharkData[selected].name);
    document.getElementById("scientific-name").textContent = (sharkData[selected].scientificName);
    document.getElementById("order").textContent = (sharkData[selected].order);
    document.getElementById("appearance").textContent = (sharkData[selected].appearance);
    document.getElementById("size").textContent = (sharkData[selected].size);
    document.getElementById("habitat").textContent = (sharkData[selected].habitat);
    document.getElementById("diet").textContent = (sharkData[selected].diet);
    document.getElementById("lifespan").textContent = (sharkData[selected].lifespan);
    document.getElementById("conservation-status").textContent = (sharkData[selected].conservationStatus);
    document.getElementById("fun-fact").textContent = (sharkData[selected].funFact);
};