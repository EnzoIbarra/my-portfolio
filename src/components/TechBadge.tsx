'use client';

import fallbackIcons from '@/constants/techIcons';

type TechBadgeProps = {
	icon: string;
	label?: string;
};

export default function TechBadge({ icon, label }: TechBadgeProps) {
	const normalized = icon.toLowerCase().replace(/\s+/g, '');
	const fallback = fallbackIcons[normalized];

	return (
		<span className='flex items-center gap-1 bg-zinc-800 text-white text-sm px-3 py-1 rounded-full'>
			{fallback ? (
				fallback
			) : (
				<i className={`devicon-${normalized}-original colored text-base`} />
			)}
			<span className='capitalize'>{label || icon}</span>
		</span>
	);
}
