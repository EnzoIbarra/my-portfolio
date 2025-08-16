'use client';
import TechBadge from './TechBadge';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
	const { language } = useLanguage();

	const content = {
		es: {
			title: 'Sobre mí',
			text: 'Soy Enzo Ibarra, desarrollador frontend formado en Henry, con experiencia en proyectos reales y metodologías ágiles. Disfruto crear interfaces modernas y funcionales, priorizando la experiencia del usuario. Me caracterizo por la buena comunicación, la colaboración en equipo y la facilidad para adaptarme a nuevos desafíos.',
			technologies: 'Tecnologías y herramientas',
		},
		en: {
			title: 'About me',
			text: "I'm Enzo Ibarra, a frontend developer trained at Henry, with experience in real-world projects and agile methodologies. I enjoy creating modern and functional interfaces while prioritizing user experience. I’m known for clear communication, teamwork, and adaptability to new challenges.",
			technologies: 'Technologies and tools',
		},
	};

	const t = content[language];

	return (
		<section id='about' className='py-20 px-6 max-w-7xl mx-auto'>
			<h2 className='text-3xl font-bold mb-6 text-red-500'>{t.title}</h2>

			<p className='mb-12 max-w-2xl text-lg'>{t.text}</p>

			<h3 className='text-xl font-semibold mb-4 text-white'>
				{t.technologies}
			</h3>

			<div className='flex flex-wrap gap-4'>
				<TechBadge label='React' icon='react' />
				<TechBadge label='Next.js' icon='nextjs' />
				<TechBadge label='Node.js' icon='nodejs' />
				<TechBadge label='TypeScript' icon='typescript' />
				<TechBadge label='Tailwind' icon='tailwindcss' />
				<TechBadge label='NestJS' icon='nestjs' />
				<TechBadge label='PostgreSQL' icon='postgresql' />
				<TechBadge label='GitHub' icon='github' />
				<TechBadge label='API REST' icon='api-rest' />
				<TechBadge label='AWS' icon='amazonwebservices' />
				<TechBadge label='MongoDB' icon='mongodb' />
				<TechBadge label='Redux' icon='redux' />
				<TechBadge label='Bootstrap' icon='bootstrap' />
				<TechBadge label='HTML5' icon='html5' />
				<TechBadge label='CSS3' icon='css3' />
				<TechBadge label='JavaScript' icon='javascript' />
				<TechBadge label='Figma' icon='figma' />
				<TechBadge label='Vite' icon='vite' />
				<TechBadge label='VS Code' icon='vscode' />
				<TechBadge label='TypeORM' icon='typeorm' />
			</div>
		</section>
	);
}
