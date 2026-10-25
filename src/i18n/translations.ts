import { experiences, projects, profile } from '../data/portfolio'
import type { Language, Translations } from './types'

// Approved English project/experience text comes directly from the existing data.
// Japanese copy is keyed by the original names, never by display order.
export const translations: Record<Language, Translations> = {
  en: {
    seo: {
      title: 'Naing Min Htet Oo | Software Engineer & Full-Stack Developer',
      description: 'Naing Min Htet Oo, a software engineer in Yangon, Myanmar, developing web, mobile, and desktop applications with C#/.NET, JavaScript, REST APIs, and SQL databases.',
      ogDescription: 'Explore my work on Japanese client and internal business systems, full-stack applications, and mobile development.',
    },
    common: { skip: 'Skip to content', location: profile.location, softwareEngineer: 'Software Engineer', fullStackDeveloper: 'Full-Stack Developer', githubLabel: 'GitHub', linkedinLabel: 'LinkedIn', current: 'CURRENT' },
    nav: { label: 'Main navigation', homeLabel: 'Naing Min Htet Oo home', open: 'Open menu', close: 'Close menu', lightTheme: 'Switch to light mode', darkTheme: 'Switch to dark mode', changeLanguage: 'Change language', links: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact' } },
    hero: {
      intro: ['Turning business needs', 'into working software.'],
      description: 'My experience spans web, mobile, and desktop applications for Japanese clients and internal business systems, from frontend interfaces to backend APIs, databases, testing, and maintenance.',
      viewWork: 'View my work', requestResume: 'Request my resume', resumeSubject: 'Resume request', contact: 'Contact me', platforms: 'WEB / MOBILE / DESKTOP', aboutLink: 'A little about me',
    },
    profile: { greeting: "Hello, I'm NMHO.", stack: 'Web · Mobile · Backend' },
    about: {
      heading: { label: 'About', title: 'A little about me' },
      paragraphs: [
        'I’m a software engineer based in Yangon, working across full-stack web development, mobile applications, and backend systems.',
        'At Tosco Myanmar, I contributed to Japanese client and internal business projects through requirements analysis, development, testing, deployment, and maintenance. My work included REST API integration, database development, data migration, and Excel exports.',
        'I enjoy working with a team and supporting junior developers. Following an organizational change, I transferred from Tosco Myanmar to VAC Myanmar, where I’m currently studying Japanese in preparation for work in Japan.',
      ],
      focusLabel: 'What I work on',
      focus: [ { title: 'Web & mobile apps', description: 'Responsive web and mobile development' }, { title: 'Backend & APIs', description: 'Backend functionality and REST APIs' }, { title: 'Databases & testing', description: 'Databases, testing, and maintenance' } ],
    },
    experience: { heading: { label: 'Experience', title: 'Work experience', intro: 'Where I’ve worked and what I’ve been doing.' }, entries: Object.fromEntries(experiences.map(job => [job.company, { role: job.role, date: job.date, points: job.points }])) },
    projects: {
      heading: { label: 'Selected work', title: 'Projects I’ve worked on', intro: 'A few projects I helped build with my teams.' },
      contribution: 'My contribution', technologies: 'Technologies', demo: 'Live demo', sourceLabel: name => `${name} source on GitHub`,
      note: 'These are company projects, so source code and demos aren’t publicly linked.',
      entries: Object.fromEntries(projects.map(project => [project.name, { category: project.category, description: project.description, contribution: project.contribution }])),
    },
    skills: { heading: { label: 'Toolkit', title: 'My tech stack', intro: 'The languages, frameworks, and tools I work with.' }, categories: { Frontend: 'Frontend', Backend: 'Backend', Databases: 'Databases', 'Mobile & tools': 'Mobile & tools' } },
    education: { heading: { label: 'Learning', title: 'Education & learning' }, education: 'Education', dates: 'Dec 2015 — May 2022', degree: 'Bachelor of Computer Science', location: 'Lashio, Shan State', languages: 'Languages', japanese: 'Japanese', english: 'English', englishLevel: 'Basic working communication', burmese: 'Burmese / Myanmar', native: 'Native', courses: 'Courses', providers: {} },
    contact: { heading: { label: 'Get in touch', title: 'Let’s talk', intro: 'Have an opportunity in mind, or just want to say hello? Send me an email.' }, conversation: 'Start a conversation', basedIn: location => `Based in ${location}`, hello: 'Say hello' },
  },
  ja: {
    seo: {
      title: 'Naing Min Htet Oo | ソフトウェアエンジニア・フルスタック開発者',
      description: 'ミャンマー・ヤンゴンを拠点とするソフトウェアエンジニア、Naing Min Htet Ooのポートフォリオ。C#/.NET、JavaScript、REST API、SQLデータベースを用いたWeb・モバイル・デスクトップアプリケーションの開発経験をご紹介します。',
      ogDescription: '日本向け・社内向け業務システム、フルスタックアプリケーション、モバイル開発での担当業務をご紹介します。',
    },
    common: { skip: '本文へ移動', location: 'ミャンマー・ヤンゴン', softwareEngineer: 'ソフトウェアエンジニア', fullStackDeveloper: 'フルスタック開発者', githubLabel: 'GitHubプロフィール', linkedinLabel: 'LinkedInプロフィール', current: '現在' },
    nav: { label: 'メインナビゲーション', homeLabel: 'Naing Min Htet Ooのホームへ', open: 'メニューを開く', close: 'メニューを閉じる', lightTheme: 'ライトモードに切り替え', darkTheme: 'ダークモードに切り替え', changeLanguage: '言語を変更', links: { home: 'ホーム', about: 'プロフィール', experience: '職歴', projects: 'プロジェクト', skills: 'スキル', education: '学歴', contact: 'お問い合わせ' } },
    hero: {
      intro: ['業務のニーズを、', '動くソフトウェアに。'],
      description: '日本向け・社内向けのWeb、モバイル、デスクトップアプリケーションの開発を経験してきました。フロントエンド画面からバックエンドAPI、データベース、テスト、保守まで幅広く携わってきました。',
      viewWork: '主なプロジェクトを見る', requestResume: '履歴書・職務経歴書をご希望の方', resumeSubject: '履歴書・職務経歴書の送付希望', contact: 'お問い合わせ', platforms: 'WEB / モバイル / デスクトップ', aboutLink: 'プロフィールへ',
    },
    profile: { greeting: 'こんにちは、NMHOです。', stack: 'Web・モバイル・バックエンド' },
    about: {
      heading: { label: 'プロフィール', title: '私について' },
      paragraphs: [
        'ヤンゴンを拠点に、フルスタックのWeb開発、モバイルアプリケーション、バックエンドシステムに携わるソフトウェアエンジニアです。',
        'Tosco Myanmarでは、日本向け・社内向けの業務プロジェクトで、要件分析から開発、テスト、リリース、保守まで携わりました。REST API連携、データベース開発、データ移行、Excel出力機能の開発も経験しています。',
        'チームで協力し、後輩開発者をサポートすることを大切にしています。組織変更に伴いTosco MyanmarからVAC Myanmarへ転籍し、現在は日本での勤務に向けて日本語を学んでいます。',
      ],
      focusLabel: '担当領域',
      focus: [ { title: 'Web・モバイルアプリ', description: 'レスポンシブWeb・モバイル開発' }, { title: 'バックエンド・API', description: 'バックエンド機能・REST API' }, { title: 'データベース・テスト', description: 'データベース、テスト、保守' } ],
    },
    experience: {
      heading: { label: '職歴', title: '職歴', intro: 'これまでの勤務先と担当業務をご紹介します。' },
      entries: {
        'VAC Myanmar Co., Ltd. (Tosco Cooperation)': { role: '正社員', date: '2025年1月 — 現在', points: [ '組織変更に伴い、Tosco MyanmarからVAC Myanmarへ転籍しました。', '現在は日本での勤務に向けて日本語を学んでいます。' ] },
        'Tosco Myanmar Co., Ltd.': { role: 'ソフトウェアエンジニア・正社員', date: '2021年6月 — 2024年12月', points: [ '日本の顧客向けおよび社内業務向けのWeb、モバイル、デスクトップアプリケーションを開発しました。', 'REST APIの開発・連携、データベース開発、データ移行、Excel出力機能の実装を担当しました。', '要件確認、実装、単体・結合・総合テスト、保守に携わりました。', 'プロジェクトチームと協力し、後輩開発者をサポートしました。' ] },
        'Sonic Star Co., Ltd.': { role: 'Web開発者 — パートタイム', date: '2023年5月 — 2023年7月', points: [ 'PHPとLaravelを使用し、レスポンシブな旅行・ツアーWebサイトと管理ダッシュボードを開発しました。', 'FigmaとAdobe XDのデザインをWeb画面に実装し、アプリケーションの不具合、レイアウト、ユーザビリティの問題を修正しました。', '通常の勤務時間外にパートタイム業務として担当しました。' ] },
      },
    },
    projects: {
      heading: { label: '主なプロジェクト', title: '主なプロジェクト', intro: 'チームで開発に携わったプロジェクトの一部をご紹介します。' },
      contribution: '担当業務', technologies: '使用技術', demo: 'デモを見る', sourceLabel: name => `${name}のソースコード（GitHub）`,
      note: 'これらは企業で担当したプロジェクトのため、ソースコードやデモの公開リンクは掲載していません。',
      entries: {
        'Point & Customer Loyalty System': {
          category: 'モバイルアプリケーション',
          description: 'API連携と既存プラットフォームからの移行を含む、顧客ロイヤルティ向けモバイルアプリケーション。',
          contribution: 'APIの開発・連携を行い、データ移行を支援し、8名のチームで協力して取り組みました。',
        },
        'Employee Management System': {
          category: '業務システム',
          description: 'オフショア開発プロジェクトにおける社員管理アプリケーションのバックエンド機能。',
          contribution: 'バックエンド機能の実装・テストを行い、10名のチームで開発者をサポートしました。',
        },
        'Production Management System': {
          category: '業務システム',
          description: '生産管理システムのバックエンド開発。',
          contribution: 'バックエンド機能の実装・テストを行い、10名のオフショアチームで他の開発者をサポートしました。',
        },
        'Self-Ordering System': {
          category: 'フルスタックアプリケーション',
          description: 'フロントエンド画面、バックエンド機能、データベース設計を含む、飲食店向けセルフオーダーシステム。',
          contribution: 'アプリケーション開発とデータベース設計に参加し、5名の開発チームをサポートしました。',
        },
        'Travel & Tour Web Application': {
          category: 'Webサイト・管理ダッシュボード',
          description: 'Sonic Starで開発した、管理ダッシュボードを備えたレスポンシブな旅行・ツアーWebサイト。',
          contribution: 'Webサイトとダッシュボードを開発し、FigmaとAdobe XDのデザインを実装して、レスポンシブレイアウトの問題を修正しました。',
        },
      },
    },
    skills: { heading: { label: '技術スキル', title: '技術スキル', intro: '開発で使用してきた言語、フレームワーク、ツールです。' }, categories: { Frontend: 'フロントエンド', Backend: 'バックエンド', Databases: 'データベース', 'Mobile & tools': 'モバイル・開発ツール' } },
    education: { heading: { label: '学び', title: '学歴・研修' }, education: '学歴', dates: '2015年12月 — 2022年5月', degree: 'コンピュータサイエンス学士', location: 'シャン州ラショー', languages: '語学・資格', japanese: '日本語', english: '英語', englishLevel: '業務上の基本的なコミュニケーション', burmese: 'ビルマ語／ミャンマー語', native: '母語', courses: '研修・受講歴', providers: { 'Meta via Coursera': 'Meta（Coursera）' } },
    contact: { heading: { label: 'お問い合わせ', title: 'お問い合わせ', intro: '採用に関するご連絡やご質問など、お気軽にメールでお問い合わせください。' }, conversation: 'メールでのお問い合わせ', basedIn: location => `所在地：${location}`, hello: 'メールを送る' },
  },
}
