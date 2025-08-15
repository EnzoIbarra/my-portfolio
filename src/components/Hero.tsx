'use client';

import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
	const { language } = useLanguage();

	const content = {
		es: {
			greeting: '¡Hola! Soy',
			name: 'Enzo Ibarra',
			role: 'Desarrollador Frontend',
			cv: 'Descargar CV',
			contact: 'Contacto',
		},
		en: {
			greeting: "Hi! I'm",
			name: 'Enzo Ibarra',
			role: 'Frontend Developer',
			cv: 'Download CV',
			contact: 'Contact',
		},
	};

	const t = content[language];

	return (
		<div
			id='home'
			className='min-h-screen flex flex-col justify-center items-center text-center px-4'
		>
			<h1 className='text-3xl md:text-5xl font-bold'>{t.greeting}</h1>
			<h2 className='text-4xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 my-2'>
				{t.name}
			</h2>
			<p className='text-xl md:text-2xl mb-6'>{t.role}</p>

			<div className='flex gap-4'>
				<a
					href='/cv.pdf'
					download
					className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'
				>
					{t.cv}
				</a>
				<a
					href='#contact'
					className='border border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 px-4 py-2 rounded transition'
				>
					{t.contact}
				</a>
			</div>

			<div className='flex gap-6 mt-8'>
				<a
					href='https://github.com/EnzoIbarra'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-blue-600 transition'
				>
					<Github className='w-8 h-8' />
				</a>
				<a
					href='https://linkedin.com/in/enzofibid'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-blue-600 transition'
				>
					<Linkedin className='w-8 h-8' />
				</a>
			</div>
		</div>
	);
}
