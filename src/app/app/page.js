"use client"

import { useTranslations } from 'next-intl';

export default function AppPage() {
  const t = useTranslations('app_page');

  return (
    <div>
      <h1>{t('title')}</h1>  {/* Translation key from en.json or bn.json */}
    </div>
  );
}