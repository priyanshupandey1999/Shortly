import React from 'react'

    function ContactForm() {
        const [email, setEmail] = React.useState("");
        const [password, setPassword] = React.useState("");
      
        // const handleSubmit => {
        //   e.preventDefault();
        // //   api.login(email, password);
        // }
        return (
          <form onSubmit="handleSubmit()">
            <div>
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button>Submit</button>
          </form>
        );
      }

export default ContactForm
