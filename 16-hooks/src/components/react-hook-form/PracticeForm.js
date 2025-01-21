import React from 'react';
import { useForm } from 'react-hook-form';

export default function PracticeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    const onError = (err) => {
        console.log('에러!', err);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input
                type="text"
                placeholder="이름"
                {...register('username', {
                    required: '이름은 필수 항목입니다.',
                })}
            />
            {errors.username && (
                <div style={{ color: 'red' }}>{errors.username.message}</div>
            )}
            <br />
            <input
                type="text"
                placeholder="나이"
                {...register('age', {
                    validate: (value) =>
                        Number(value) > 0 || '0 이상의 숫자만 입력 가능합니다.',
                })}
            />
            {errors.age && (
                <div style={{ color: 'red' }}>{errors.age.message}</div>
            )}
            <br />
            <button type="submit">제출</button>
        </form>
    );
}
