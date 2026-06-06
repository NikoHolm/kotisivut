import { useI18n } from '../i18n.jsx';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="text-center p-8 text-gray-400 text-sm border-t border-gray-800/50 mt-16 bg-gray-900/30">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Niko. {t('footer.rights')}</p>
        <div className="flex space-x-6">
           <a href="https://github.com/NikoHolm" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
