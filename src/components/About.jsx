import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

export default function About() {
  const { t } = useI18n();
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-28 space-y-4 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 transition-colors hover:border-gray-600 hover:bg-gray-800">
        <h4 className="text-xl font-fraunces text-gray-200 mb-2">
          {t('about.backgroundTitle')}
        </h4>

        <p className="text-gray-400">
          {t('about.background')}
        </p>
      </div>

      <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 transition-colors hover:border-gray-600 hover:bg-gray-800">
        <h4 className="text-xl font-bold text-gray-200 mb-2">
          {t('about.currentTitle')}
        </h4>

        <p className="text-gray-400">
          {t('about.current')}
        </p>
      </div>
    </section>
  );
}
