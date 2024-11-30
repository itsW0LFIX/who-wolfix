document.getElementById('sendButton').addEventListener('click', () => {
    const elements = document.querySelectorAll('body *'); // Select all elements on the page

    // Add creepy background sound
    const creepySound = new Audio('https://freesound.org/data/previews/453/453419_7858736-lq.mp3'); // Add your preferred spooky sound URL
    creepySound.loop = true; // Make it loop
    creepySound.play();

    // Add a second eerie sound after a delay
    setTimeout(() => {
        const eerieSound = new Audio('https://freesound.org/data/previews/426/426360_5881296-lq.mp3');
        eerieSound.loop = true;
        eerieSound.play();
    }, 4000);

    elements.forEach((element) => {
        // Apply the shake effect first (this happens immediately when the button is clicked)
        element.style.animation = 'shake 0.2s infinite';  // Vibrate/shake

        // Apply random movement and fading after a longer delay
        setTimeout(() => {
            // Stop the shaking after a short time by clearing the shake animation
            element.style.animation = ''; // Reset animation to stop shaking

            // Apply the random movement (transform) and fade-out effect
            const randomX = Math.random() * 1000 - 500; // Random X movement (-1000px to +1000px)
            const randomY = Math.random() * 1000 - 500; // Random Y movement (-1000px to +1000px)
            const randomRotation = Math.random() * 720 - 360; // Random rotation (-360deg to +360deg)

            // Apply the horror animation (random movement and fading out)
            element.style.transition = 'transform 12s cubic-bezier(0.36, 0.07, 0.19, 0.97), opacity 12s ease-in-out'; // Increased duration to 12s
            element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg) scale(${Math.random() * 2 + 0.5})`;
            element.style.opacity = '0'; // Fade out the element
        }, 500); // Apply random movement after 500ms to allow vibration to finish and to see the effect more clearly
    });

    // Create and display the "hhhhh, you can't know who I'm." message
    setTimeout(() => {
        const message = document.createElement('p');
        message.textContent = 'HHHHH, you can\'t know who I\'m.';
        message.style.fontSize = '24px';
        message.style.color = '#ff0000'; // Blood red text
        message.style.textShadow = '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000'; // Glowing effect
        message.style.textAlign = 'center';
        message.style.fontFamily = 'Courier New', 'Courier', 'monospace';
        document.body.appendChild(message);
    }, 11000); // Show the message 1 second before the reload

    // Reset the page after the animation finishes
    setTimeout(() => {
        location.reload(); // Reload the page after 12 seconds
    }, 12000); // Increased timeout to match the new animation duration
});
