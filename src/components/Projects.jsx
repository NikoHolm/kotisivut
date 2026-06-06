import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useRevealOnScroll({ rootMargin: '0px 0px -5% 0px' });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`group min-w-0 rounded-xl border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-slate-900/50 hover:bg-gray-750 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h4 className="mb-2 break-word text-xl font-bold leading-tight hyphens-auto group-hover:text-slate-200/90">
        {project.title}
      </h4>
      <p className="mb-4 text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const { ref, isVisible } = useRevealOnScroll();
  const { items, title } = t('projects');

  return (
    <section
      id="projects"
      ref={ref}
      className={`scroll-mt-28 space-y-8 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="text-3xl font-bold border-b border-gray-800 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
