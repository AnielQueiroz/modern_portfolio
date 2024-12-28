'use client'

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems, type NavItemsType } from "@/data";
import Loading from "@/loading";
import { useEffect, useState } from "react";
import {
	FaDiagramProject,
	FaEnvelope,
	FaQuoteRight,
	FaUser,
} from "react-icons/fa6";

export default function Home() {
	const icons = {
		Sobre: <FaUser />,
		Projetos: <FaDiagramProject />,
		Depoimentos: <FaQuoteRight />,
		Contato: <FaEnvelope />,
	};

	const navItemsWithIcons: (NavItemsType & { icon: JSX.Element })[] =
		navItems.map((item) => ({
			...item,
			icon: icons[item.name],
		}));

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadComponents = async () => {
			try {
				await Promise.all([
					import("@/components/Hero"),
					import("@/components/Grid"),
					import("@/components/RecentProjects"),
					import("@/components/Experience"),
					import("@/components/Approach"),
					import("@/components/Footer"),
				]);
			} catch (err) {
				console.error("Erro ao carregar componentes");
			}
		};

		loadComponents();
	}, []);

	return (
		// <>
		// 	{isLoading ? (
		// 		<Loading onFinish={() => setIsLoading(false)} />
		// 	) : (
				<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
					<div className="max-w-7xl w-full">
						<FloatingNav navItems={navItemsWithIcons} />
						<Hero />
            			<Grid />
						<RecentProjects />
						<Experience />
						<Approach />
						<Footer />
					</div>
				</main>
	// 		)}
	// 	</>
	);
}
