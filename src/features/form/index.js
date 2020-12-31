
import FormPage from './formPage';
import { addUser, editUser } from '../user/UserSlice.js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import '../../Style.scss';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userid } = useParams();
    const idAdd = !Number(userid);
    console.log(idAdd);
    const infoUserEdit = useSelector(state => state.user.find(i => i.id === Number(userid)));
    console.log("infoUserEdit", useSelector(state => state.user))
    const initialValues = idAdd ? {
        id: '',
        name: '',
        age: ''
    } : infoUserEdit;

    const handleSubmit = (values) => {
        if (idAdd) {
            console.log('value:', values);
            const action = addUser(values);
            dispatch(action);

        } else {
            const action = editUser(values);
            dispatch(action);
        }
        history.push('/listusers');
    }

    return (
        <div className="user-edit">
            <div className="user-edit__form">
                {
                    infoUserEdit !== undefined || idAdd === true ? <FormPage
                    isAddMode={idAdd}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                /> : <>
                        <h3>404 not found</h3>
                            <p>Cannot find this user: {userid} 
                            </p>
                    </>
                }
                
            </div>
        </div>


    );
}

export default AddEditPage;