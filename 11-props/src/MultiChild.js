// #2. 다중 자식 요소 전달
import './Multichild.css';
import { Children } from 'react';

const MultiChild = ({ children }) => {
    return (
        <>
            <div className="multichild">{children}</div>
        </>
    );
};
export default MultiChild;
