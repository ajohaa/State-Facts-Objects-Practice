let stateList = document.getElementById("state-list");

stateList.onchange = function () {
    let selected = this.value;
    document.getElementById("info-name").src = `${stateData[selected].abbr}`.toLowerCase().jpg;
        document.getElementById("info-pic").textContent = (stateData[selected].name);
    document.getElementById("info-abbreviation").textContent = (stateData[selected].abbr);
    document.getElementById("info-capitol").textContent = (stateData[selected].capitol);
    document.getElementById("info-population").textContent = (stateData[selected].pop);
    document.getElementById("info-statehood").textContent = (stateData[selected].statehood);
    document.getElementById("info-mammal").textContent = (stateData[selected].mammal);
    document.getElementById("info-bird").textContent = (stateData[selected].bird);
    document.getElementById("info-tree").textContent = (stateData[selected].tree);
    document.getElementById("info-flower").textContent = (stateData[selected].flower);
    document.getElementById("info-nickname").textContent = (stateData[selected].nickname);
};

// oh my god i am so hungry