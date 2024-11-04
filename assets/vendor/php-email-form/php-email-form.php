<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email receiver
    $to = "info@gmc.web.id";

    // Email subject
    $email_subject = "Pesan dari: $name";

    // Email content
    $email_body = "Anda menerima pesan baru.\n\n".
                  "Detail:\n\nName: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message:\n$message";

    // Headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    mail($to, $email_subject, $email_body, $headers);
    echo "Pesan Anda telah terkirim. Terima kasih!";
} else {
    echo "Terjadi kesalahan. Silakan coba lagi.";
}
?>