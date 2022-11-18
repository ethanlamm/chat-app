import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebar: {
        open: false,
        type: 'CONTACT' // CONTACT | STARRED | SHARED
    }
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSideBar(state) {
            state.sidebar.open = !state.sidebar.open
        },
        updateSideBar(state, action) {
            state.sidebar.type = action.payload.type
        }
    }
});

export const { toggleSideBar, updateSideBar } = app.actions

export default app.reducer