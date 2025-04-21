function SubjectButton({ subject, index, activeOne, handleButtonClick, isAble }) {
	return (
		<button
			onClick={() => handleButtonClick(subject, index)}
			className={`flex content-center rounded-lg hover:bg-gray-100/70 hover:text-black w-full h-auto py-3 pl-10 text-xl ${
				activeOne === subject ? "bg-gray-100 text-black" : "text-white"
			}`}
			disabled={!isAble}
		>
			{subject}
		</button>
	);
}

export default SubjectButton;
