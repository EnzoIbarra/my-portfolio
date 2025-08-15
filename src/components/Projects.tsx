'use client';

import { useLanguage } from '@/context/LanguageContext';

const projects = {
	es: [
		{
			title: 'Héroes Cercanos',
			description:
				'Plataforma de gestión de donaciones, campañas de correo y soporte con IA.',
			image: '/images/heroes.png',
			technologies: [
				'nextjs',
				'nestjs',
				'tailwindcss',
				'typescript',
				'postgresql',
				'jwt',
				'cloudinary',
				'mercadopago',
			],
			links: {
				demo: 'https://heroes-cercanos-front.onrender.com',
				githubFrontend: 'https://github.com/HeroesCercanos/Front',
				githubBackend: 'https://github.com/HeroesCercanos/Back',
			},
		},
	],
	en: [
		{
			title: 'Héroes Cercanos',
			description:
				'Donation management platform with email campaigns and AI-based support.',
			image: '/heroes.png',
			technologies: [
				'nextjs',
				'nestjs',
				'tailwindcss',
				'typescript',
				'postgresql',
				'jwt',
				'cloudinary',
				'mercadopago',
			],
			links: {
				demo: 'https://heroes-cercanos-front.onrender.com',
				githubFrontend: 'https://github.com/HeroesCercanos/Front',
				githubBackend: 'https://github.com/HeroesCercanos/Back',
			},
		},
	],
};

export default function Projects() {
	const { language } = useLanguage();
	const t = {
		es: 'Proyectos',
		en: 'Projects',
	};

	return (
		<section id='projects' className='py-20 px-6 max-w-7xl mx-auto'>
			<h2 className='text-3xl font-bold mb-12 text-red-500'>{t[language]}</h2>

			<div className='grid md:grid-cols-2 gap-10'>
				{projects[language].map((project, index) => (
					<div
						key={index}
						className='bg-zinc-800 rounded-lg p-6 shadow-lg text-white'
					>
						{project.image && (
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-48 object-cover rounded mb-4'
							/>
						)}

						<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
						<p className='text-sm mb-4'>{project.description}</p>

						<div className='flex flex-wrap gap-2 mb-4'>
							{project.technologies.map((tech) => (
								<TechBadge key={tech} icon={tech} />
							))}
						</div>

						<div className='flex flex-wrap gap-3'>
							<a
								href={project.links.demo}
								target='_blank'
								rel='noopener noreferrer'
								className='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded'
							>
								Demo
							</a>
							<a
								href={project.links.githubFrontend}
								target='_blank'
								rel='noopener noreferrer'
								className='bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded'
							>
								GitHub Front
							</a>
							<a
								href={project.links.githubBackend}
								target='_blank'
								rel='noopener noreferrer'
								className='bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded'
							>
								GitHub Back
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function TechBadge({ icon }: { icon: string }) {
	return (
		<span className='flex items-center gap-1 bg-zinc-700 text-white text-xs px-3 py-1 rounded-full'>
			<i className={`devicon-${icon}-original colored text-base`}></i>
			<span className='capitalize'>{icon}</span>
		</span>
	);
}
