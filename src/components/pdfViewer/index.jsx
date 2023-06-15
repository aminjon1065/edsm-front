import React from 'react';

const Index = ({pdfFile}) => {
    return (
        <div className={"w-full h-screen bg-red-700"}>
            <iframe src={pdfFile}
                    className={"w-full h-full"} />
        </div>
    );
};

export default Index;