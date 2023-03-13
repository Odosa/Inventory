import { MdDelete } from "react-icons/md"
import { AiFillEdit } from 'react-icons/ai'

const TableData = ({data, onDelete, onEdit}) => {
return (
    <tbody>
        <tr>
            <td>{data.item}</td>
            <td>{data.inStock}</td>
            <td>{data.damaged}</td>
            <td>{data.date}</td>
            <td>{data.comment}</td>
            <td><MdDelete style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(data.id)} /></td>
            <td><AiFillEdit style={{cursor: 'pointer'}} onClick={() => onEdit(data)} /></td>
        </tr>
    </tbody>
);
}

export default TableData