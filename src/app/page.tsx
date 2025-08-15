// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Experience from '@/components/Experience';
// import Projects from '@/components/Projects';
// import Contact from '@/components/Contact';
// import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<>
			{/* <Navbar /> */}
			<main className='bg-white dark:bg-zinc-900 text-black dark:text-white scroll-smooth'>
				{/* <section id='home'>
					<Hero />
				</section> */}
				<section className='bg-white dark:bg-black text-black dark:text-white p-10'>
					<h1 className='text-3xl font-bold text-red-600'>Enzo Ibarra</h1>
				</section>
				{/* <section id='about'>
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
				</section> */}
			</main>
		</>
	);
}
