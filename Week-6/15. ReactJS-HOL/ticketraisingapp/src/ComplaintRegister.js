import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props){
        super(props);

        this.state = {
            ename: "",
            complaint: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Thanks ${this.state.ename}\n\nYour Complaint was Submitted.\nTransaction ID is: ${referenceNumber}`
        );

        event.preventDefault();
    }

    render() {

        return (

            <div className="container">

                <h1>Register your complaints here!!!</h1>

                <form onSubmit={this.handleSubmit}>

                    <table>

                        <tbody>

                            <tr>
                                <td>Name:</td>

                                <td>
                                    <input
                                        type="text"
                                        name="ename"
                                        value={this.state.ename}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>

                                <td>Complaint:</td>

                                <td>
                                    <textarea
                                        name="complaint"
                                        value={this.state.complaint}
                                        onChange={this.handleChange}
                                    />
                                </td>

                            </tr>

                            <tr>

                                <td></td>

                                <td>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>

        );
    }
}

export default ComplaintRegister;