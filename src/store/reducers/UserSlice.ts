import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionsCreators"

interface UserState {
	users: IUser[]
	isLoading: boolean
	error: string | null

}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: null,

}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// usersFetching(state) {
		// 	state.isLoading = true
		// },
		// usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
		// 	state.isLoading = false
		// 	state.error = null
		// 	state.users = action.payload

		// },
		// usersFetchingError(state, action: PayloadAction<string>) {
		// 	state.isLoading = false
		// 	state.error = action.payload
		// },
	},
	extraReducers: {
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.isLoading = false
			state.error = null
			state.users = action.payload

		},
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		}
	}

})
export default userSlice.reducer 