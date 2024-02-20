document.addEventListener("DOMContentLoaded", () => {
    let pathToVideo = []
    const buttonNextNotNormal = document.querySelector("#nextButtonAbNormal");
    const buttonNextNormal = document.querySelector("#nextButtonNormal");
    let currentVideo = "start";
    displayVideo("2023-05-17 13-01-39.mkv");

    data.forEach(element => {
        if (element.normal === true && element.after === currentVideo) {
            buttonNextNormal.innerText = element.videoName
        } else if (element.normal === false && element.after === currentVideo) {
            buttonNextNotNormal.innerText = element.videoName
        }
    });
    buttonNextNormal.addEventListener("click", () => {
        data.forEach(element => {
            element.after.split("/").forEach((after), () => {
                setVideoAndButtonsNormal(after)
            })
            pathToVideo.push(element.after)
        });
    });
    buttonNextNotNormal.addEventListener("click", () => {
        data.forEach(element => {
            element.after.split("/").forEach((after), () => {
                setVideoAndButtonsNotNormal(element)
            })
            pathToVideo.push(element.after)
        });
    });
    const navBar = document.querySelector(".navBar")
    pathToVideo.forEach((elementPath) => {
        const buttonElement = document.createElement("button")
        buttonElement.innerText(elementPath)
        navBar.appendChild(buttonElement)
    })
});

function displayVideo(name) {
    const videoElement = document.getElementById("video");
    videoElement.src = `videos/${name}`;
}
function setVideoAndButtonsNormal(element) {
    if (element.normal === true && element === currentVideo) {
        currentVideo = element.videoName;
        buttonNextNormal.innerText = element.videoName
        displayVideo(element.videoPath);
    } else if (element.normal === false && element === currentVideo) {
        buttonNextNotNormal.innerText = element.videoName
    }
}
function setVideoAndButtonsNotNormal(element) {
    if (element.normal === false && element === currentVideo) {
        currentVideo = element.videoName;
        buttonNextNotNormal.innerText = element.videoName
        displayVideo(element.videoPath);
    } else if (element.normal === true && element === currentVideo) {
        buttonNextNormal.innerText = element.videoName
    }

}

const data = [
    {
        "videoName": "Introduction to JavaScript",
        "videoPath": "2023-05-17 13-01-39.mkv",
        "after": "",
        "normal": false
    },
    {
        "videoName": "React Tutorial (Normal)",
        "videoPath": "2023-06-29 12-56-10.mkv",
        "after": "start",
        "normal": true
    },
    {
        "videoName": "Node.js Basics",
        "videoPath": "2023-06-29 13-38-13.mkv",
        "after": "start",
        "normal": false
    }
];
