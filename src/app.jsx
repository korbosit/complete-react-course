import "./app.css";

function App() {
    // const p = document.createElement("p");
    // p.textContent = "This is a demo paragraph";
    // return p;
    let msg = "awesome";
    return (
        <>
            <h1 className="myHeader">This is my header</h1>
            <p className="myParagraph">
                This is my first {msg} Component {10 + 5}
            </p>
        </>
    );
}

export default App;
