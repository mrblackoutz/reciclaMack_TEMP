// footerConfig.js
import { messages } from '@/messages'
import { YouTube } from '@mui/icons-material'

export const ICON_SIZE = 32

export const quickLinks = [
	{ text: messages.aboutUs, href: '/quem-somos' },
	{ text: 'Pontos de coleta', href: '/pontos-de-coleta' },
	{ text: messages.faqComponent.faq, href: '/faq' },
	{ text: messages.contatoPage.contato, href: '/contato' }
]

export const legalLinks = [
	{ text: 'Direitos Autorais', href: '/direitos-autorais' },
	{ text: 'Políticas de Privacidade', href: '/privacidade' },
	{ text: 'Cookies', href: '/cookies' },
	{ text: 'Termos de Uso', href: '/termos-de-uso' }
]

export const contactInfo = [
	{
		icon: 'icone-telefone.png',
		alt: messages.footer.telefoneIconAlt,
		text: messages.footer.telefoneMackenzie
	},
	{
		icon: 'icone-email.png',
		alt: messages.footer.emailIconAlt,
		text: messages.footer.emailMackenzie
	},
	{
		icon: 'icone-local.png',
		alt: messages.footer.localIconAlt,
		text: messages.footer.localMackenzie,
		href: 'https://maps.app.goo.gl/pbfQXPMZMtVQmHzNA'
	}
]

export const socialMedia = [
	{
		name: 'YouTube',
		icon: YouTube,
		href: 'https://www.youtube.com/channel/UCMAJAKaW_MAxEANo-lTplgg'
	}
]
