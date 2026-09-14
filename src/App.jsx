import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Practice from "./components/Practice.jsx";
import Background from "./components/Background.jsx";
import Contact from "./components/Contact.jsx";
import useSmoothScroll from "./lib/useSmoothScroll.js";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Hero />
      <main>
        <Work />
        <Practice />
        <Background />
      </main>
      <Contact />
    </>
  );
}
