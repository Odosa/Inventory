import { useRef, useState, useEffect } from 'react';
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
    const [comment, setComment] = useState('');
    const itemRef = useRef();

    useEffect(() => {
        itemRef.current.focus();
    }, [])

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!item){
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
                <hr className="solid" />
                <div className="form-control">
                    <label><b>ITEM</b></label>
                    <input type="text" className="item" placeholder="Add Item" ref={itemRef} value={item} onChange={(e) => setItem(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor=""><b>Amount</b></label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-control-out">
                    <label htmlFor="">In Stock
                        <input type='checkbox' checked={inStock} value={inStock} onChange={(e) => setInStock(e.currentTarget.checked)}/>
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
                    <input type="date" className="form-control-date" max={"<?= date('Y-m-d'); ?>"} onChange={(event) => setDate(event.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor=""><b>Comment</b></label>
                    <input type="text" className="item" placeholder="Returned by/given to person's name" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>

                <input type="submit" value="save item" className="btn" />
            </form>
        </div>
    </>
)
}

export default AddItem