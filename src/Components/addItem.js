import { useState } from 'react';
import Alert from './alertBox';


const AddItem = ({ onAdd }) => {
    const [showAlert, setShowAlert] = useState(true)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const [item, setItem] = useState('')
    const [inStock, setInStock] = useState(true)
    const [amount, setAmount] = useState(1)
    const [damaged, setDamaged] = useState('False')
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('')
    

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!item){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add an Item Name')
            return
        }else if(!comment){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add a comment')
            return
        }else if(!date){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add a date')
            return
        }

        onAdd({item, inStock, amount, damaged, date, comment})

        setItem('')
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
                <h1>ADD ITEM</h1>
                <div className="form-control">
                    <label htmlFor="">ITEM</label>
                    <input type="text" placeholder="Add Item" value={item} onChange={(e) => setItem(e.target.value)} />
                    <label htmlFor="">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-control-check">
                    <label htmlFor="">In Stock
                        <input type='checkbox' checked={inStock} value={inStock} onChange={(e) => setInStock(e.currentTarget.checked)}/>
                    </label>
                    <label htmlFor="damage">Damaged:</label>
                    <select name="damage" value={damaged} onChange={(e) => setDamaged(e.target.value)}>
                        <option value="False">False</option>
                        <option value="True">True</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="form-control-check">
                    <input type="date" onChange={(event) => setDate(event.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor="">Comment</label>
                    <input type="text" placeholder="Returned by person's name/ given to person's name" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>

                <input type="submit" value="save item" className="btn" />
            </form>
        </div>
    </>
)
}

export default AddItem