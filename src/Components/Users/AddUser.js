import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (empty values are not allowed).'
            });
            return;
        }

        if (+enteredAge < 1 || +enteredAge > 120) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            });
            return;
        }

        props.onAddUser(prev => [...prev, {name: enteredUsername, age: enteredAge}]);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = (event) => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onToggle={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        onChange={usernameChangeHandler}
                        value={enteredUsername} 
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number"
                        id="age"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;