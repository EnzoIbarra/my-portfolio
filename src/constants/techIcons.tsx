import {
	SiFirebase,
	SiMercadopago,
	SiCloudinary,
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
	SiMongodb,
} from 'react-icons/si';

const fallbackIcons: Record<string, React.ReactElement> = {
	firebase: <SiFirebase size={16} />,
	mercadopago: <SiMercadopago size={16} />,
	cloudinary: <SiCloudinary size={16} />,
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
	mongodb: <SiMongodb size={16} />,
};

export default fallbackIcons;
