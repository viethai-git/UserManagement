import * as React from 'react';
import {  Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';


DetailPage.propTypes = {
    userList: PropTypes.array,
};

DetailPage.defaultPros = {
    userList: []
}

export default function DetailPage(props) {
    const { userList } = props;
    const { userid } = useParams();
    console.log(userid)

	const colorText = {
		color: "white"
	}
	return (
		<div>
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
					{/* {currentList.map(user => */}
						<tr>
							<td>{userid}</td>
							<td></td>
							<td></td>
						</tr>
				</tbody>
			</table>
		</Row>
		</div>
	);
}