const scoopsDisplay = document.getElementById("scoops");
const flavours = document.getElementsByName("flavour");
const generateBtn = document.getElementById("generate");
let colorsArray = [];

function resetScoops() {
  colorsArray.length = 0;
  scoopsDisplay.innerHTML = "";
}

function addWaferSticks() {
  const waferOption = document.getElementById("waferSticks");
  if (waferOption && waferOption.checked) {
    const rightStick = document.createElement("div");
    rightStick.classList.add("wafer-stick", "right");
    rightStick.style.animation = "stick-appear-right 0.5s ease 1.8s forwards";

    scoopsDisplay.appendChild(rightStick);
  }
}

function serveScoops() {
  resetScoops();

  flavours.forEach((flavour) => {
    if (flavour.checked) {
      colorsArray.push({
        color: flavour.value,
        flavor: flavour.id,
      });
    }
  });

  if (colorsArray.length === 0) {
    alert("Please select at least one flavour!");
    return;
  } // Limit to 6 scoops
  colorsArray = colorsArray.slice(0, 6);
  // Adjust scoop positions based on number of scoops
  const totalScoops = colorsArray.length;

  colorsArray.forEach((item, index) => {
    const scoop = document.createElement("div");
    scoop.classList.add("scoop"); // Position scoops based on total number
    if (totalScoops === 1) {
      scoop.style.top = "280px";
      scoop.style.left = "125px";
    } else if (totalScoops === 2) {
      if (index === 0) {
        scoop.style.top = "280px";
        scoop.style.left = "85px";
      } else {
        scoop.style.top = "280px";
        scoop.style.right = "85px";
      }
    } else if (totalScoops === 3) {
      if (index === 0) {
        scoop.style.top = "280px";
        scoop.style.left = "85px";
      } else if (index === 1) {
        scoop.style.top = "280px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      } else {
        scoop.style.top = "220px";
        scoop.style.left = "125px";
      }
    } else if (totalScoops === 4) {
      if (index === 0) {
        scoop.style.top = "280px";
        scoop.style.left = "85px";
      } else if (index === 1) {
        scoop.style.top = "280px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      } else if (index === 2) {
        scoop.style.top = "220px";
        scoop.style.left = "125px";
      } else {
        scoop.style.top = "160px";
        scoop.style.left = "125px";
      }
    } else if (totalScoops === 5) {
      if (index === 0) {
        scoop.style.top = "280px";
        scoop.style.left = "85px";
      } else if (index === 1) {
        scoop.style.top = "280px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      } else if (index === 2) {
        scoop.style.top = "220px";
        scoop.style.left = "85px";
      } else if (index === 3) {
        scoop.style.top = "220px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      } else {
        scoop.style.top = "160px";
        scoop.style.left = "125px";
      }
    } else if (totalScoops === 6) {
      if (index === 0) {
        scoop.style.top = "280px";
        scoop.style.left = "75px";
      } else if (index === 1) {
        scoop.style.top = "280px";
        scoop.style.right = "75px";
        scoop.style.left = "auto";
      } else if (index === 2) {
        scoop.style.top = "220px";
        scoop.style.left = "85px";
      } else if (index === 3) {
        scoop.style.top = "220px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      } else if (index === 4) {
        scoop.style.top = "160px";
        scoop.style.left = "85px";
      } else {
        scoop.style.top = "160px";
        scoop.style.right = "85px";
        scoop.style.left = "auto";
      }
    }

    scoop.classList.add(`scoop${index + 1}`);
    scoop.style.backgroundColor = item.color;

    // Add special patterns for certain flavors
    if (item.flavor === "strawberry") {
      scoop.style.backgroundSize = "30px 100px";
      scoop.style.backgroundImage =
        "radial-gradient(circle at 15px 10px, #ff8ba7 18px, transparent 18px)";
    } else if (item.flavor === "chocolate") {
      scoop.style.backgroundSize = "20px 60px";
      scoop.style.backgroundImage =
        "radial-gradient(circle at 10px 12px, #3c1414 15px, transparent 15px)";
    } else if (item.flavor === "coconut") {
      scoop.style.backgroundImage =
        "radial-gradient(circle at center, transparent 0, rgba(255,255,255,0.4) 100%)";
    }
    scoopsDisplay.append(scoop);
  });

  // Add wafer sticks if selected
  addWaferSticks();
}

generateBtn.addEventListener("click", serveScoops);
