document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulating form submission success
    document.getElementById("confirmation").style.display = "block";
    setTimeout(() => {
        document.getElementById("confirmation").style.display = "none";
    }, 3000);
    
    // Reset form
    this.reset();
});
