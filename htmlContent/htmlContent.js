const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Saved Confirmation</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 5px; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        .header { text-align: center; padding: 10px 0; border-bottom: 1px solid #dddddd; }
        .header h1 { margin: 0; color: #333333; }
        .content { padding: 20px; text-align: center; }
        .content p { font-size: 16px; color: #555555; line-height: 1.5; }
        .footer { text-align: center; padding: 10px 0; border-top: 1px solid #dddddd; margin-top: 20px; color: #999999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="color: green">User Saved Successfully !</h1>
        </div>
        <div class="content">
            <p style="color: blue">Dear [User],</p>
            <p>Your account has been successfully saved in our system.</p>
            <p>If you have any questions or need further assistance, feel free to reach out to our support team.</p>
            <p>Thank you for choosing our service!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

module.exports = htmlContent;