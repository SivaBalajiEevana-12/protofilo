import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import GithubSummary from "./components/GithubSummary";
import Skills from "./components/Skills";
import LeetcodeStats from "./components/LeetcodeStats";
import HackerRank from "./components/HackerRank";

function App() {
  return (
    <main>
      <Hero />
<SkillsMarquee />
<Skills />
<About />
<Projects />
<Experience />
<GithubSummary />
<LeetcodeStats />
<HackerRank />
<Timeline />
<TechStack />
<Contact />

    </main>
  );
}

export default App;