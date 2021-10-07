import { useRouter } from 'next/router';
function Docs() {
	const { query: { params = [] } } = useRouter();
	console.log(params);
	return <div>docs home page</div>;
}

export default Docs;
