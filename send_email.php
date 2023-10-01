<?php
if (isset($_POST['exchange'])) {
    $recipient_email = 'nitroxen.business@gmail.com';
    $subject = 'Nitro Redemption';
    $message = 'Someone successfully redeemed Nitro!';
    $headers = 'From: your-email@gmail.com' . "\r\n" .
        'Reply-To: your-email@gmail.com' . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" .
        'Content-Type: text/plain; charset=utf-8' . "\r\n";

    if (mail($recipient_email, $subject, $message, $headers)) {
        echo 'Email sent successfully';
    } else {
        echo 'Email sending failed';
    }
}
?>