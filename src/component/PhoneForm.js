import React, { Component } from 'react'

class PhoneForm extends Component {
    input = React.createRef();
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            name: '',
            phone: ''
        })
        this.input.current.focus()

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" onChange={this.handleChange} placeholder="이름" value={this.state.name} ref={this.input} />
                <input name="phone" onChange={this.handleChange} placeholder="전화번호" value={this.state.phone} />

                <button type="submit">등록</button>
            </form >
        )
    }
}


export default PhoneForm;