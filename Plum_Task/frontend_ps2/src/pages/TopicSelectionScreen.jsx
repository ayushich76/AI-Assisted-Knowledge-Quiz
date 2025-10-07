import { FlexContainer, Button } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router";

export const TopicSelectionScreen = () => {
	let topics = [
		"Wellness & Mindfulness",
		"Technology Trends",
		"Personal Finance",
		"Sustainable Living",
		"Creative Arts",
		"Sports & Fitness"
	];

	const [selectedTopic, setSelectedTopic] = useState(0);
	const navigate = useNavigate();

	return (
		<FlexContainer
			verticallyStack
			style="justify-between items-center w-full gap-4 h-screen px-10"
		>
			<h1 className="text-2xl font-bold">Select Your Topic</h1>
			<div className="grid grid-cols-3 gap-2 w-3/4 mx-auto">
				{topics.map((topic, index) => (
					<div
						key={index}
						onClick={() => setSelectedTopic(index)}
						className={`cursor-pointer text-lg p-2 rounded ${
							selectedTopic === index ? "bg-gray-500 text-white" : ""
						}`}
					>
						{topic}
					</div>
				))}
			</div>
			<Button
				btnTxt="Start Quiz"
				onClick={() => navigate(`/quiz/${topics[selectedTopic]}`)}
			/>
		</FlexContainer>
	);
};
