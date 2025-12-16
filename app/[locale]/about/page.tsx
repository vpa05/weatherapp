import React from 'react'
import { getTranslations } from "next-intl/server";


const AboutPage = async() => {
  const t = await getTranslations("About");
  return (
    <div className="max-w-2xl mx-auto p-8">
    <p className="text-lg text-gray-800 leading-relaxed">
      {t('about')}
    </p>
  </div>
  )
}

export default AboutPage