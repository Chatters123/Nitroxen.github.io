document.addEventListener("DOMContentLoaded", function () {
    // ... Other code ...

    // Add an event listener to the "Exchange" button
    const exchangeButton = document.getElementById("exchangeButton");
    exchangeButton.addEventListener("click", function () {
        // Send an AJAX request to trigger the email sending
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Email sent successfully, show a message to the user
                    alert("Email sent successfully");
                } else {
                    // Email sending failed, show an error message to the user
                    alert("Email sending failed");
                }
            }
        };
        xhr.send("exchange=true");
    });

    // ... Other code ...
});