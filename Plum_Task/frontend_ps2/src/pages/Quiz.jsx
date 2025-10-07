import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FlexContainer, Button } from "../components";
import { GoogleGenAI } from "@google/genai";

export const Quiz = () => {
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [questionnaire, setQuestionnaire] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0); // +1, 0
	const [showScore, setShowScore] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState({});
	const feedbackLabels = [
		"Poor",
		"Needs Improvement",
		"OK",
		"Good",
		"Nice",
		"Excellent"
	];

	const calculateScore = () => {
		let correctAnswers = 0;
		questionnaire.forEach((question, index) => {
			if (selectedOptions[index] === question.correctAnswerIdx) {
				correctAnswers++;
			}
		});
		setScore(correctAnswers);
	};

	const replayQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setSelectedOptions({});
	};

	useEffect(() => {
		// Make an API call to get the questionnaire on desired topic
		const genai = new GoogleGenAI({
			apiKey: import.meta.env.VITE_GOOGLE_API_KEY
		});
		genai.models
			.generateContent({
				model: "gemini-2.5-flash",
				contents: `prepare 5 mcq questions on ${topic} (with 4 options and 1 correct among them) and give output in valid json string that can be parsed using JSON.parse of js - [{question:, options:[], correctAnswerIdx:}]`
			})
			.then((response) => {
				const jsonString = response.text.split("json")[1].slice(0, -3);
				setQuestionnaire(JSON.parse(jsonString));
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return isLoading ? (
		<div className="flex justify-center items-center h-screen">
			<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
		</div>
	) : (
		<FlexContainer
			verticallyStack
			style="justify-between items-center w-full gap-4 h-screen px-10"
		>
			<h1>Quiz</h1>
			{showScore ? (
				<div className="text-center">
					<h2 className="text-4xl font-bold text-green-600 mb-4">
						Quiz Complete!
					</h2>
					<div className="bg-gray-100 p-6 rounded-lg">
						<p className="text-2xl font-semibold text-gray-800 mb-2">
							Your Score: {score} / {questionnaire.length}
						</p>
						<p className="text-lg text-gray-600">
							Percentage: {Math.round((score / questionnaire.length) * 100)}%
						</p>
						<p className="text-xl font-semibold text-gray-800 mt-2">
							Feedback:{" "}
							{feedbackLabels[Math.min(score, feedbackLabels.length - 1)]}
						</p>
						{score === questionnaire.length && (
							<p className="text-green-600 font-bold mt-2">🎉 Perfect Score!</p>
						)}
					</div>
					<Button
						btnTxt="🔄 Play Again"
						onClick={replayQuiz}
					/>
				</div>
			) : (
				<>
					<h2 className="text-2xl font-bold">
						{questionnaire[currentQuestion].question}
					</h2>
					<div className="grid grid-cols-2 gap-4">
						{questionnaire[currentQuestion].options.map((option, index) => (
							<button
								key={index}
								onClick={() =>
									setSelectedOptions({
										...selectedOptions,
										[currentQuestion]: index
									})
								}
								className={`cursor-pointer text-lg p-4 rounded-lg w-full border-2 transition-all duration-200 hover:shadow-md ${
									selectedOptions[currentQuestion] === index
										? "bg-blue-500 text-white border-blue-600 shadow-lg transform scale-105"
										: "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
								}`}
							>
								<div className="flex items-center gap-3">
									<div
										className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
											selectedOptions[currentQuestion] === index
												? "bg-white border-white"
												: "border-gray-400"
										}`}
									>
										{selectedOptions[currentQuestion] === index && (
											<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										)}
									</div>
									<span className="font-medium">{option}</span>
								</div>
							</button>
						))}
					</div>
				</>
			)}
			{!showScore && currentQuestion < questionnaire.length - 1 && (
				<Button
					btnTxt="Next"
					onClick={() => setCurrentQuestion(currentQuestion + 1)}
					disabled={selectedOptions[currentQuestion] === undefined}
				/>
			)}
			{!showScore && currentQuestion === questionnaire.length - 1 && (
				<Button
					btnTxt="Submit"
					onClick={() => {
						calculateScore();
						setShowScore(true);
					}}
					disabled={selectedOptions[currentQuestion] === undefined}
				/>
			)}
		</FlexContainer>
	);
};
