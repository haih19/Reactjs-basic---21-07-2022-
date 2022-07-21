import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homeworks' },
            { id: 'todo2', title: 'Washing dishes' },
            { id: 'todo3', title: 'Making videos' },
            { id: 'todo4', title: 'fixing bugs' },
        ],
        editTodo: {
            id: '',
            title: ''
        }
    }

    addNewJob = (todo) => {
        console.log(todo);
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Added!')
    }

    handleOnClickDelete = (element) => {
        let currentState = [...this.state.listTodos]
        currentState = currentState.filter((todo) => {
            return todo.id !== element.id
        })
        this.setState({
            listTodos: currentState
        })
        toast.error(`${element.id} just deleted!`)
    }

    handleOnClickEdit = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleOnClickSave = () => {
        let listTodosCopy = [...this.state.listTodos]
        let { editTodo } = this.state
        listTodosCopy = listTodosCopy.map((element) => {
            if (element.id === editTodo.id) {
                element = editTodo
                return element
            }
            return element
        })

        this.setState({
            listTodos: listTodosCopy,
            editTodo: {}
        })
        toast.info('Save!')
    }

    render() {
        let { listTodos, editTodo } = this.state;

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewJob={this.addNewJob}
                ></AddTodo>
                <div className="list-todo-content">
                    {listTodos.map((element, index) =>
                        <div className="todo-child" key={index} >
                            {editTodo.id !== element.id ?
                                <>
                                    <div className="child-content">{index + 1} - {element.title} </div>
                                    <div className="btn-container">
                                        <button onClick={() => this.handleOnClickEdit(element)} className="btn btn-edit">Edit</button>
                                        <button onClick={() => this.handleOnClickDelete(element)} className="btn btn-delete">Delete</button>
                                    </div>
                                </>

                                :
                                <>
                                    <div className="child-content">{index + 1} - <input onChange={this.handleOnChangeEdit} type="text" value={editTodo.title} /> </div>
                                    <div className="btn-container">
                                        <button onClick={this.handleOnClickSave} className="btn btn-save">Save</button>
                                        <button onClick={() => this.handleOnClickDelete(element)} className=" btn btn-delete">Delete</button>
                                    </div>
                                </>
                            }


                        </div>
                    )}
                </div>
            </div >
        )
    }
}

export default ListTodo;