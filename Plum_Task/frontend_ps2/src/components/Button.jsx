export const Button = ({ btnTxt, type, style, onClick }) => {
	return (
		<button
			className={`cursor-pointer bg-blue-500 w-fit text-white px-4 py-2 rounded disabled:bg-gray-400 ${style}`}
			type={type}
			onClick={onClick}
		>
			{btnTxt}
		</button>
	);
};
