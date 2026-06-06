import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

function SkillCard({ skillGroup, index }) {
  const { ref, isVisible } = useRevealOnScroll({ rootMargin: '0px 0px -5% 0px' });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`group rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 transition-colors hover:border-gray-600 hover:bg-gray-800 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h4 className="mb-4 text-xl font-bold text-gray-200">{skillGroup.category}</h4>
      <ul className="space-y-2">
        {skillGroup.items.map((item, j) => (
          <li key={j} className="flex items-center text-gray-400 transition-colors group-hover:text-gray-300">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-100"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();
  const { ref, isVisible } = useRevealOnScroll();
  const { groups, title } = t('skills');

  return (
    <section
      id="skills"
      ref={ref}
      className={`scroll-mt-28 space-y-8 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((skillGroup, i) => (
          <SkillCard key={skillGroup.category} skillGroup={skillGroup} index={i} />
        ))}
      </div>
    </section>
  );
}
