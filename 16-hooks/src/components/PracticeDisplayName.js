import React, { useContext } from 'react';
import UserNameContext from '../context/UserNameContext';

export const DisplayName = () => {
    const { userName } = useContext(UserNameContext);
    return <h1>Hello, {userName || 'Guest'}!</h1>;
};
