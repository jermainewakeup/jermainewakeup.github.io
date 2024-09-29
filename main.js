function showEasterEgg() {
    const messages = [
        "You've got mail! 📧",
        "All your base are belong to us! 💾",
        "A/S/L? 👀",
        "Remember MySpace? 🤯",
        "You just got Rickrolled! 🎵",
        "Click here to win a free iPod! 📱",
        "LOL! So random! 😜",
        "OMG, it's like 2003 all over again! 💿",
        "Welcome to the Internet! 🚀",
        "Are you still using dial-up? 🖥️"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
