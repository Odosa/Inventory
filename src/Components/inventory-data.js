import { MdDelete } from "react-icons/md"
import { AiFillEdit } from 'react-icons/ai'

const TableData = ({data, onDelete, onEdit}) => {
return (
    <tr>
        <td>{data.item}</td>
        <td>{data.inStock}</td>
        <td>{data.amount}</td>
        <td>{data.damaged}</td>
        <td>{data.date}</td>
        <td>{data.comment}</td>
        <td className="actions"><AiFillEdit className="actions-in" style={{cursor: 'pointer'}} onClick={() => onEdit(data)} /><MdDelete style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(data.id)} /></td>
    </tr>
);
}

export default TableData