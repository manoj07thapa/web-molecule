import Create from './Create';
export default function Sidebar() {
	return (
		<div className=" lg:w-64 lg:h-screen bg-gray-100  ">
			<Create />
			<footer className="hidden  lg:flex px-2 items-center justify-between mt-12">
				<p className="text-xs text-gray-400">All rights reserved</p>
				<span className="text-xs text-gray-400">WebMolecule</span>
			</footer>
		</div>
	);
}
