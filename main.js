function showEasterEgg() {
    const messages = [
        "You've got mail! 📧",
        "All your base are belong to us! 💾",
        "A/S/L? 👀",
        "Remember MySpace? 🤯",
        "You just got Rickrolled! 🎵",
        "Click here to win a free iPod! 📱",
        "What's 9+10?",
        "OMG, it's like 2002 all over again! 💿",
        "Welcome to the Internet! 🚀",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
