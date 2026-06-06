import { useI18n } from '../i18n.jsx';

export default function Experience() {
  const { t } = useI18n();
  const { entries, title } = t('experience');

  return (
    <section id="experience" className="scroll-mt-28 space-y-8 animate-fade-in-up">
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">
        {title}
      </h3>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={`${entry.company}-${entry.title}`} className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 hover:border-gray-600">
            <h4 className="text-xl font-bold text-gray-200">
              {entry.title}
            </h4>

            <p className="text-gray-400 mt-1">
              {entry.company} • {entry.period}
            </p>

            <ul className="mt-4 space-y-3">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex text-gray-400">
                  <span className="w-1.5 h-1.5 bg-slate-100 rounded-full mr-3 mt-2 shrink-0"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
