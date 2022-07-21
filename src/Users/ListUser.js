import React from "react";
import axios from "axios";
import './listUser.scss'


class ListUser extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="list-todo-container">
                <div>List Users</div>
                <div className="list-todo-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((element, index) =>
                            <div className="todo-child" key={element.id}>
                                <div className="child-content">{index + 1} - {element.first_name} {element.last_name} </div>
                                <div className="btn-container">
                                    <button className="btn btn-detail">Details</button>
                                    <button className="btn btn-edit">Edit</button>
                                    <button className="btn btn-delete">Delete</button>
                                </div>
                            </div>
                        )}
                </div>
            </div >
        )
    }
}

export default ListUser