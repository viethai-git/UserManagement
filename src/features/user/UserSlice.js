import {createSlice} from '@reduxjs/toolkit';
const initialListUsers = [{
    id: 100,
    name: 'Jane',
    age: 30
}, {
    id: 200,
    name: 'George',
    age: 20
}, {
    id: 300,
    name: 'Hai',
    age: 25
}, {
    id: 400,
    name: 'Lane',
    age: 43
}, {
    id: 500,
    name: 'Dawn',
    age: 21
}, {
    id: 600,
    name: 'Min',
    age: 20
}, {
    id: 700,
    name: 'Columbus',
    age: 20
},{
    id: 800,
    name: 'Jane',
    age: 20
}, {
    id: 900,
    name: 'Kayle',
    age: 20
},];

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
