document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Your first inspiring quote here.",
        "Your second inspiring quote here.",
        "Your third inspiring quote here."
        // Add as many quotes as you like
    ];

    let currentQuote = 0;
    const quoteElement = document.querySelector('.quote p');

    function changeQuote() {
        quoteElement.textContent = '"' + quotes[currentQuote] + '"';
        currentQuote = (currentQuote + 1) % quotes.length;
    }

    // Change quote every 5 seconds
    setInterval(changeQuote, 5000);

    // Set initial quote
    changeQuote();
});
