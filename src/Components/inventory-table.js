import TableData from "./inventory-data";

const Tables = ({tableData, onDelete, onEdit}) => {

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th className="item-th">Item</th>
                    <th>In Stock</th>
                    <th>Amount</th>
                    <th>Damaged</th>
                    <th>Date In/Out</th>
                    <th>Comment</th>
                    <th>Actions</th>
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
