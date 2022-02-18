import './../App.css';
import React, { Component, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';




class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            from_name: '',
            sender_email: '',
            message: '',
            sentSuccess: false,
            emailSent: false
            
        };
        {/*emailSent Measures whether an email has attempted to send, sentSuccess mesasures wether it worked*/ }
    }

    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({ sender_email: event.target.value })
    }

    // saves the user's message entered to state
    messageChange = (event) => {
        this.setState({ message: event.target.value })
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
            message: this.state.message,
            name: this.state.name,
            sender_email: this.state.sender_email
        }
        )
    }

    

    //Custom EmailJS method
    sendFeedback = (templateId, variables) => {
        window.emailjs.send("service_cg9yyfk", templateId,variables).then(res => {
            // Email successfully sent alert
            this.setState({ emailSent: true });
            this.setState({ sentSuccess: true });
            console.log("Hello");
            
        })

        // Email Failed to send Error alert
        .catch(err => {
            this.setState({ emailSent: true });
            this.setState({ sentSuccess: false });
            console.error('Email Error:', err)
        })
    }

    componentDidUpdate() {
        let currentDate = new Date();
        let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        let currState = "Email Sent: " + this.state.emailSent + "; Sent Success: " + this.state.sentSuccess;
        console.log(time + ": " + currState);
        if (this.state.emailSent && this.state.sentSuccess) {
            console.log("Success notification added");
        }
        else if (this.state.emailSent && this.state.sentSuccess === false) {
            console.log("Email failed to send, warning added");
        }
    }

    componentDidMount() {
        console.log("EmailSent Mounted");
        const es = this.state.emailSent;
        const ss = this.state.sentSuccess;
        this.setState({ sentSuccess: ss });
        this.setState({ emailSent: es });
    }

    componentWillUnmount() {
        this.setState({ emailSent: false });
        this.setState({ sentSuccess: false });
    }

    render() {
        return (
            <div class="form">
                <form id="form" onSubmit={this.handleSubmit}>
                    <div class="field">
                        <label class="form-label" for="name">Your Name</label>
                        <input type="text" name="name" id="name" class="form-control" onChange={this.nameChange}/>
                    </div>
                    <div class="field">
                        <label class="form-label" for="sender_email">Your Email</label>
                        <input type="text" name="sender_email" id="sender_email" class="form-control" onChange={this.emailChange} />
                    </div>
                    <div class="field">
                        <label class="form-label" for="message">Your Message</label>
                        <input type="text" name="message" id="message" class="form-control" onChange={this.messageChange} />
                    </div>
                    <input type="submit" id="button" value="Send Email" class="form-control" />
                </form>

                {this.state.emailSent && this.state.sentSuccess && <div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Email Sent<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>}
                {this.state.emailSent && this.state.sentSuccess === false && <div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Warning!</strong> Indicates a warning that might need attention.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>}
            </div>
        );
    }
};


        


/*//https://medium.com/@skinsfannick/implementing-emailjs-in-react-300989edf380 */
export default Contact;