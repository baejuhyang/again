import React, { useState } from 'react';
import { PracticePostList } from './PracticePostList';
import '../../styles/PracticeStyles.scss';

export const PracticeLifeCycle = () => {
    return (
        <div className="container">
            <h1>Post List</h1>
            <PracticePostList></PracticePostList>
        </div>
    );
};
