import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: Dispatch<SetStateAction<string>>, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    // if (name.trim() === '') {
    //     setError('Ошибка! Введите имя!')
    // }
    // if (name.length === 0 || name.trim() === '') {
    //     setError('Ошибка! Введите имя!')
    //     setName('')
    // } else {
    //     addUserCallback(name.trim())
    //     setName('')
    // }


    // if (name.trim().length === 0 && !/[0-9]/.test(name)) {
    //     setError('Ошибка! Введите имя!')
    //     //setName('')
    // }  else {
    //     addUserCallback(name.trim())
    //     setName('')
    // }

    //const trimmedName = name.trim();
    if (name.trim().length === 0) {
        setError('Ошибка! Введите имя!');
        setName(name);
    } else {
        addUserCallback(name.trim());
        setName('');
        setError('');
    }


}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {
    // если имя пустое - показать
    // ошибку
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => {
    // if (e.currentTarget.value.trim() !== '' && e.key === 'Enter'){
    //     addUser()
    // }
    if (e.key === 'Enter'){
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [lastUserName, setLastUserName] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        // if (!/[0-9]/.test(name)) {
        //     pureAddUser(name, setError, setName, addUserCallback)
        // } else {
        //     setError('Ошибка! Введите имя!')
        // }
        pureAddUser(name, setError, setName, addUserCallback)
        setLastUserName(name)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    //const lastUserName = name  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
