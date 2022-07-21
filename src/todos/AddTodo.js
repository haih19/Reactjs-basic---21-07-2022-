import React from "react";
import { toast } from 'react-toastify';



class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClickAdd = () => {

        if (this.state.title === '') {
            toast.warning('Missing title!')
            return;
        }

        let job = {
            id: `todo${(Math.floor(Math.random() * 46) + 4)}`,
            title: this.state.title
        }

        console.log(job);
        this.props.addNewJob(job)

        this.setState({
            title: ''
        })

    }


    render() {
        return (
            <div className="add-todo">
                <input onChange={this.handleOnchangeTitle} className="input-add" type="text" value={this.state.title} />
                <button onClick={this.handleOnClickAdd} className="btn-add" type="btn button">Add</button>
            </div>
        )
    }
}

export default AddTodo;