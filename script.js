const sun = document.getElementById("sun")

let xPos = -5;
let yPos = 0;

function moveSun() {
    if (xPos < 5) {
        xPos += 0.01
        yPos += 0.01
    }

    else {
        xPos = -5
        yPos = 0
    }
    
    sun.setAttribute('position', `${xPos} ${yPos} -5`)
    requestAnimationFrame(moveSun)
}

moveSun()

function switchScene() {
    const scene1 = document.getElementById("scene1")
    const scene2 = document.getElementById("scene2")

    if (scene1.style.display !== 'none') {
        scene1.style.display = 'none';
        scene2.style.display = 'block';
    }

    else {
        scene1.style.display = 'block';
        scene2.style.display = 'none';
    }

}

