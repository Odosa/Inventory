import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md"
import { AiFillEdit } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { MdError } from 'react-icons/md'
import { GoAlert } from 'react-icons/go'
import { MdLocalShipping } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'

const TableData = ({data, onDelete, onEdit}) => {

    const [status, setStatus] = useState()

    useEffect(() => {
        if(data.stockStatus === "Arrived"){
            setStatus(<BsCheckLg className="arrived" style={{cursor: 'pointer'}} />)
        }else if(data.stockStatus === "noStock"){
            setStatus(<MdError className="noStock" style={{cursor: 'pointer'}}  />)
        }else if(data.stockStatus === "lowStock"){
            setStatus(<GoAlert className="lowStock" style={{cursor: 'pointer'}} />)
        }else if(data.stockStatus === "Shipping"){
            setStatus(<MdLocalShipping className="shipping" style={{cursor: 'pointer'}} />)
        }else if(data.stockStatus === "Ordered"){
            setStatus(<BiShoppingBag className="ordered" style={{cursor: 'pointer'}} />)
        }
    }, [data.stockStatus]);

return (
    <tr>
        <td>{data.name}</td>
        <td>{data.quantity}</td>
        <td>{data.status}</td>
        <td>{status}</td>
        <td>{data.date}</td>
        <td>{data.comment}</td>
        <td className="actions"><AiFillEdit className="actions-in" style={{cursor: 'pointer'}} onClick={() => onEdit(data)} /><MdDelete style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(data.id)} /></td>
    </tr>
);
}

export default TableData