"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Heading from "./sm-components/Heading";

const Approach = () => {
	return (
		<section className="w-full py-20">
			<Heading firstPhrase="Minhas" secondePhrase="abordagens" />

			<div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
				<Card
					title="Planejamento e Análise"
					icon={<AceternityIcon order="Fase 1" />}
					description="Nesta fase, são identificadas as necessidades do projeto, definindo seus objetivos, requisitos e escopo. Inclui a análise de viabilidade, pesquisa de mercado e levantamento de riscos para garantir uma base sólida para o desenvolvimento."
				>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName="bg-emerald-900"
					/>
				</Card>
				<Card
					title="Desenvolvimento"
					icon={<AceternityIcon order="Fase 2" />}
					description="Com base no planejamento, inicia-se a criação do produto. As soluções são implementadas utilizando as melhores práticas e tecnologias adequadas, garantindo eficiência, qualidade e aderência aos requisitos definidos."
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName="bg-black"
						colors={[
							[236, 72, 153],
							[232, 121, 249],
						]}
						dotSize={2}
					/>
				</Card>
				<Card
					title="Lançamento e Manutenção"
					icon={<AceternityIcon order="Fase 3" />}
					description="Após a finalização, o projeto é entregue e integrado ao ambiente do cliente. Essa fase inclui treinamentos, ajustes finais e suporte contínuo para garantir o funcionamento estável, com atualizações e melhorias contínuas conforme necessário."
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName="bg-sky-600"
						colors={[[125, 211, 252]]}
					/>
				</Card>
			</div>
		</section>
	);
};

const Card = ({
	title,
	icon,
	children,
    description,
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
    description?: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
		>
			<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
			<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
					{title}
				</h2>
				<h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{
                    color: '#e4ecff'
                }}>
					{description}
				</h2>
			</div>
		</div>
	);
};

const AceternityIcon = ({ order }: { order: string }) => {
	return (
		<div>
			<button
				type="button"
				className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-xl font-bold">
					{order}
				</span>
			</button>
		</div>
	);
};

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className={className}
			{...rest}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
		</svg>
	);
};

export default Approach;
