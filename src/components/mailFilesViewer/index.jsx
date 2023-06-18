import React from 'react';

const Index = ({data}) => {
    console.log(data)
    return (
        <div className="flex flex-row">
            {data.map((item, index) => (
                <div key={index} className={item.extension === "image" ? "flex flex-row" : "flex flex-col"}>
                    {item.type === "image" ? (
                        // <img src={item.url} alt={item.name} className="w-96" />
                        <span>{item}</span>
                    ) : (
                        <div className="w-full h-full">
                            {/* Рендер компонента для документа */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Index;