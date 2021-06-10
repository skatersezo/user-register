import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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

        props.onAddUser(prev => [...prev, {name: enteredName, age: enteredAge}]);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

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
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number"
                        id="age"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;