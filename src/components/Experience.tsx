'use client';
import TechBadge from './TechBadge';


import { experiences, ExperienceItem } from '@/data/experienceData';
import { useLanguage } from '@/context/LanguageContext';
import { SiFirebase, SiMercadopago, SiCloudinary } from 'react-icons/si';

const fallbackIcons: Record<string, React.ReactElement> = {
	firebase: <SiFirebase size={16} />,
	mercadopago: <SiMercadopago size={16} />,
	cloudinary: <SiCloudinary size={16} />,
};

export default function Experience() {
	const { language } = useLanguage();

	const sectionTitles = {
		es: 'Experiencia',
		en: 'Experience',
	};

	return (
		<section id='experience' className='py-20 px-6 max-w-7xl mx-auto'>
			<h2 className='text-3xl font-bold mb-12 text-red-500'>
				{sectionTitles[language]}
			</h2>

			<div className='grid md:grid-cols-2 gap-10'>
				{experiences[language].map((exp: ExperienceItem, index: number) => (
					<div key={index}>
						<h3 className='text-xl font-bold'>{exp.company}</h3>
						<p className='text-sm text-zinc-400 mb-1'>{exp.role}</p>
						<p className='text-sm text-zinc-500 mb-3'>
							{exp.from} - {exp.to}
						</p>
						<p className='text-sm mb-4'>{exp.description}</p>

						<div className='flex flex-wrap gap-2'>
							{exp.stack.map((tech) => (
								<TechBadge key={tech} icon={tech} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
