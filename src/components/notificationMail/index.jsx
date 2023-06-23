import React, { useEffect, useState } from 'react';
import Pusher from "pusher-js";
// import Echo from 'laravel-echo';

const Index = () => {
    // const [notification, setNotification] = useState('');

    useEffect(() => {
        // Подключение к каналу Laravel Echo
        Pusher.logToConsole = true;

        const pusher = new Pusher('7df99e1bf3471243c810', {
            cluster: 'ap1'
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
            console.log(JSON.stringify(data));
        });
    }, []);

    // Остальная логика компонента...

    return (
        <div>
            <div>Mail Component</div>
            {/*{notification && <div>Notification: {notification}</div>}*/}
        </div>
    );
};

export default Index;
