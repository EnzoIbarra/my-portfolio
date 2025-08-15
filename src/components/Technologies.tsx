'use client';
import TechBadge from './TechBadge';

import {
	SiFirebase,
	SiMongodb,
	SiAmazon,
	SiGithub,
	SiRedux,
	SiBootstrap,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiFigma,
	SiVite,
	SiTypeorm,
} from 'react-icons/si';

const fallbackIcons: Record<string, React.ReactNode> = {
	firebase: <SiFirebase size={16} />,
	mongodb: <SiMongodb size={16} />,
	aws: <SiAmazon size={16} />,
	github: <SiGithub size={16} />,
	redux: <SiRedux size={16} />,
	bootstrap: <SiBootstrap size={16} />,
	html5: <SiHtml5 size={16} />,
	css3: <SiCss3 size={16} />,
	javascript: <SiJavascript size={16} />,
	figma: <SiFigma size={16} />,
	vite: <SiVite size={16} />,
	typeorm: <SiTypeorm size={16} />,
};

const technologies = [
	'react',
	'nextjs',
	'nodejs',
	'typescript',
	'tailwindcss',
	'nestjs',
	'postgresql',
	'github',
	'api rest',
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
