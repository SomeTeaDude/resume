import Layout from "./components/Layout";

function App() {
	return (
		<Layout>
			<div className="bg-black w-full h-[30rem]"></div>
			<div className="bg-red-500 w-full h-[30rem]"></div>
			<div className="bg-amber-500 w-full h-[30rem]"></div>
			<div className="bg-lime-500 w-full h-[30rem]" id="green-bg"></div>
			<div className="bg-red-800 w-full h-[30rem]"></div>
			<div className="bg-gray-500 w-full h-[30rem]"></div>
		</Layout>
	);
}

export default App;
