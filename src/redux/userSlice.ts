import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { authenAPI } from '../APIs/authenAPI'
createAsyncThunk

const IDLE = 1
const PENDING = 2
const SUCCEEDED = 3
const FAILED = 4

export const loginThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (data:{email:string, password:string}, thunkAPI) => {
    const response = await authenAPI.login(data.email, data.password)
    return response
  },
)

export interface UserState {
  userName:string,
  email:string,
  cart:string[],
  loading: 1 | 2 | 3 | 4
}

const initialState: UserState = {
  userName:'',
  email:'',
  cart:[],
  loading:IDLE
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state,action) => {
    })
    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = PENDING
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer