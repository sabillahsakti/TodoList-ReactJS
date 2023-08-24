import logo from './logo.svg';
import './App.css';
import { FormInput, TodoItem, EditModal, DeleteModal } from "./components/index";
import React from 'react';


class App extends React.Component {
  state = {
    todos:[ 
      {
        id: 1,
        title: "reading a book"
      },
      {
        id: 2,
        title: "Workout Training"
      }
    ],

    isEdit : false,
    isDelete : false,
    editData : {
      id: "",
      title: ""
    }
  }

  update = () => {
    const {id, title} = this.state.editData
    const newData = {id, title}
    const newTodos = this.state.todos

    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
    })
  }

  setTitle = e => {
    this.setState({
      editData:{
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })
  }

  openModalDel = (id) => {
    console.log("Opening delete modal for ID:", id);
    this.setState({ 
      isDelete: true, 
      editData: { id: id } 
    });
  }

  closeModal = () => {
    this.setState({
      isEdit: false,
      isDelete: false
    })
  }

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id),
      isDelete: false
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

  render(){
    const {todos} = this.state;
    return(
      <div className="app">

        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <h3>Task List</h3>
        </div>

        <div className='list'>
          {todos.map(item =>
            <TodoItem 
              key={item.id} 
              todo={item} 
              del={this.openModalDel}
              open={this.openModal}
            />
          )}
        </div>

        <div className='input-form'>
          <FormInput add={this.addTask}/>
        </div>

        <EditModal 
          edit={this.state.isEdit} 
          close={this.closeModal} 
          change={this.setTitle}
          data = {this.state.editData}
          update={this.update}
        />

        <DeleteModal
          del={this.state.isDelete}
          close={this.closeModal}
          confirmDelete={this.deleteTask}
          todoId={this.state.editData.id}
        />
      </div>
    )
  }
}


export default App;
