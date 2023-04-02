import { useState } from 'react';
import Alert from './alertBox';

const EditItem = ({onSaveEdit, onEditClick, onCancel}) => {
    const [showAlert, setShowAlert] = useState(true)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const id = onEditClick.id
    const item = onEditClick.item
    const [inStock, setInStock] = useState(onEditClick.inStock)
    const [amount, setAmount] = useState(onEditClick.amount)
    const [damaged, setDamaged] = useState(onEditClick.damaged)
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

        onSaveEdit({id, item, amount, inStock, damaged, date, comment})

        setInStock(false)
        setAmount(1)
        setDamaged("False")
        setDate('')
        setComment('')
    }

return (
    <>
        {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
        <div className="add-form">
            <form className="form" onSubmit={onSubmit}>
                <h1>EDIT ITEM</h1>
                <hr className="solid" />
                <h2 className="edit-item">{onEditClick.item}</h2>
                <div className="form-control">
                        <label htmlFor="">Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                <div className="form-control-out">
                    <label htmlFor="">In Stock
                        <input type='checkbox' checked={inStock} onChange={(e) => setInStock(e.currentTarget.checked)}/>
                    </label>
                </div>
                <div className="form-control-out">
                    <label htmlFor="damage">Damaged:
                        <select name="damage" value={damaged} onChange={(e) => setDamaged(e.target.value)}>
                            <option value="False">False</option>
                            <option value="True">True</option>
                            <option value="unknown">Unknown</option>
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