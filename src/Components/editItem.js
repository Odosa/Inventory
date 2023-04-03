import { useState } from 'react';
import Alert from './alertBox';

const EditItem = ({onSaveEdit, onEditClick, onCancel}) => {
    const [showAlert, setShowAlert] = useState(true)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const id = onEditClick.id
    const name = onEditClick.name
    const [stockStatus, setStockStatus] = useState(onEditClick.stockStatus)
    const [quantity, setQuantity] = useState(onEditClick.quantity)
    const [status, setStatus] = useState(onEditClick.status)
    const [date, setDate] = useState(onEditClick.date)
    const [comment, setComment] = useState(onEditClick.comment)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!comment){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add a comment')
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
            return
        }else if(!date){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add a date')
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
            return
        }

        onSaveEdit({id, name, quantity, stockStatus, status, date, comment})

        setStockStatus("Arrived")
        setQuantity(1)
        setStatus("Arrived")
        setDate('')
        setComment('')
    }

    const onChange = (e) => {
        setStatus(e.target.value)
        setStockStatus(e.target.value)
    }

return (
    <>
        {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
        <div className="add-form">
            <form className="form" onSubmit={onSubmit}>
                <h1>EDIT ITEM</h1>
                <hr className="solid" />
                <h2 className="edit-name">{onEditClick.name}</h2>
                <div className="form-control">
                        <label htmlFor="">Quantity</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                <div className="form-control-out">
                    <label htmlFor="status">Status:
                        <select name="status" value={status} onChange={onChange}>
                            <option value="Arrived">Arrived</option>
                            <option value="Ordered">Ordered</option>
                            <option value="Shipping">Shipping</option>
                        </select>
                    </label>
                </div>
                <div className="form-control-out">
                    <input type="date" className="form-control-date" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor="">Comment</label>
                    <input type="text" placeholder="Returned by/ Given to person's name" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>

                <input type="submit" value="save" className="btn" />
                <input type="button" onClick={onCancel} value="cancel" className="btn cancelBtn" />
            </form>
        </div>
    </>
)
}

export default EditItem