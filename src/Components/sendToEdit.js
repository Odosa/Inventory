import EditItem from "./editItem"

const SendToEdit = ({item}) => {
    const show = () => {
        const message = 'from send to edit js'
        const newItemToEdit = {message, ...item}
    }

    return (
        <div>
            <EditItem onEditClick={show} />
        </div>
    )
    }

export default SendToEdit
