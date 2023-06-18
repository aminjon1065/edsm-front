import React from 'react';

const Index = ({pdfFile}) => {
    return (
        <div className={"w-full h-full"}>
            <iframe src={pdfFile}
                    className={"w-full h-full rounded-xl"}
            />
        </div>
    );
};

export default Index;