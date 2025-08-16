'use client';

import { Mail, Github, Linkedin, Hand } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
	const { language } = useLanguage();

	const content = {
		es: {
			title: 'Contacto',
			subtitle: '¡Conectemos!',
			email: 'Enviar email',
			footer: 'Enzo Ibarra | Desarrollador Frontend',
		},
		en: {
			title: 'Contact',
			subtitle: "Let's Connect!",
			email: 'Send email',
			footer: 'Enzo Ibarra | Frontend Developer',
		},
	};

	const t = content[language];

	return (
		<section id='contact' className='py-20 px-6 max-w-7xl mx-auto text-center'>
			<h2 className='text-3xl font-bold mb-8 text-red-500'>{t.title}</h2>

			<div className='flex flex-col items-center justify-center gap-6'>
				<Hand size={48} className='text-white dark:text-white' />

				<h3 className='text-2xl font-semibold'>{t.subtitle}</h3>

				<a
					href='mailto:enzofibid@gmail.com'
					className='flex items-center gap-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition'
				>
					<Mail size={18} />
					<span>{t.email}</span>
				</a>

				<div className='flex gap-6 mt-4'>
					<a
						href='https://linkedin.com/in/enzoibarra'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-blue-500 transition'
					>
						<Linkedin size={28} />
					</a>
					<a
						href='https://github.com/EnzoIbarra'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-blue-500 transition'
					>
						<Github size={28} />
					</a>
				</div>
			</div>

			<p className='mt-12 text-xs text-zinc-400'>{t.footer}</p>
		</section>
	);
}
