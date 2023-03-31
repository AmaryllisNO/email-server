<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css" integrity="sha512-KFOzQ4O4N68TDGQlDUib6hG0f0+3JACgLjt+tKrX8ns0hU6+H0dRULx/lplg8nIJ7YHjEiJZ7VckTebI1zptfw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js" integrity="sha512-Hjoj+D0ohZ8h4wQ4cddLVm5uzb1GGyB0vS5S5/5Hnk6/7Og8Rv6tnJf6NHNz6QfdyF8Xz3h/aTdbIDztBQ2dIw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-jsx.min.js" integrity="sha512-+b0DdNl1BQ2+R/fAwwtF2DmOUpUPKVd0p5m+fszqJS+v5/KY73zjJtRMYZt1QZtMdRPbcWJg8rP5o5a3y5/+OA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
  <body>
    <h1>Node.js Email Server App</h1>
    <p>This is a Node.js-based email server application that allows users to send and receive emails using a simple web interface. The app is built using the <a href="https://expressjs.com/">Express</a> web framework and <a href="https://nodemailer.com/about/">Nodemailer</a> email client library.</p>
    <h2>Installation</h2>
    <ol>
      <li>Clone the repository to your local machine:
        <pre><code>git clone https://github.com/AmaryllisNO/email-server</code></pre>
      </li>
      <li>Navigate to the project directory:
        <pre><code>cd email-server</code></pre>
      </li>
      <li>Install the dependencies:
        <pre><code>npm i</code></pre>
      </li>
      <li>Configure the app by creating a <code>.env</code> file in the root directory and adding the following environment variables:
        <pre><code>
MYEMAIL=your_email
MYPASSWORD=your_password
        </code></pre>
        <p>Here we're using gmail as a service to send out our emails. To generate a password you need to go to your gmail account -> security -> app passwords, and add a new app. You can then populate the env variables with your own. </p>
      </li>
      <li>Start the app:
        <pre><code>npm start</code></pre>
        <p>The app will start listening on port 8080 by default. You can access it by navigating to <code>http://localhost:8080</code> in your web browser.</p>
      </li>
    </ol>
    <h2>Usage</h2>
    <ol>
      <li>This is the endpoint you'll be using for sending emails:
        <pre><code>http://localhost:8080/send-email</code></pre>
      </li>
      <li>Here's an example of how you can use the endpoint to send an  email via a form. This example is made with React and TypeScript. 
      <pre><code class="language-jsx">const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let name = state.name;
    let senderEmail = state.email;
    let subject = state.subject;
    let message = state.message;
    axios
      .post('https://emailer.fly.dev/send-email', {
        name,
        senderEmail,
        subject,
        message,
      })
      .then(() => {
        alert('Message sent!');
      })
      .catch(() => alert('Message failed to send!'));
  };</pre></code>
      </li>
    </ol>
    <h2>Contributing</h2>
    <p>If you'd like to contribute to the project, feel free to submit a pull request or open an issue on the <a href="https://github.com/yourusername/email-server-app">GitHub repository</a>.</p>

  </body>
</html>
