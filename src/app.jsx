function App() {
    // const p = document.createElement("p");
    // p.textContent = "This is a demo paragraph";
    // return p;
    let msg = "awesome";
    return (
        <>
            <h1>This is my header</h1>
            <p>
                This is my first {msg} Component {10 + 5}
            </p>
            <input type="text" />
        </>
    );
}

export default App;
