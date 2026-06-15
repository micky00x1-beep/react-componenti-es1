function Message() {
  return <p>What a beautiful day!</p>;
}

function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
}

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
    </div>
  );
}

export default App;