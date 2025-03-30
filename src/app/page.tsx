import Hero from './(sections)/hero/page';
import About from './(sections)/about/page';
import Projects from './(sections)/projects/page';
import Contact from './(sections)/contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
