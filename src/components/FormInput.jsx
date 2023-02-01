import React from 'react';
import './forminput.scss';
function FormInput({
	handlerChange,
	addUser,
	user,
	updateHandler,
	isActive,
}) {
	return (
		<div className='container'>
			<input
				type='text'
				placeholder='Username'
				name='name'
				value={user.name}
				onInput={handlerChange}
			/>
			<input
				type='text'
				placeholder='LastName'
				name='lastname'
				value={user.lastname}
				onInput={handlerChange}
			/>
			<input
				type='number'
				placeholder='Phone Number'
				name='phone'
				value={user.phone}
				onInput={handlerChange}
			/>
			<input
				type='text'
				placeholder='Deposit'
				name='deposit'
				value={user.deposit}
				onInput={handlerChange}
			/>
			{isActive ? (
				<button onClick={() => updateHandler()}>Update</button>
			) : (
				<button onClick={() => addUser()}>Save Data</button>
			)}
		</div>
	);
}

export default FormInput;
