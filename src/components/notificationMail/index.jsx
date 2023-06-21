import React, { useEffect, useState } from 'react';
import Echo from 'laravel-echo';

const Index = () => {
    const [notification, setNotification] = useState('');

    useEffect(() => {
        // Подключение к каналу Laravel Echo
        window.Echo.channel('mail-sent')
            .listen('.MailSentEvent', (data) => {
                // Обработка уведомления о отправке письма
                console.log('Mail sent:', data.mail);
                setNotification(data.message); // Сохранение текста письма в состоянии компонента
            });

        return () => {
            // Отключение от канала при размонтировании компонента
            window.Echo.leaveChannel('mail-sent');
        };
    }, []);

    // Остальная логика компонента...

    return (
        <div>
            <div>Mail Component</div>
            {notification && <div>Notification: {notification}</div>}
        </div>
    );
};

export default Index;
