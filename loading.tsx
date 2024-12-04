import React, { useEffect, useState } from "react";

const Loading = ({ onFinish }) => {
	const words = [
		"Codando...",
		"git add .",
		'git commit -m "chore: finalizando"',
		"git push",
		"Erro: rejected devido a divergências",
		"Tentando resolver...",
		"git push --force",
	];

	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => {
				const nextIndex = (prevIndex + 1) % words.length;
				if (words[nextIndex] === "git push --force") {
					setTimeout(() => {
						onFinish();
					}, 1500); 
				}
				return nextIndex;
			});
		}, 2200);

		return () => clearInterval(interval);
	}, [words, onFinish]);

	return (
		<div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full">
			<img
				className="rounded-[50%] object-cover"
				src={"/codando.gif"}
				alt="Gif de alguém codando"
				style={{
					height: "260px",
					width: "260px",
				}}
			/>
			<p className="mt-4 text-lg !text-lime-700">{words[currentWordIndex]}</p>
		</div>
	);
};

export default Loading;
