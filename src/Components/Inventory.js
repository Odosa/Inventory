import { useState } from 'react'
import Header from "./inventory-header";
import Tables from './inventory-table';
import AddItem from './addItem';
import EditItem from './editItem';


const Inventory = () => {
const [showAddTask, setShowAddTask] = useState(false)
const [showEditTask, setShowEditTask] = useState(false)
const [tableData, setTableData] = useState(
    [
        {
            id: 1,
            item: "Hat", 
            inStock: "true", 
            damaged: "true" ,
            date: "2022-02-25",
            comment: "Returned by tega"
        },
        { 
            id: 2,
            item: "Shoe", 
            inStock: "true", 
            damaged: "false" ,
            date: "2020-02-12",
            comment: "Returned by mega"
        },
        {
            id: 3,
            item: "Shirt", 
            inStock: "false", 
            damaged: "unknown",
            date: "2023-02-18",
            comment: "Given to imate"
        },
    ]
)

const addItem = (item) => {
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
}

const ItemToEdit = (id) => {
    setShowEditTask(!showEditTask)
    const newTableData = tableData.find((item) => item.id === id)
}



const deleteItem = (id) => {
    setTableData(tableData.filter((data) => data.id !== id))
}

    return(
        <div>
            <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask} />            
            {showAddTask && <AddItem onAdd={addItem} />}
            {showEditTask &&  <EditItem />}
            {tableData.length > 0 ? (
                <Tables tableData={tableData} 
                onDelete={deleteItem} onEdit={ItemToEdit} />
            ) : (<h1>No Items in stock</h1>)}
        </div>
    )
}

export default Inventory
