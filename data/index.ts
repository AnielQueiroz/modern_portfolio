export type NavItemsType = {
	name: string;
	link: string;
	icon?: JSX.Element;
}

export const navItems: NavItemsType[] = [
	{ name: "Sobre", link: "#about" },
	{ name: "Projetos", link: "#projects" },
	// { name: "Depoimentos", link: "#testimonials" },
	{ name: "Contato", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title:
			"Valorizo a parceria com diálogo transparente",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Sem fronteiras",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "Minha stack",
		description: "Em constante aprendizado...",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Aficionado por tecnologia e entusiasta do desenvolvimento",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Atualmente estudando Flutter",
		description: "E nos bastidores...",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Gostaria de iniciar um projeto em parceria?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Um sistema de agendamento para barbearias",
		des: "Facilita a marcação de horários, oferecendo uma experiência prática e eficiente tanto para clientes quanto para profissionais.",
		img: "/gendapro.png",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/pg.svg", "prisma.svg"],
		link: "https://github.com/AnielQueiroz/nenelbarber",
	},
	{
		id: 2,
		title: "DevTalk - Uma Comunidade para Devs",
		des: "Este sistema foi criado para fornecer um ambiente interativo, com comunicações em tempo real com outros programadores.",
		img: "/devtalk.png",
		iconLists: ["/node.svg", "/react.svg", "/express.svg", "/tail.svg", "/ts.svg", "/socket-io.svg", "cloudinary.svg", "/mongodb.svg"],
		link: "https://devtalk.onrender.com/",
	},
	// {
	// 	id: 3,
	// 	title: "AI Image SaaS - Canva Application",
	// 	des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
	// 	img: "/p3.svg",
	// 	iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
	// 	link: "https://github.com/adrianhajdin/ai_saas_app",
	// },
	// {
	// 	id: 4,
	// 	title: "Animated Apple Iphone 3D Website",
	// 	des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
	// 	img: "/p4.svg",
	// 	iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
	// 	link: "https://github.com/adrianhajdin/iphone",
	// },
];

export const testimonials = [
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
];

export const companies = [
	{
		id: 1,
		name: "cloudinary",
		img: "/cloud.svg",
		nameImg: "/cloudName.svg",
	},
	{
		id: 2,
		name: "appwrite",
		img: "/app.svg",
		nameImg: "/appName.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "stream",
		img: "/s.svg",
		nameImg: "/streamName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Desenvolvedor Fullstack (Focado no Frontend)",
		desc: "Atuo no desenvolvimento de uma plataforma para laudos médicos ditados, utilizando jQuery, Bootstrap e PHP. Foco na criação de interfaces intuitivas e integradas, incluindo soluções com IA para aprimorar a correção automática de laudos, otimizando a eficiência e a precisão no setor médico.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Sistema de Registro Chamados",
		desc: "Este sistema foi desenvolvido para gerenciar e acompanhar chamados técnicos, oferecendo uma interface eficiente e responsiva com Tailwind. Utilizando Node.js e Express no backend, arquitetura MVC (Model-View-Controller) para garantir modularidade e manutenibilidade. O MongoDB para armazenar os registros de forma escalável, e Gulp para automatizar tarefas no frontend, otimizando a construção de assets como CSS e JavaScript.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	// {
	// 	id: 3,
	// 	title: "Freelance App Dev Project",
	// 	desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
	// 	className: "md:col-span-2", // change to md:col-span-2
	// 	thumbnail: "/exp3.svg",
	// },
	// {
	// 	id: 4,
	// 	title: "Lead Frontend Developer",
	// 	desc: "Developed and maintained user-facing features using modern frontend technologies.",
	// 	className: "md:col-span-2",
	// 	thumbnail: "/exp4.svg",
	// },
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		title: "Github",
		href: "https://github.com/AnielQueiroz",
	},
	{
		id: 2,
		img: "/link.svg",
		title: "Linkedin",
		href: "https://www.linkedin.com/in/aniel-queiroz-87a220186/"
	},
	// {
	// 	id: 3,
	// 	img: "/twit.svg",
	// 	title: "Twitter",
	// 	href: "#"
	// },
];
