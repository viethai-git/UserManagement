import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser } from './UserSlice.js';
import PropTypes from 'prop-types';

UserPage.propTypes = {
    userList: PropTypes.array,
};

UserPage.defaultPros = {
    userList: []
}

export default function UserPage(props) {
	const { userList, editUserClick } = props;
    const dispatch = useDispatch();

	const handleEdit = (a) => {
        console.log('a:', a);
        if (editUserClick) editUserClick(a);
    }

    const handleDelete = (values) => {
        console.log('delete user')
        const action = deleteUser(values);
        dispatch(action);
}
	return (
		<div>
        <Link to="/listusers/add">Add new user</Link>
		<table className='table table-striped' aria-labelledby="tabelLabel" border="0">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Age</th>
                    <th></th>
				</tr>
			</thead>
			<tbody>
				{userList.map(user =>
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.age}</td>
                        <td><button onClick={() => handleEdit(user)}>Edit</button>&nbsp;&nbsp;
                        <button onClick={() => handleDelete(user)}>Delete</button></td>
					</tr>
				)}
			</tbody>
			</table>
		</div>
	);
}