import React from 'react';

const Index = ({pdfFile}) => {
    return (
        <div className={"w-full h-full"}>
            <iframe src={pdfFile}
                    className={"w-full h-full"} />
        </div>
    );
};

export default Index;