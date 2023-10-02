import User from './user-item';

function Users(props) {
    const {items} = props;
    return <ul className="w3-ul w3-container center">
        {items.map(user => <User user = {user}/>)}
    </ul>

}

export default Users;