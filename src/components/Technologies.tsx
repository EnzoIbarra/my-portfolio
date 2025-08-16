'use client';
import TechBadge from './TechBadge';

const technologies = [
	'react',
	'nextjs',
	'nodejs',
	'typescript',
	'tailwindcss',
	'nestjs',
	'postgresql',
	'github',
	'api-rest',
	'aws',
	'mongodb',
	'redux',
	'bootstrap',
	'html5',
	'css3',
	'javascript',
	'figma',
	'vite',
	'typeorm',
];

export default function Technologies() {
	return (
		<div className='mt-12'>
			<h3 className='text-xl font-bold mb-4 text-white'>
				Tecnologías y herramientas
			</h3>

			<div className='flex flex-wrap gap-2'>
				{technologies.map((tech) => (
					<TechBadge key={tech} icon={tech} />
				))}
			</div>
		</div>
	);
}
