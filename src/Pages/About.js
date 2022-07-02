import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="shadow-sm p-3">
      <h2>{t("title.about")}</h2>
    </div>
  );
};

export default About;
