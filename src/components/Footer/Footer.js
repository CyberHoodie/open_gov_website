import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return(
    <footer className="footer mt-auto text-center">
      <p
        dangerouslySetInnerHTML={{ __html: t('components.footer.attributesHtml') }}
      />
    </footer>
  );
}
