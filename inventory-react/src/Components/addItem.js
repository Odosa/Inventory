import { useRef, useState, useEffect } from 'react';
import Alert from './alertBox';

const AddItem = ({ onAdd }) => {
    const [showAlert, setShowAlert] = useState(true)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const [name, setName] = useState('')
    const [stockStatus, setStockStatus] = useState("Arrived")
    const [quantity, setQuantity] = useState(1)
    const [status, setStatus] = useState('Arrived')
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('');
    const itemRef = useRef();

    useEffect(() => {
        itemRef.current.focus();
    }, [])

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!name){
            setShowAlert(true)
            setMessageType('warning')
            setMessage('Please add an Item Name')
            setTimeout(() => {
            setShowAlert(false);
            }, 4000);
            return
        }else if(!comment){
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

        onAdd({name, stockStatus, quantity, status, date, comment})

        setName('')
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
                <h1>ADD ITEM</h1>
                <hr className="solid" />
                <div className="form-control">
                    <label><b>NAME</b></label>
                    <input type="text" className="name" placeholder="Add name" ref={itemRef} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor=""><b>Quantity</b></label>
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
                    <input type="date" className="form-control-date" max={"<?= date('Y-m-d'); ?>"} onChange={(event) => setDate(event.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor=""><b>Comment</b></label>
                    <input type="text" className="name" placeholder="Returned by/ Given to person's name" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>

                <input type="submit" value="save item" className="btn" />
            </form>
        </div>
    </>
)
}

export default AddItem