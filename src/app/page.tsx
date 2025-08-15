import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='bg-white dark:bg-zinc-900 text-black dark:text-white scroll-smooth'>
				<section id='home'>
					<Hero />
				</section>
				<section id='about'>
					<About />
				</section>
				<section id='experience'>
					<Experience />
				</section>
				<section id='projects'>
					<Projects />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</main>
		</>
	);
}
