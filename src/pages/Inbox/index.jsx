import React, {useEffect} from 'react';
import usePageTitle from "../../hooks/usePageTitle";
import useBackendApi from "../../services/inbox.service";

const Index = () => {
    const api  = useBackendApi();
    usePageTitle("Входящие")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Пример GET запроса
                const response = await api.get('/inbox');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (api) {
            fetchData();
        }
    }, [api]);
    return (
        <div>
            Inbox
        </div>
    );
};

export default Index;