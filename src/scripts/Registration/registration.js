import React, { Component } from "react";

class RegistrationForm extends Component {
    constructor(props) {
        super(props)

        // Define initial state
        this.state = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: '',
            location: "",
        }

        // Bind event handler context to this component
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
    }

    handleSubmit = function (evt) {
        evt.preventDefault()

        const newContactInfo = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            emailAddress: this.state.emailAddress,
            password: this.state.password
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            location: "",
            emailAddress: "",
            password: ""
        }))

    fetch("http://localhost:8088/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContactInfo)
    })
    .then(r => r.json())
    .then(newContact => sessionStorage.setItem("ActiveUser", JSON.stringify({
        "id": newContact.id,
        "firstName": newContact.firstName,
        "lastName": newContact.lastName,
        "email": newContact.emailAddress,
        "password": newContact.password,
        "location": newContact.location
    })))

    }.bind(this)

    handleFormFieldChange(evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value

        this.setState(stateToChange)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.firstName}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your first name" id="firstName" />

                    <input type="text"
                        value={this.state.lastName}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your last name" id="lastName" />

                    <input type="text"
                        value={this.state.emailAddress}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your email address" id="emailAddress" />

                    <input type="text"
                        value={this.state.password}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Create a password" id="password" />

                    <input type="text"
                        value={this.state.location}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your location" id="location" />


                    <button>Register</button>
                </form>
            </div>
        );
    }
    // Session storage

}



export default RegistrationForm;