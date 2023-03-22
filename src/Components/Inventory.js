import { useState } from 'react'
import Header from "./inventory-header";
import Tables from './inventory-table';
import AddItem from './addItem';
import EditItem from './editItem';
import Alert from './alertBox';

const Inventory = () => {
const [showAddItem, setShowAddItem] = useState(false)
const [showEditItem, setShowEditItem] = useState(false)
const [editId, setEditId] = useState()
const [tableData, setTableData] = useState(
    [
        {
            id: 1,
            item: "Hat", 
            amount: '1',
            inStock: "True", 
            damaged: "true" ,
            date: "2022-02-25",
            comment: "Returned by tega"
        },
        { 
            id: 2,
            item: "Shoe",
            amount: '1',
            inStock: "True", 
            damaged: "false" ,
            date: "2020-02-12",
            comment: "Returned by mega"
        },
        {
            id: 3,
            item: "Shirt",
            amount: '1', 
            inStock: "False", 
            damaged: "unknown",
            date: "2023-02-18",
            comment: "Given to imate"
        },
    ]
)
const [showAlert, setShowAlert] = useState(false)
const [message, setMessage] = useState("")
const [messageType, setMessageType] = useState("")

const addItemClick = () => {
    if(showAlert === true){
        setShowAlert(false)
    }
    if(showEditItem === true){
        setShowAlert(true)
        setMessageType('error')
        setMessage("You can't add a new item while editing another")
    }else{
        setShowAddItem(!showAddItem)
    }
}

const addItem = (item) => {
    setShowAlert(false)
    const id = tableData.length + 1

    if(item.inStock === true){
        item.inStock = '';
        item.inStock +='True'
    }else if(item.inStock === false){
        item.inStock = '';
        item.inStock +='False'
    }
    const newItem = {id, ...item}
    setTableData([...tableData, newItem])
    setShowAddItem(!showAddItem)
    setShowAlert(true)
    setMessageType("success")
    setMessage(`Successfully Added Item ${item.item}`)
}

const cancelEdit = () => {
    setShowEditItem(!showEditItem)
    if(showAlert === true){
        setShowAlert(false);
    }
}

const saveEditedItem = (item) => {
    setShowEditItem(!showEditItem);
    if(showAlert === true){
        setShowAlert(false)
    }
    if(item.inStock === true){
        item.inStock = '';
        item.inStock +='True'
    }else if(item.inStock === false){
        item.inStock = '';
        item.inStock +='False'
    }

    // if(item){
    //     const editTableData = tableData.find((i) => i.id === item.id)
    //     const updatedTableData= tableData.map((t) => t.id === editTableData.id)
    //     setTableData(updatedTableData);
    //     setEditId(0)
    //     return
    // }

    
    setTableData([...tableData, item])
    setShowEditItem(!showEditItem)
}

const [itemEdit, setItemEdit] = useState()

const ItemToEdit = (item) => {
    if(showAlert === true){
        setShowAlert(false)
    }
    if(showAddItem === false){
        setShowEditItem(!showEditItem);
    }else{
        setShowAlert(true)
        setMessageType('error')
        setMessage("You can't Edit this item while adding another")
    }
    
    if(item.inStock === "true"){
        item.inStock = true
    }else if(item.inStock === 'false'){
        item.inStock = false
    }else if(item.damaged === "true"){
        item.damaged = ''
        item.damaged += "True"
    }else if(item.damaged === 'false'){
        item.damaged = ''
        item.damaged += "False"
    }else if(item.damaged === "unknown"){
        item.damaged = ''
        item.damaged += "unknown"
    }
    setEditId(item.id)
    setItemEdit(item)
    console.log(editId)
}



const deleteItem = (id) => {
    setTableData(tableData.filter((data) => data.id !== id))
}

    return(
        <div>
            {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
            <Header onAdd={addItemClick}  showAdd={showAddItem} />            
            {showAddItem && <AddItem onAdd={addItem} />}
            {showEditItem &&  <EditItem onEditClick={itemEdit} onSaveEdit={saveEditedItem} onCancel={cancelEdit}/>}
            {tableData.length > 0 ? (
                <Tables tableData={tableData} 
                onDelete={deleteItem} onEdit={ItemToEdit} />
            ) : (<h1>No Items in stock</h1>)}
        </div>
    )
}

export default Inventory
