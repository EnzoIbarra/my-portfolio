export interface ExperienceItem {
	company: string;
	role: string;
	from: string;
	to: string;
	description: string;
	stack: string[];
}

export interface ExperiencesByLanguage {
	es: ExperienceItem[];
	en: ExperienceItem[];
}

export const experiences: ExperiencesByLanguage = {
	es: [
		{
			company: 'Héroes Cercanos',
			role: 'Desarrollador Frontend',
			from: 'Julio 2025',
			to: 'Agosto 2025',
			description:
				'Plataforma solidaria destinada a bomberos voluntarios de Argentina. Desarrollo de paneles administrativos, gestión de usuarios, donaciones, chatbot de soporte y campañas de correo automatizadas.',
			stack: [
				'nextjs',
				'tailwindcss',
				'nestjs',
				'typescript',
				'postgresql',
				'jwt',
				'cloudinary',
				'mercadopago',
			],
		},

		// {
		// 	company: 'Comercio Libre',
		// 	role: 'Desarrollador Frontend',
		// 	from: 'Mayo 2025',
		// 	to: 'Junio 2025',
		// 	description:
		// 		'Frontend completo de un e-commerce con flujo de compra (happy path), diseño UI/UX responsive y formularios dinámicos con validaciones.',
		// 	stack: ['nextjs', 'react', 'tailwindcss', 'formik', 'lucide-react'],
		// },

		// {
		// 	company: 'Estudio de Tatuajes',
		// 	role: 'Desarrollador Full Stack',
		// 	from: 'Marzo 2025',
		// 	to: 'Abril 2025',
		// 	description:
		// 		'Sistema de turnos online para estudio de tatuajes. Backend en Node + PostgreSQL, frontend en React con estilos modulares. Calendario y validaciones integradas.',
		// 	stack: ['react', 'nodejs', 'express', 'typescript', 'postgresql'],
		// },
	],
	en: [
		{
			company: 'Héroes Cercanos',
			role: 'Frontend Developer',
			from: 'July 2025',
			to: 'August 2025',
			description:
				'Charity platform for volunteer firefighters in Argentina. Built admin panels, user management, donations, chatbot support and automated email campaigns.',
			stack: [
				'nextjs',
				'tailwindcss',
				'nestjs',
				'typescript',
				'postgresql',
				'jwt',
				'cloudinary',
				'mercadopago',
			],
		},

		// {
		// 	company: 'Comercio Libre',
		// 	role: 'Frontend Developer',
		// 	from: 'May 2025',
		// 	to: 'June 2025',
		// 	description:
		// 		'Full e-commerce frontend with a complete checkout flow, responsive UI/UX design and dynamic forms with validation.',
		// 	stack: ['nextjs', 'react', 'tailwindcss', 'formik', 'lucide-react'],
		// },

		// {
		// 	company: 'Tattoo Studio',
		// 	role: 'Full Stack Developer',
		// 	from: 'March 2025',
		// 	to: 'April 2025',
		// 	description:
		// 		'Online booking system for a tattoo studio. Backend in Node.js + PostgreSQL, frontend in React with modular styles. Includes calendar and validations.',
		// 	stack: ['react', 'nodejs', 'express', 'typescript', 'postgresql'],
		// },
	],
};
