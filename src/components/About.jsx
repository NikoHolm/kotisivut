import { useI18n } from '../i18n.jsx';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="scroll-mt-28 space-y-4">
      <div className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 hover:border-gray-600">
        <h4 className="text-xl font-fraunces text-gray-200 mb-2">
          {t('about.backgroundTitle')}
        </h4>

        <p className="text-gray-400">
          {t('about.background')}
        </p>
      </div>

      <div className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 hover:border-gray-600">
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
