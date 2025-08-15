'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
	const { language, toggleLanguage } = useLanguage();
	const [isDark, setIsDark] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>('home');

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	// Scroll listener
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'experience', 'projects', 'contact'];
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && window.scrollY + 100 >= section.offsetTop) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ id: 'home', label: language === 'es' ? 'Inicio' : 'Home' },
		{ id: 'about', label: language === 'es' ? 'Sobre mí' : 'About me' },
		{
			id: 'experience',
			label: language === 'es' ? 'Experiencia' : 'Experience',
		},
		{ id: 'projects', label: language === 'es' ? 'Proyectos' : 'Projects' },
		{ id: 'contact', label: language === 'es' ? 'Contacto' : 'Contact' },
	];

	return (
		<nav className='fixed top-0 left-0 w-full bg-black/80 text-white z-50'>
			<div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='text-xl font-bold tracking-wide'>
					<span className='text-white'>MM</span>
					<span className='text-red-600 ml-1'>Enzo Ibarra</span>
				</div>

				<ul className='hidden md:flex gap-6 text-sm font-medium'>
					{navItems.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className={`transition ${
									activeSection === item.id
										? 'text-red-500'
										: 'hover:text-red-500'
								}`}
							>
								{item.label}
							</a>
						</li>
					))}
					<li>
						<button
							onClick={toggleLanguage}
							className={`transition ${
								language === 'en' ? 'text-red-500' : 'hover:text-red-500'
							}`}
						>
							EN
						</button>
						<span className='mx-1 text-gray-500'>|</span>
						<button
							onClick={toggleLanguage}
							className={`transition ${
								language === 'es' ? 'text-red-500' : 'hover:text-red-500'
							}`}
						>
							ES
						</button>
					</li>
					<li>
						<button
							onClick={() => setIsDark(!isDark)}
							className='hover:text-red-500'
						>
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>
					</li>
				</ul>

				<button
					className='md:hidden text-white'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{menuOpen && (
				<ul className='md:hidden flex flex-col items-center gap-4 pb-6 bg-black/90 text-sm font-medium'>
					{navItems.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className={`transition ${
									activeSection === item.id
										? 'text-red-500'
										: 'hover:text-red-500'
								}`}
								onClick={() => setMenuOpen(false)}
							>
								{item.label}
							</a>
						</li>
					))}
					<li className='flex gap-2'>
						<button
							onClick={toggleLanguage}
							className={`transition ${
								language === 'en' ? 'text-red-500' : 'hover:text-red-500'
							}`}
						>
							EN
						</button>
						<span className='text-gray-500'>|</span>
						<button
							onClick={toggleLanguage}
							className={`transition ${
								language === 'es' ? 'text-red-500' : 'hover:text-red-500'
							}`}
						>
							ES
						</button>
					</li>
					<li>
						<button
							onClick={() => setIsDark(!isDark)}
							className='hover:text-red-500'
						>
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
}
