// useMemo 실습문제
// import React, { useState, useMemo } from 'react';

import { useContext, useState } from 'react';
import UserNameContext from '../context/UserNameContext';

// const ProductFilter = () => {
//     // 상품 가격 제한 상태 관리
//     const [priceLimit, setPriceLimit] = useState();

//     const products = [
//         { name: 'Product A', price: 30 },
//         { name: 'Product B', price: 50 },
//         { name: 'Product C', price: 70 },
//     ];

//     const filteredProducts = useMemo(() => {
//         // 여기에 필터링 로직 작성
//         return products.filter((product) => product.price < Number(priceLimit));
//     }, [priceLimit]);

//     return (
//         <div>
//             <h2>Product Filter</h2>
//             <input
//                 type="number"
//                 value={priceLimit}
//                 placeholder="Enter price limit"
//                 onChange={(e) => setPriceLimit(e.target.value)}
//             />

//             <ul>
//                 {filteredProducts.map((product, i) => (
//                     <li key={i}>
//                         {product.name} - ${product.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductFilter;

// useCallback 실습문제
// import React, { useState, useCallback, useEffect } from 'react';

// const products = [
//     { id: 1, name: 'Apple' },
//     { id: 2, name: 'Banana' },
//     { id: 3, name: 'Cherry' },
// ];

// const ShoppingCartApp = () => {
//     const [cart, setCart] = useState([]);

//     const addToCart = useCallback(
//         (e) => {
//             setCart(cart.concat([products[e.currentTarget.id - 1]]));
//         },
//         [cart]
//     );

//     const removeFromCart = useCallback(
//         (e) => {
//             setCart(
//                 cart.filter((product, i) => i !== Number(e.currentTarget.id))
//             );
//         },
//         [cart]
//     );

//     // addToCart 참조값 변경 여부 확인 [useEffect]
//     useEffect(() => {
//         console.log('addToCart 함수 참조값 변경!');
//     }, [addToCart]);

//     // removeFromCart 참조값 변경 여부 확인 [useEffect]
//     useEffect(() => {
//         console.log('@removeFromCart 함수 참조값 변경!');
//     }, [removeFromCart]);

//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id} id={product.id} onClick={addToCart}>
//                         {product.name}
//                         <button>Add to Cart</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Shopping Cart</h2>
//             <ul>
//                 {cart.length > 0 &&
//                     cart.map((product, i) => (
//                         <li key={i} id={i} onClick={removeFromCart}>
//                             {product.name} <button>Remove</button>
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// };

// export default ShoppingCartApp;

// useReducer 실습문제
// import React, { useReducer, useState } from 'react';

// const initState = { input: '', list: [] }; // 초기 상태 값

// const reducer = (state, action) => {
//     // (Todo 완료 상태 토글 로직)

//     switch (action.type) {
//         case 'HANDLECREAT':
//             return {
//                 ...state,
//                 list: state.list.concat({
//                     id: state.list.length,
//                     text: action.playload,
//                     completed: false,
//                 }),
//             };
//         case 'HANDLEDELETE':
//             return {
//                 ...state,
//                 list: state.list.filter(
//                     (value) => value.id !== Number(action.playload)
//                 ),
//             };
//         case 'HANDLECOMPLETE':
//             return {
//                 ...state,
//                 list: state.list.map((value) =>
//                     value.id === Number(action.playload)
//                         ? { ...value, completed: !value.completed }
//                         : value
//                 ),
//             };

//         default:
//             return state;
//     }
// };

// const TodoApp = () => {
//     // 상태 관리
//     const [input, setInput] = useState('');
//     const [state, dispatch] = useReducer(reducer, initState);

//     const handleCreate = () => {
//         setInput('');
//         dispatch({ type: 'HANDLECREAT', playload: input });
//     };
//     const handleDelete = (e) =>
//         dispatch({
//             type: 'HANDLEDELETE',
//             playload: e.currentTarget.parentElement.id,
//         });
//     const handleComplete = (e) =>
//         dispatch({
//             type: 'HANDLECOMPLETE',
//             playload: e.currentTarget.id,
//         });

//     return (
//         <div
//             style={{
//                 backgroundColor: '#F2F2F2',
//                 boxShadow: ' 4px 4px 10px rgba(0, 0, 0, 0.3);',
//                 borderRadius: '10px',
//                 margin: '20px',
//                 padding: '20px',
//             }}
//         >
//             <h1>Todo App</h1>
//             <input
//                 value={input}
//                 placeholder="Add a new todo"
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button
//                 onClick={handleCreate}
//                 style={{
//                     backgroundColor: '#0583F2',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '3px',
//                     margin: '5px',
//                 }}
//             >
//                 Add
//             </button>

//             <ul>
//                 {state.list.map((value) => (
//                     <li
//                         onClick={handleComplete}
//                         key={value.id}
//                         id={value.id}
//                         style={{
//                             backgroundColor: 'white',
//                             color: value.completed ? 'gray' : 'black',
//                             textDecoration: value.completed
//                                 ? 'line-through'
//                                 : 'none',
//                             borderRadius: '3px',
//                             margin: '5px',
//                             padding: '10px',
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                         }}
//                     >
//                         {value.text}
//                         <button
//                             onClick={handleDelete}
//                             style={{
//                                 backgroundColor: '#F2594B',
//                                 color: 'white',
//                                 border: 'none',
//                                 borderRadius: '3px',
//                             }}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoApp;

import React from 'react';

export default function UserNameProvider({ children }) {
    const [userName, setUserName] = useState('');
    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserNameContext.Provider>
    );
}
