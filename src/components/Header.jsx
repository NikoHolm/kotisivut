import { useI18n } from '../i18n.jsx';

export default function Header() {
  const { language, setLanguage, t } = useI18n();

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold group cursor-pointer self-start">
          {'latec.dev'.split('').map((char, index) => (
            <span 
              key={index} 
              className={`${index % 2 === 0 ? 'text-gray-300' : 'text-gray-200'} transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
            <a href="#home" className="transition-colors hover:text-white">{t('nav.home')}</a>
            <a href="#projects" className="transition-colors hover:text-white">{t('nav.projects')}</a>
            <a href="#contact" className="transition-colors hover:text-white">{t('nav.contact')}</a>
          </nav>
          <div className="inline-flex self-start rounded-full border border-white/10 bg-white/5 p-1 text-sm backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setLanguage('fi')}
              className={`rounded-full px-3 py-1 transition-colors ${language === 'fi' ? 'bg-white text-slate-900' : 'text-gray-400 hover:text-white'}`}
              aria-pressed={language === 'fi'}
              aria-label={`${t('header.languageLabel')}: ${t('header.finnish')}`}
            >
              {t('header.finnish')}
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 transition-colors ${language === 'en' ? 'bg-white text-slate-900' : 'text-gray-400 hover:text-white'}`}
              aria-pressed={language === 'en'}
              aria-label={`${t('header.languageLabel')}: ${t('header.english')}`}
            >
              {t('header.english')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
