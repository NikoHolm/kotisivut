import { useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

const EMAIL_ADDRESS = 'nikoholm32@gmail.com';
const GITHUB_URL = 'https://github.com/NikoHolm';

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
}

function ContactCard({ title, value, href, buttonLabel, secondaryAction }) {
  return (
    <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 text-center transition-colors hover:bg-gray-800 hover:border-gray-600">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
        {title}
      </p>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className="mt-3 block break-all text-lg font-semibold text-gray-100 transition-colors hover:text-white sm:text-xl"
      >
        {value}
      </a>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-gray-200"
        >
          {buttonLabel}
        </a>
        {secondaryAction}
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useRevealOnScroll();

  const handleCopyEmail = async () => {
    try {
      await copyText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-mt-28 space-y-8 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="border-b border-gray-800 pb-2 text-center text-3xl font-bold">
        {t('contact.title')}
      </h3>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-7 text-gray-400 sm:text-lg">
          {t('contact.body')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ContactCard
          title={t('contact.githubTitle')}
          value={t('contact.githubValue')}
          href={GITHUB_URL}
          buttonLabel={t('contact.openGitHub')}
        />

        <ContactCard
          title={t('contact.emailTitle')}
          value={EMAIL_ADDRESS}
          href={`mailto:${EMAIL_ADDRESS}`}
          buttonLabel={t('contact.sendEmail')}
          secondaryAction={
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center rounded-lg border border-gray-700/60 bg-transparent px-4 py-2 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-600 hover:text-white"
            >
              {copied ? t('contact.copied') : t('contact.copyEmail')}
            </button>
          }
        />
      </div>
    </section>
  );
}
