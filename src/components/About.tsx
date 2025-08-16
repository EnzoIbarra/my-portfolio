'use client';
import TechBadge from './TechBadge';

export default function About() {
	return (
		<section id='about' className='py-20 px-6 max-w-7xl mx-auto'>
			<h2 className='text-3xl font-bold mb-6 text-red-500'>Sobre mí</h2>

			<p className='mb-12 max-w-2xl text-lg'>
				Soy Enzo Ibarra, desarrollador frontend con experiencia en la creación
				de interfaces modernas y funcionales. Me apasiona trabajar con
				tecnologías actuales como React, Next.js y Tailwind CSS, y construir
				soluciones que impacten positivamente en las personas.
			</p>

			<h3 className='text-xl font-semibold mb-4 text-white'>
				Tecnologías y herramientas
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
