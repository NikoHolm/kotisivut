import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

function ExperienceCard({ entry, index }) {
  const { ref, isVisible } = useRevealOnScroll({ rootMargin: '0px 0px -5% 0px' });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 transition-colors hover:border-gray-600 hover:bg-gray-800 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h4 className="text-xl font-bold text-gray-200">
        {entry.title}
      </h4>

      <p className="mt-1 text-gray-400">
        {entry.company} • {entry.period}
      </p>

      <ul className="mt-4 space-y-3">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex text-gray-400">
            <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-100"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const { t } = useI18n();
  const { ref, isVisible } = useRevealOnScroll();
  const { entries, title } = t('experience');

  return (
    <section
      id="experience"
      ref={ref}
      className={`scroll-mt-28 space-y-8 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">
        {title}
      </h3>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <ExperienceCard key={`${entry.company}-${entry.title}`} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
