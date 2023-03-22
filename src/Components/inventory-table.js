import TableData from "./inventory-data";

const Tables = ({tableData, onDelete, onEdit}) => {

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>In Stock</th>
                    <th>Amount</th>
                    <th>Damaged</th>
                    <th>Date In/Out</th>
                    <th>Comment</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                
            </thead>
            <tbody>
                {tableData.map((data) => 
                (
                    <TableData key={data.id} data={data} onDelete={onDelete} onEdit={onEdit}/>
                )
                )}
            </tbody>
        </table>
    </div>
);
}

export default Tables