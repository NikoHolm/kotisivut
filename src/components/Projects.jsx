import { useI18n } from '../i18n.jsx';

export default function Projects() {
  const { t } = useI18n();
  const { items, title } = t('projects');

  return (
    <section id="projects" className="scroll-mt-28 space-y-8">
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((project, i) => (
          <div key={i} className="min-w-0 p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors border border-gray-700 hover:border-slate-900/50 group animate-pulse hover:animate-none">
            <h4 className="text-xl font-bold leading-tight hyphens-auto break-word group-hover:text-slate-200/90 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
