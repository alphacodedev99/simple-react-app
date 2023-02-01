import { useState } from 'react';

// style
import './app.scss';
import FormInput from './components/FormInput';

const initUser = {
	name: '',
	lastname: '',
	phone: '',
	deposit: '',
};
function App() {
	const [user, setUser] = useState(initUser);
	const [allUsers, setAllUsers] = useState(() => {
		if (localStorage.hasOwnProperty('user')) {
			return JSON.parse(localStorage.getItem('user'));
		} else {
			return [];
		}
	});
	// active state
	const [isActive, setIsActive] = useState(false);
	// current input/user state
	const [currentUser, setCurrentUser] = useState();

	// here i make one user and store in state
	const handlerChange = (event) => {
		let copyUser = { ...user };
		copyUser[event.target.name] = event.target.value;
		setUser(copyUser);
	};
	// here i added one user in array()
	const addUser = () => {
		let copyAllUsers = [...allUsers];
		copyAllUsers.push(user);
		setAllUsers(copyAllUsers);
		setUser(initUser);
		localStorage.setItem('user', JSON.stringify(copyAllUsers));
	};

	// delete handler(user)
	const deleteHandler = (index) => {
		let copyAllUsers = [...allUsers];
		copyAllUsers.splice(index, 1);
		setAllUsers(copyAllUsers);
		localStorage.setItem('user', JSON.stringify(copyAllUsers));
	};

	// update
	const updateHandler = () => {
		let copyAllUsers = [...allUsers];
		copyAllUsers[currentUser] = user;
		setAllUsers(copyAllUsers);
		setUser(initUser);
		setIsActive(false);
	};
	// edit func
	const editChange = (index) => {
		setCurrentUser(index);
		setUser(allUsers[index]);
		setIsActive(true);
	};

	return (
		<div>
			<h1>Add New User</h1>
			<FormInput
				handlerChange={handlerChange}
				user={user}
				addUser={addUser}
				updateHandler={updateHandler}
				isActive={isActive}
			/>

			<div className='allUser'>
				{allUsers.map((el, index) => {
					return (
						<div key={index} className='user'>
							<h3>{el.name}</h3>
							<h3>{el.lastname}</h3>
							<h3>{el.phone}</h3>
							<h3>{el.deposit}</h3>
							<button onClick={() => deleteHandler(index)}>
								Delete
							</button>
							<button onClick={() => editChange(index)}>Edit</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
