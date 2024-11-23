import HomePage from "@/app/pages/home/page";
import Portfolio from "@/app/pages/portfolio/page";
import Skills from "@/app/pages/skills/page";
import Education from "@/app/pages/education/page";
import Contact from "@/app/pages/contact/page";

export default function Home() {
  return (
    <main className="app-area">
      <HomePage />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
