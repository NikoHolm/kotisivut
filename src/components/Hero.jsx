import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

export default function Hero() {
  const { t } = useI18n();
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="home"
      ref={ref}
      className={`scroll-mt-28 space-y-6 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h2 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
        {t('hero.greeting')} <span className="text-gray-400">Full </span>Stack <span className="text-gray-500">{t('hero.role')}</span>
      </h2>
      <p className="max-w-2xl text-base text-gray-400 sm:text-xl">
        {t('hero.intro')}
      </p>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
        <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-gray-200">
          {t('hero.projectsCta')}
        </a>
        <a href="https://github.com/NikoHolm" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">
          {t('hero.githubCta')}
        </a>
      </div>
    </section>
  );
}
