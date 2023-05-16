import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            if (response.status === 200) {
                // Успешный вход в систему
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    };

    return (
        <div>
            <h2>Вход в систему</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
