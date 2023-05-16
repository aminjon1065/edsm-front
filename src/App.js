import './App.css';
import Example from "./example";
import usePageTitle from "./hooks/usePageTitle";

function App() {
    usePageTitle('EDSM')
    return (
        <>
            <Example/>
        </>
    );
}

export default App;
