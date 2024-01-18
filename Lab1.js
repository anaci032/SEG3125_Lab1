document.getElementById("beginSurveyBtn").addEventListener("click", function() {
    var additionalText = document.getElementById("additionalText");
    additionalText.classList.toggle("hidden");
    
});
document.addEventListener('DOMContentLoaded', function () {
    // Get all radio buttons and the text box element
    const radioButtons = document.querySelectorAll('input[name="useOfYouTube"]');
    const otherOptionInput = document.getElementById('otherOptionInput');

    // Add an event listener to each radio button
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            // Toggle the visibility of the text box based on the selected radio button
            otherOptionInput.style.display = (radioButton.value === 'Other' && radioButton.checked) ? 'block' : 'none';
        });
    });
});

