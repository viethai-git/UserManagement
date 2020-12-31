import React from 'react'
import { Container } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShowListUser from './user/UserPage'

function MainPage() {
    const listUserMain = useSelector(state => state.user);
    console.log(listUserMain);
    const history = useHistory();
    
    const handleEditUser = (user) => {
        console.log('user', user);
        const url = `/listusers/${user.id}`;
        history.push(url);
    }

    const handleDetailUser = (user) => {
        console.log('user', user);
        const url = `/listusers/detail/${user.id}`;
        history.push(url);
    }
    
    return (
        <div>
            <Container className="text-center">
            <h1>SaigonThink</h1>
            <hr/>
            <ShowListUser
            userList={listUserMain}
            editUserClick={handleEditUser}
            detailUserClick={handleDetailUser}
            />
            </Container>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage