const storyText = document.getElementById("storyText");
const storyImage = document.getElementById("storyImage");
const embersContainer = document.createElement("div");
embersContainer.classList.add("embers-container");
document.body.appendChild(embersContainer);

// Fire sound effect
const fireSound = new Audio("asset/fire.mp3");
fireSound.volume = 0.6;

const stories = [
    { text: "ONCE, IN A FARAWAY LAND CALLED GREECE, a small yet mighty force stood against an empire.", image: "asset/image 1.png" },
    { text: "OMINOUS NEWS ARRIVED: A vast Persian army, led by the ruthless King Xerxes, was marching toward Greece.", image: "asset/image 2.png" },
    { text: "THE KING GETS THE NEWS OF THE INVASION. Knowing the odds, Leonidas still chooses to fight.", image: "asset/image 3.jpg" },
    { text: "KING XERXES COMES WITH HIS ARMY, offering surrender. The Spartans refuse, choosing glory.", image: "asset/image 4.png" },
    { text: "300 SPARTANS MARCH TO WAR, their shields gleaming in the sun, ready for the battle of their lives.", image: "asset/Untitled design.jpg" },
    { text: "THE BATTLE BEGINS. The warriors stand firm, holding the pass against impossible odds.", image: "asset/image 6.png" },
    { text: "ALL SPARTANS SACRIFICED THEIR LIVES, enough to bleed Xerxes, enough to win the war.", image: "asset/image 7.png" }
];

let currentIndex = 0;

function updateSlide(index) {
    // Play fire sound effect
    fireSound.currentTime = 0;
    fireSound.play();

    // Fade out effect
    storyImage.style.opacity = 0;
    storyText.style.opacity = 0;

    // Create ember effect
    createEmbers();

    setTimeout(() => {
        storyText.textContent = stories[index].text;
        storyImage.src = stories[index].image;

        // Fade in new content
        storyImage.style.opacity = 1;
        storyText.style.opacity = 1;
    }, 800); // Matches transition duration
}

document.getElementById("prev").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide(currentIndex);
    }
});

document.getElementById("next").addEventListener("click", function() {
    if (currentIndex < stories.length - 1) {
        currentIndex++;
        updateSlide(currentIndex);
    }
});

/* 🔥 Create Ember Effect */
function createEmbers() {
    for (let i = 0; i < 50; i++) {
        const ember = document.createElement("div");
        ember.classList.add("ember");

        // 🔹 FIXED: Corrected template literals by using string concatenation.
        ember.style.left = Math.random() * window.innerWidth + "px"; // ✅ Fixed
        ember.style.top = window.innerHeight - 10 + "px"; // ✅ Fixed

        let duration = 2 + Math.random() * 2;
        // 🔹 FIXED: Correctly setting multiple animation durations
        ember.style.animationDuration = duration + "s, " + (0.1 + Math.random() * 0.2) + "s"; // ✅ Fixed

        let size = 5 + Math.random() * 10;
        // 🔹 FIXED: Corrected template literals by using string concatenation.
        ember.style.width = size + "px"; // ✅ Fixed
        ember.style.height = size + "px"; // ✅ Fixed

        embersContainer.appendChild(ember);

        setTimeout(() => {
            ember.remove();
        }, duration * 1000);
    }
}
