import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(subject, message, to_email):
    # Set up the server (using Gmail's SMTP server)
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    from_email = 'your_email@gmail.com'  # Your email
    from_password = 'your_password'  # Your email password or app-specific password

    # Create the email
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, 'plain'))

    try:
        # Set up the server connection
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Upgrade to secure connection
        server.login(from_email, from_password)
        
        # Send the email
        server.send_message(msg)
        print(f"Email sent successfully to {to_email}")
    except Exception as e:
        print(f"Failed to send email: {e}")
    finally:
        server.quit()  # Close the server connection

# Example usage
send_email(
    subject="Test Subject",
    message="Hello! This is a test email.",
    to_email="recipient_email@example.com"
)
