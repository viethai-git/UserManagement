import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser } from './UserSlice.js';
import { Button, Col, Label, Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import {useState} from 'react';

UserPage.propTypes = {
    userList: PropTypes.array,
};

UserPage.defaultPros = {
    userList: []
}

export default function UserPage(props) {
	const { userList, editUserClick } = props;

	const [activePage, setActivePage] = useState(1);
	const total = userList.length;
	const indexOfLast = activePage * 3;
	const indexOfFirst = indexOfLast -3;
	const currentList = userList.slice(indexOfFirst, indexOfLast); 

	const handlePageChange = (pageNumber) => {
		console.log(userList);
		console.log(pageNumber);
		setActivePage(pageNumber);
	}

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
	const clear = () => {
		window.localStorage.clear()
		window.location.reload();
	}
	const colorText = {
		color: "white"
	}
	return (
		<div>
        <Button color="primary"><Link style={colorText} to="/listusers/add">Add new user</Link></Button>
		&nbsp;
		<Button color="danger" onClick={clear}>Clear</Button>
		<br/><br/>
		<Row>
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
					{currentList.map(user =>
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.age}</td>
							<td><Button color="success" onClick={() => handleEdit(user)}>Edit</Button>&nbsp;&nbsp;
							<Button color="danger" onClick={() => handleDelete(user)}>Delete</Button></td>
						</tr>
					)}
				</tbody>
			</table>
		
			<Pagination
				itemClass="page-item"
				linkClass="page-link" 
				activePage={activePage}
				itemsCountPerPage={3}
				totalItemsCount={total}
				pageRangeDisplayed={3}
				onChange={handlePageChange}
			/>
		</Row>
		</div>
	);
}