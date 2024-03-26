const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require("nodemailer");
const cron = require('node-cron');

const PORT = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));



// Define a cron job to send emails every second


app.get("/",async(req,res)=>{
//    res.send("Hello person");
   res.render('index');
})

app.post('/submit-form', (req, res) => {
    const { email } = req.body;
    // Do something with the form data (e.g., save to database, send email, etc.)
    console.log('Received form submission:', { email });
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'billy.ratke22@ethereal.email',
      pass: 'BRhpdZ6FkzUMjAApUY'
    },
  });
    cron.schedule('* * * * * *', async () => {
        try {
          // Send mail with defined transport object
          const info = await transporter.sendMail({
            from: '"Maddison Foo Koch " <billy.ratke22@ethereal.email>',
            to: email,
            subject: "Server si sending everny second mail.",
            text: "Welcome to the world of digital mail",
            html: "<b>Hello, how are you customer?</b>",
          });
      
          console.log("Message sent: %s", info.messageId);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      });
    res.send('Form submitted successfully!');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
