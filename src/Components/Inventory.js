import { useState, useEffect } from 'react'
import { useAuth } from './PrivateRoute'
import Header from "./inventory-header";
import Tables from './inventory-table';
import AddItem from './addItem';
import EditItem from './editItem';
import Alert from './alertBox';
import SearchBar from './searchInventory';

const Inventory = () => {
const auth = useAuth()
const [showAddItem, setShowAddItem] = useState(false)
const [showEditItem, setShowEditItem] = useState(false)
const [editId, setEditId] = useState()
const [tableData, setTableData] = useState(
    [
        {
            id: 1,
            name: "Hat", 
            quantity: '1',
            stockStatus: "Arrived", 
            status: "Arrived" ,
            date: "2022-02-25",
            comment: "Returned by tega"
        },
        { 
            id: 2,
            name: "Shoe",
            quantity: '1',
            stockStatus: "Arrived", 
            status: "Arrived" ,
            date: "2020-02-12",
            comment: "Returned by mega"
        },
        {
            id: 3,
            name: "Shirt",
            quantity: '1', 
            stockStatus: "Shipping", 
            status: "Shipping",
            date: "2023-02-18",
            comment: "Given to imate"
        },
        {
            id: 4,
            name: "pen",
            quantity: '3', 
            stockStatus: "Ordered", 
            status: "Ordered",
            date: "2023-02-18",
            comment: "Given to imate"
        },
    ]
)
const [showAlert, setShowAlert] = useState(false)
const [message, setMessage] = useState("")
const [messageType, setMessageType] = useState("")


useEffect(() => {
    if (true) {
        setShowAlert(true)
        setMessageType('success')
        setMessage(`Welcome ${auth.user}`)
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }
}, [auth.user]);


const addItemClick = () => {
    if(showAlert === true){
        setShowAlert(false)
    }
    if(showEditItem === true){
        setShowAlert(true)
        setMessageType('warning')
        setMessage("You can't add a new item while editing another")
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }else{
        setShowAddItem(!showAddItem)
    }
}

const addItem = (item) => {
    setShowAlert(false)
    const id = tableData.length + 1
    if(item.stockStatus === "Shipping" || item.stockStatus === "Ordered"){
        
    }else{
        if(item.quantity < 1){
            item.stockStatus = ""
            item.stockStatus += "noStock"
            item.status = ""
            item.status += "Not available"
        }else if(item.quantity < 5){
            item.stockStatus = "";
            item.stockStatus +="lowStock"
        }
    }
    
    const newItem = {id, ...item}
    setTableData([...tableData, newItem])
    setShowAddItem(!showAddItem)
    setShowAlert(true)
    setMessageType("success")
    setMessage(`Successfully Added Item ${item.name}`)
    setTimeout(() => {
        setShowAlert(false);
    }, 4000);
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

    if(item.quantity < 1){
        item.stockStatus = ""
        item.stockStatus += "noStock"
        item.status = ""
        item.status += "Not available"
    }else if(item.quantity < 5){
        item.stockStatus = "";
        item.stockStatus +="lowStock"
    }

    if(editId){
        tableData[tableData.findIndex(data => data.id === editId)] = item;
        setShowAlert(true)
        setMessageType('success')
        setMessage(`Item ${item.name} Updated Successfully`)
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }
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
        setMessageType('warning')
        setMessage("You can't Edit this item while adding another")
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }
    
    setEditId(item.id)
    setItemEdit(item)
}

const searching = (e) => {
    const keyword = e.target.value

    console.log(keyword)
}

const deleteItem = (id) => {
    setTableData(tableData.filter((data) => data.id !== id))
    setShowAlert(true)
    setMessageType('success')
    setMessage("Item Deleted Successfully")
    setTimeout(() => {
        setShowAlert(false);
    }, 4000);
}

    return(
        <div className = "body3">
        <div>
            {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
            <Header onAdd={addItemClick}  showAdd={showAddItem} username={auth.user} />
            <SearchBar onChange={searching} />
            {showAddItem && <AddItem onAdd={addItem} />}
            {showEditItem &&  <EditItem onEditClick={itemEdit} onSaveEdit={saveEditedItem} onCancel={cancelEdit}/>}
            {tableData.length > 0 ? (
                <Tables tableData={tableData} 
                onDelete={deleteItem} onEdit={ItemToEdit} />
            ) : (<h1>No Items in stock</h1>)}
            </div>
        </div>
    )
}

export default Inventory
