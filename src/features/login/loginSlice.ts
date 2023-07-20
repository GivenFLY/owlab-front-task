import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface LoginState {
    isAuthenticated: boolean
}

const initialState: LoginState = {
    isAuthenticated: false,
}

export const authorization = createAsyncThunk(
    "login/authorization",
    async (credentials: { login: string, password: string }) => {
        const { login, password } = credentials;

        // emulate a delay like a real-world api call
        await new Promise((resolve) => setTimeout(resolve, 500));

        return login === "Admin" && password === "12345";
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authorization.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload
            })
    }
})

export const { logout } = loginSlice.actions

export default loginSlice.reducer;
