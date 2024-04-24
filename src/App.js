import './App.css';

const App = () => {
	const name = 'World';
	const showName = true;

	return (
		<div className="App">
			<h1>Hello, {showName ? name : "Someone"}!</h1>
		</div>
	);
}

export default App;
