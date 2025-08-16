'use client';

import { Github, Linkedin, Download, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
	const { language } = useLanguage();

	const content = {
		es: {
			greeting: '¡Hola! Soy',
			name: 'Enzo Ibarra',
			role: 'Desarrollador Frontend',
			text: 'Apasionado con trabajar con tecnologías actuales como React, Next.js y Tailwind CSS creación de interfaces modernas y funcionales',
			cv: 'CV',
			contact: 'Contacto',
		},
		en: {
			greeting: "Hi! I'm",
			name: 'Enzo Ibarra',
			role: 'Frontend Developer',
			text: 'Passionate about working with modern technologies such as React, Next.js, and Tailwind CSS, creating modern and functional interfaces.',
			cv: 'CV',
			contact: 'Contact',
		},
	};

	const t = content[language];

	return (
		<div
			id='home'
			className='min-h-screen flex flex-col justify-center items-left text-left ml-7 px-4'
		>
			<h1 className='text-2xl md:text-2xl font-bold'>{t.greeting}</h1>
			<h2 className='text-4xl md:text-6xl font-extrabold'>{t.name}</h2>
			<p className='text-5xl md:text-md mb-6 max-w-[50ch] my-2 text-red-600 dark:text-red-600'>
				{t.role}
			</p>
			<p className='text-md md:text-xl mb-6 max-w-[60ch] '>{t.text}</p>

			<div className='flex gap-4'>
				<button className='py-4 px-3 gap-2 border border-red-500 hover:bg-red-700/40 text-white rounded transition flex'>
					<Download className='' />
					<a href='/cv.pdf' download>
						{t.cv}
					</a>
				</button>
				<button className='py-4 px-3 gap-2 border border-red-500 hover:bg-red-700/40 text-white rounded transition flex'>
					<Send />
					<a href='#contact'>{t.contact}</a>
				</button>
			</div>

			<div className='flex gap-6 mt-8'>
				<a
					href='https://github.com/EnzoIbarra'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-red-600/90 transition'
				>
					<Github className='w-8 h-8' />
				</a>
				<a
					href='https://linkedin.com/in/enzoibarra'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-red-600/90 transition'
				>
					<Linkedin className='w-8 h-8' />
				</a>
			</div>
		</div>
	);
}
