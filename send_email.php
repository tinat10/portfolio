<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "tinathai05@gmail.com";
    $subject = "New Message from Contact Form";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
