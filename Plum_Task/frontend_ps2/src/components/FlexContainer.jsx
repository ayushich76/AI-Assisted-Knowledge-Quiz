export const FlexContainer = ({ children, style, verticallyStack = false }) => {
	return (
		<div
			className={`w-full p-4 flex ${
				verticallyStack ? "flex-col" : "flex-row"
			} ${style}`}
		>
			{children}
		</div>
	);
};
