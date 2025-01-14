import React, { useContext } from 'react';
import UserNameContext from '../context/UserNameContext';

export const NameInput = () => {
    // 작성해야 할 부분 (useContext로 setName 가져오기)
    const { setUserName } = useContext(UserNameContext);

    return (
        <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
                setUserName(e.target.value);
            }}
        />
    );
};
