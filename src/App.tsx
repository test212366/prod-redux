
import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionsCreators';


function App() {
	const dispatch = useAppDispatch()
	const state = useAppSelector(state => state.userReducer)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])


	return (
		<div className="App">
			<PostContainer />
		</div>
	);
}

export default App;
