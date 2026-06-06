import { useI18n } from '../i18n.jsx';

export default function Skills() {
  const { t } = useI18n();
  const { groups, title } = t('skills');

  return (
    <section id="skills" className="scroll-mt-28 space-y-8 animate-fade-in-up">
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((skillGroup, i) => (
          <div key={i} className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 hover:border-gray-600 group">
            <h4 className="text-xl font-bold text-gray-200 mb-4">{skillGroup.category}</h4>
            <ul className="space-y-2">
              {skillGroup.items.map((item, j) => (
                <li key={j} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="w-1.5 h-1.5 bg-slate-100 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
