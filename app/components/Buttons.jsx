const PrimaryButton = ({ text, classes, onClick }) => {
	return (
		<button
			className={`bg-[#ea8001] px-6 py-2.5 cursor-pointer hover:bg-[#ea8001]/80 text-sm rounded-sm ${classes}`}
			onClick={onClick}>
			{text}
		</button>
	);
};

export { PrimaryButton };
