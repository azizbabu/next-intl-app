"use client"

import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  const t = useTranslations('profile_page');

  return (
    <div>
      <h1>{t('title')}</h1>  {/* Translation key from en.json or bn.json */}
    </div>
  );
}