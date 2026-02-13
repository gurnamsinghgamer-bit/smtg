// Effort Meter Functionality (Home Page)
const effortButton = document.getElementById('effort-button');
const effortText = document.getElementById('effort-text');

if (effortButton) {
    effortButton.addEventListener('click', () => {
        effortText.textContent = "Because true love is about showing up every day, making each other smile, and building a future together.";
    });
}

// Big Heart Click Functionality (Home Page)
const bigHeart = document.getElementById('big-heart');
const cloud = document.getElementById('cloud');
const popups = document.getElementById('popups');

const messages = [
    "YOU ARE THE BEST",
    "YOUUU MAKE ME THE HAPPIEST MANNN",
    "AM ALWAYSS YOURSSSS",
    "AVIIIIII FOR LIFEEEE",
    "I DIE FOR YA SMILEEE",
    "THE WAYY YOU LAUGH<333",
    "SOOOOOO CUTEEEEEEEEEEE",
    "WOWWWW YOU ARE MINEEEEE",
    "WHEN YOU KISS MEEEE EEEEEEE",
    "WHEN UHOLD MY HAND",
    "WHEN U LOOK AT ME AND SMILE",
    "WHEN WE MAKE OUTT EEEEEEEEEEEEEE",
    "YOUUU ARE SOOOOOOOOO HOTTTTT",
    "FUCKKK YOUR VOICEEEEE",
    "\"I love that being with you feels less like a choice and more like finally coming home.\"",
    "ou make me feel like the best version of myself without ever making me feel like I wasn't enough just as I am"
];

if (bigHeart) {
    bigHeart.addEventListener('click', () => {
        // Hide heart and show cloud
        bigHeart.style.display = 'none';
        cloud.style.display = 'block';
        cloud.textContent = '☁️';

        // Clear previous popups
        popups.innerHTML = '';

        // Show random popups
        setTimeout(() => {
            for (let i = 0; i < 5; i++) { // Show 5 random messages
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                const popup = document.createElement('div');
                popup.className = 'popup';
                popup.textContent = randomMessage;
                popups.appendChild(popup);
            }
        }, 1000); // Delay for animation
    });
}
function hideHeart() {
    document.getElementById("heart-page").style.display = "none";
}


// Navigation Function
function navigateTo(page) {
    window.location.href = page;

}
function hideHeart() {
    const heartPage = document.getElementById("heart-page");
    heartPage.style.display = "none";
}


