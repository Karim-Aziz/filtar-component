import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  // Import Use Translation
  const { t } = useTranslation();

  return (
    <div className="shadow-sm p-3">
      <h2 className="ar-cls">{t("title.home")}</h2>
    </div>
  );
};

export default Home;
