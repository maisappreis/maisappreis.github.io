import HomePage from "@/app/pages/home/page";
import Portfolio from "@/app/pages/portfolio/page";
import About from "@/app/pages/about/page";
import Skills from "@/app/pages/skills/page";
import Education from "@/app/pages/education/page";
import Contact from "@/app/pages/contact/page";
import Footer from "./layout/footer";
import Sidebar from "./layout/sidebar";

export default function Home() {
  return (
    <main id="home"
      className="app-area">
      <HomePage />
      <Portfolio />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Sidebar />
      <Footer />
    </main>
  );
}
