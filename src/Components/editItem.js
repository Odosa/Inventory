import { useState } from 'react'



// const EditItem = (onEdit) => {
const EditItem = ({onSaveEdit, onEditClick}) => {
    const [inStock, setInStock] = useState(false)
    const [damaged, setDamaged] = useState('False')
    const [date, setDate] = useState('')
    const [comment, setComment] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        console.log(onEditClick)

            // if(!comment){
            //     alert('Please add a Comment')
            //     return
            // }
        //onSaveEdit({inStock, damaged, date, comment})
    }

return (
    <form className="add-form edit-form" onSubmit={onSubmit}>
        <h1>EDIT Item</h1>
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

        <input type="submit" value="save" className="btns" />
        <input type="button" value="cancel" className="btns cancelbtn" />
    </form>
)
}

export default EditItem