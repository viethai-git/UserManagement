import {createSlice} from '@reduxjs/toolkit';
const initialListUsers = [{
    id: 100,
    name: 'Jane',
    age: 30
}, {
    id: 200,
    name: 'George',
    age: 20
}];

const slice = createSlice({
    name: 'user',
    initialState: initialListUsers,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload)
        },
        editUser: (state, action) => {
            console.log(state.name)
            const newUser = action.payload;
            const userIndex = state.findIndex(i => i.id === newUser.id);
            if(userIndex >=0 ){
                state[userIndex] = newUser;
            }
        },
        deleteUser: (state, action) => {
            if(action.payload.id >=0 ){
                const removeUser = action.payload;
                return state.filter((user) => user.id !== removeUser.id);
            }
        }
    }
});

export const {addUser, editUser, deleteUser} = slice.actions;
export default slice.reducer;
