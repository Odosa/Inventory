import TableData from "./inventory-data";

const Tables = ({tableData, onDelete, onEdit}) => {

return (
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th className="name-th">Name</th>
                    <th>Quantity</th>
                    <th className="status-th">Status</th>
                    <th>In Stock</th>
                    <th>Date</th>
                    <th>Comment</th>
                    <th>Actions</th>
                </tr>
                
            </thead>
            <tbody>
                {tableData.map((data, index) => 
                (
                    <TableData key={index} data={data} onDelete={onDelete} onEdit={onEdit}/>
                )
                )}
            </tbody>
        </table>
    </div>
);
}

export default Tables
