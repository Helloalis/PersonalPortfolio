import './../App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            from_name: '',
            sender_email: '',
            message: ''
        };
    }

    componentDidMount() {
        this.setState({message: "Hello! Enter your message here"});
        this.setState({name: "Your name goes here" });
        this.setState({ sender_email: "youremail@email.com" });
    }

    componentDidUpdate() {
        this.setState({ message: "Hello! Enter your message here" });
        this.setState({ name: "Your name goes here" });
        this.setState({ sender_email: "youremail@email.com" });
    }

    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    // saves the user's message entered to state
    messageChange = (event) => {
        this.setState({ feedback: event.target.value })
    }

    //onSubmit of email form
    handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'template_37s5ljk';

        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
            message: this.state.feedback,
            name: this.state.name,
            email: this.state.email
        }
        )
    }

    //Custom EmailJS method
    sendFeedback = (templateId, variables) => {
        window.emailjs.send("service_cg9yyfk", templateId,variables).then(res => {
            // Email successfully sent alert
            alert("Email Successfully Sent");
        })

        // Email Failed to send Error alert
        .catch(err => {
            alert("Email Failed to Send");
            console.error('Email Error:', err)
        })
    }

    render() {
        return (
            <div class="form">
                <form id="form" onSubmit={this.handleSubmit}>
                    <div class="field">
                        <label class="form-label" for="from_name">Your Name</label>
                        <input type="text" name="from_name" id="from_name" class="form-control" />
                    </div>
                    <div class="field">
                        <label class="form-label" for="sender_email">Your Email</label>
                        <input type="text" name="sender_email" id="sender_email" class="form-control" />
                    </div>
                    <div class="field">
                        <label class="form-label" for="message">Your Message</label>
                        <input type="text" name="message" id="message" class="form-control" />
                    </div>
                    <input type="submit" id="button" value="Send Email" class="form-control" />
                </form></div>
        );
    }
};
/*//https://medium.com/@skinsfannick/implementing-emailjs-in-react-300989edf380 */
export default Contact;