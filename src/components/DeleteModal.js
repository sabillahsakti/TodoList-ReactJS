import React from "react";
import Button from "./Button";
import "../styles/EditModal.css"


class DeleteModal extends React.Component{
    render(){
        const {del, close, confirmDelete, todoId} = this.props

        if(del){
            return(
                <div>
                    <div className="modal-container">
                        <div className="modal-box">
                            <h3>Are u sure?</h3>
                            <div>
                                <Button text="yes" variant="success" action={() => confirmDelete(todoId)}/>
                                <Button text="cancel" variant="warning" action={close}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

export default DeleteModal