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
const [tableData, setTableData] = useState([])
const [showAlert, setShowAlert] = useState(false)
const [message, setMessage] = useState("")
const [messageType, setMessageType] = useState("")

// useEffect(() => {
//     const saveTableData = window.localStorage.getItem("table-Data")
//     console.log(saveTableData)
//     setTableData(JSON.parse(saveTableData))
// }, [])

// useEffect(() => {
//     window.localStorage.setItem("table-Data", JSON.stringify(tableData))
// })

useEffect(() => {
    const getTableData = async() => {
        const dataFromServer = await fetchAllTableData()
        setTableData(dataFromServer)
    }

    getTableData()
    setShowAlert(true)
    setMessageType('success')
    setMessage(`Welcome ${auth.user}`)
    setTimeout(() => {
        setShowAlert(false);
    }, 4000);
}, [auth.user]);

//Fetch All Table Data

const fetchAllTableData = async() => {
    const res = await fetch("http://localhost:5000/tableData")
    const data = await res.json()
    return data
}
//Fetch Table Data

// const fetchTableData = async (id) => {
//     const res = await fetch(`http://localhost:5000/tableData/${id}`)
//     const data = await res.json()
//     return data
// }

const addItemClick = () => {
    if(showAlert === true){
        setShowAlert(false)
    }
    if(showEditItem === true){
        setShowAlert(true)
        setMessageType('error')
        setMessage("You can't add a new item while editing another")
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }else{
        setShowAddItem(!showAddItem)
    }
}

const addItem = async (item) => {

    setShowAlert(false)
    
    if(item.stockStatus === "Shipping" || item.stockStatus === "Ordered"){
        return
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

    const res = await fetch('http://localhost:5000/tableData',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item),
    })

    const data = await res.json()


    const id = await data.length + 1;
    const newItem = {id, ...data}
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

const saveEditedItem = async (item) => {
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

    const updateTableData = {...item}
    console.log(updateTableData)

    const res = await fetch(`http://localhost:5000/tableData/${item.id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    })

    const data = await res.json()

    if(data.id){
        tableData[tableData.findIndex(dat => dat.id === data.id)] = item;
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
    
    setItemEdit(item)
}

const searching = (e) => {
    const keyword = e.target.value

    console.log(keyword)
}

const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/tableData/${id}`,{
        method: 'DELETE'
    })
    
    setTableData(tableData.filter((data) => data.id !== id))
    setShowAlert(true)
    setMessageType('success')
    setMessage("Item Deleted Successfully")
    setTimeout(() => {
        setShowAlert(false);
    }, 4000);
}

    return(
        <div>
            {showAlert && <Alert type={messageType} message={message} close={() => setShowAlert(!showAlert)} />}
            <Header onAdd={addItemClick}  showAdd={showAddItem} username={auth.user} />
            {showAddItem && <AddItem onAdd={addItem} />}
            {showEditItem &&  <EditItem onEditClick={itemEdit} onSaveEdit={saveEditedItem} onCancel={cancelEdit}/>}
            {tableData.length > 5 ? (
                <SearchBar onChange={searching} />
            ) : (<span></span>)}
            {tableData.length > 0 ? (
                <Tables tableData={tableData} 
                onDelete={deleteItem} onEdit={ItemToEdit} />
            ) : (<h1 className='table-h1'>No Items in stock</h1>)}
        </div>
    )
}

export default Inventory
