import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BentoGridDemo } from "@/components/teste-bento";
import { navItems, type NavItemsType } from "@/data";
import { FaDiagramProject, FaEnvelope, FaQuoteRight, FaUser } from "react-icons/fa6";

export default function Home() {
  const icons = {
    Sobre: <FaUser />,
    Projetos: <FaDiagramProject />,
    Depoimentos: <FaQuoteRight />,
    Contato: <FaEnvelope />
  }

  const navItemsWithIcons: (NavItemsType & { icon: JSX.Element })[] = navItems.map(item => ({
    ...item,
    icon: icons[item.name]
  }));

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          navItemsWithIcons
        } />
        <Hero />
        {/* <Grid /> */}
        <BentoGridDemo />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
