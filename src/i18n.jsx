/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
  fi: {
    nav: {
      home: 'Etusivu',
      projects: 'Projektit',
      contact: 'Ota yhteyttä',
    },
    header: {
      languageLabel: 'Kieli',
      finnish: 'FI',
      english: 'EN',
    },
    hero: {
      greeting: 'Hei, olen',
      role: 'kehittäjä.',
      intro:
        'Olen juuri valmistunut Savon ammattiopistosta tieto- ja viestintätekniikan alalta ohjelmistokehittäjäksi.',
      projectsCta: 'Katso projektini',
      githubCta: 'GitHub-Profiili',
    },
    about: {
      backgroundTitle: 'Taustani',
      background:
        'Olen ohjelmistokehittäjä, jota kiinnostavat erityisesti uudet teknologiat ja käytännön projektit.',
      currentTitle: 'Tällä hetkellä',
      current:
        'Tällä hetkellä työskentelen IoT-projektin parissa, jossa hyödynnän Raspberry Pi:tä sekä erilaisia lämpötila- ja kosteusantureita. Projektin tavoitteena on kerätä reaaliaikaista dataa saunan olosuhteista ja välittää API-tiedot Wi-fi:n kautta puhelinsovellukseen, joka tehdään Kotlinilla.',
    },
    experience: {
      title: 'Työkokemus',
      entries: [
        {
          title: 'Backend Kehittäjä (harjoittelija)',
          company: 'CliniSoft Oy',
          period: 'Tammikuu 2025 – Huhtikuu 2025',
          bullets: [
            'Kehitin testausautomaatio sovelluksen PHP:llä, joka vertaili MySQL ja REST API rajapintojen tuloksia.',
          ],
        },
        {
          title: 'Ohjelmistokehittäjä (harjoittelija)',
          company: 'BC Bertenex Oy',
          period: 'Marraskuu 2025 – Toukokuu 2026',
          bullets: [
            'Kehitin kaksi full stack -verkkosivua käyttäen Reactia, Firebase Authenticationia ja Firestore-tietokantaa.',
            'Toteutin käyttäjien tunnistautumisen, tietokantaintegraatiot sekä responsiiviset käyttöliittymät.',
            'Kehitin Swiftillä mobiilisovelluksen, joka hyödyntää Firebase Authenticationia ja Firestore-tietokantaa käyttäjätietojen tallentamiseen.',
          ],
        },
      ],
    },
    projects: {
      title: 'Valitut projektit',
      items: [
        {
          title: 'Ravit-sovellus',
          description:
            'Ravit-sovellus, jossa jokaisella hevosella on eri todennäköisyydet ja kertoimet. Sovellus on tehty käyttäen Swiftiä ja Supabasea.',
          tags: ['Swift', 'Supabase'],
        },
        {
          title: 'Testausautomaatiosovellus',
          description:
            'Testausautomaatiosovellus, jossa vertailtiin MySQL- ja API-rajapintojen tuloksia keskenään. Tein tämän työharjoittelussa.',
          tags: ['PHP', 'MySQL', 'REST API'],
        },
        {
          title: 'Muistipeli',
          description:
            'Perinteinen muistipeli, jossa etsitään toisiaan vastaavia korttipareja.',
          tags: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
        },
        {
          title: 'Muistio kalenterilla',
          description:
            'Muistiinpanosovellus, johon käyttäjä voi syöttää tärkeät asiat muistiin ja merkitä ne myös kalenteriin.',
          tags: ['Flutter', 'Dart'],
        },
        {
          title: 'Verkkokauppa',
          description:
            'Verkkokauppa, jossa myydään puhelimia, jotka haetaan tietokannasta ID:n avulla. Ostoskorissa käyttäjä voi tarkastella valitsemiaan tuotteita, nähdä kokonaishinnan ja poistaa haluamansa tuotteet.',
          tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
        },
        {
          title: 'Palikkapeli',
          description:
            'Pystysuuntainen tasohyppelypeli, jossa pelaaja hyppii alustalta toiselle ylöspäin ja yrittää rikkoa oman ennätyksensä.',
          tags: ['C#', 'Blender', 'Unity'],
        },
      ],
    },
    skills: {
      title: 'Taidot ja teknologiat',
      groups: [
        { category: 'Frontend', items: ['React', 'JS / TS', 'Tailwind CSS', 'Vite'] },
        { category: 'Backend', items: ['Python', 'PHP', 'REST API:t', 'Express'] },
        { category: 'Mobiilikehitys', items: ['Flutter', 'Swift', 'Kotlin (opiskelen)'] },
        { category: 'Tietokannat', items: ['MySQL', 'PostgreSQL', 'NoSQL (Firestore)', 'MongoDB'] },
        { category: 'Pilvi ja työkalut', items: ['Git', 'GitHub', 'Firebase'] },
        { category: 'Desktop', items: ['Electron', 'C#', 'Windows Forms'] },
      ],
    },
    contact: {
      title: 'Ota yhteyttä',
      body:
        'Jos haluat ottaa yhteyttä, helpoimmat reitit ovat GitHub tai sähköposti. Molemmat toimivat suoraan selaimessa.',
      githubTitle: 'GitHub',
      githubValue: 'github.com/NikoHolm',
      openGitHub: 'Avaa GitHub',
      emailTitle: 'Sähköposti',
      sendEmail: 'Lähetä viesti',
      copyEmail: 'Kopioi osoite',
      copied: 'Kopioitu',
      emailCopied: 'Sähköposti kopioitu leikepöydälle.',
    },
    footer: {
      rights: 'Kaikki oikeudet pidätetään.',
      contact: 'Ota yhteyttä',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      languageLabel: 'Language',
      finnish: 'FI',
      english: 'EN',
    },
    hero: {
      greeting: 'Hi, I am',
      role: 'developer.',
      intro:
        'I recently graduated from Savon Ammattiopisto in Information and Communications Technology as a software developer.',
      projectsCta: 'View my projects',
      githubCta: 'GitHub profile',
    },
    about: {
      backgroundTitle: 'My background',
      background:
        'I am a software developer who is especially interested in new technologies and practical projects.',
      currentTitle: 'Right now',
      current:
        'I am currently working on an IoT project using a Raspberry Pi together with different temperature and humidity sensors. The goal is to collect real-time sauna environment data and send the API data over Wi-Fi to a mobile app built with Kotlin.',
    },
    experience: {
      title: 'Work experience',
      entries: [
        {
          title: 'Backend Developer Intern',
          company: 'CliniSoft Oy',
          period: 'January 2025 – April 2025',
          bullets: [
            'Built a test automation application with PHP that compared results from MySQL and REST API endpoints.',
          ],
        },
        {
          title: 'Software Developer Intern',
          company: 'BC Bertenex Oy',
          period: 'November 2025 – May 2026',
          bullets: [
            'Built two full-stack websites using React, Firebase Authentication, and Firestore.',
            'Implemented user authentication, database integrations, and responsive user interfaces.',
            'Built a Swift mobile app that uses Firebase Authentication and Firestore to store user data.',
          ],
        },
      ],
    },
    projects: {
      title: 'Selected projects',
      items: [
        {
          title: 'Horse racing app',
          description:
            'A horse racing app where you can bet on races. Each horse has different probabilities and odds. The app was built with Swift and Supabase.',
          tags: ['Swift', 'Supabase'],
        },
        {
          title: 'Test automation app',
          description:
            'A test automation app that compared results from MySQL and API endpoints. I built this during my internship.',
          tags: ['PHP', 'MySQL', 'REST API'],
        },
        {
          title: 'Memory game',
          description:
            'A memory game inspired by a classic childhood game, built with React and Tailwind CSS.',
          tags: ['React', 'Tailwind CSS', 'Vite'],
        },
        {
          title: 'Notes with calendar',
          description:
            'A note-taking app where users can save important things and mark them on a calendar too.',
          tags: ['Flutter', 'Dart'],
        },
        {
          title: 'Online store',
          description:
            'An online store that sells phones fetched from a database by ID. In the cart, users can review selected products, see the total price, and remove items they no longer want.',
          tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
        },
        {
          title: 'Block platformer',
          description:
            'A vertical platformer where you climb higher by jumping across platforms and trying to beat your high score.',
          tags: ['C#', 'Blender', 'Unity'],
        },
      ],
    },
    skills: {
      title: 'Skills & technologies',
      groups: [
        { category: 'Frontend', items: ['React', 'JS / TS', 'Tailwind CSS', 'Vite'] },
        { category: 'Backend', items: ['Python', 'PHP', 'REST APIs', 'Express'] },
        { category: 'Mobile development', items: ['Flutter', 'Swift', 'Kotlin (learning)'] },
        { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'NoSQL (Firestore)', 'MongoDB'] },
        { category: 'Cloud & tools', items: ['Git', 'GitHub', 'Firebase'] },
        { category: 'Desktop', items: ['Electron', 'C#', 'Windows Forms'] },
      ],
    },
    contact: {
      title: 'Get in touch',
      body:
        'If you want to reach out, the easiest options are GitHub or email. Both work directly in the browser.',
      githubTitle: 'GitHub',
      githubValue: 'github.com/NikoHolm',
      openGitHub: 'Open GitHub',
      emailTitle: 'Email',
      sendEmail: 'Send message',
      copyEmail: 'Copy address',
      copied: 'Copied',
      emailCopied: 'Email copied to clipboard.',
    },
    footer: {
      rights: 'All rights reserved.',
      contact: 'Contact',
    },
  },
};

const I18nContext = createContext(null);

function resolvePath(source, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'fi';
    }

    const stored = window.localStorage.getItem('language');
    if (stored === 'fi' || stored === 'en') {
      return stored;
    }

    const browserLanguage = window.navigator.language?.toLowerCase() ?? '';
    return browserLanguage.startsWith('en') ? 'en' : 'fi';
  });

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.fi;

    return {
      language,
      setLanguage,
      t: (path) => resolvePath(dictionary, path) ?? path,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }

  return context;
}
