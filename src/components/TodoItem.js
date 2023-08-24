import React from "react";
import Button from './Button'
import PropTypes from "prop-types"

const TodoItem = ({todo, open, del}) => {

    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text='edit' variant="success" action={() => open(todo.id, todo.title)}/>
                <Button text="delete" variant="warning" action={() => del(todo.id)}/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}
export default TodoItem

const todoItem = {
    background: "#2DA4F8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}