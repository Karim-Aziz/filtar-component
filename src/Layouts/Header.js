import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  // Import Use Translation
  const { t, i18n } = useTranslation();

  // Handle Change Lang Fun
  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Save Value On Load Select
  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
        document.querySelector("html").style.direction = "rtl";
      } else {
        document.querySelector("html").style.direction = "ltr";
      }
    }
  }, [i18n.language]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-capitalize" to="/">
          {t("logo")}
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <NavLink className="nav-link fs-6 me-3" aria-current="page" to="/">
              {t("header.home")}
            </NavLink>
            <NavLink className="nav-link fs-6 me-3" to="/about">
              {t("header.about")}
            </NavLink>
          </div>

          {/* Add Btn Lang */}
          <select onChange={handleChangeLang}>
            <option value="en" className="lang">
              English
            </option>
            <option value="ar" className="lang">
              Arabic
            </option>
          </select>
          {/* Add Btn Lang */}
        </div>
      </div>
    </nav>
  );
};

export default Header;

// if (e.target.value === "ar") {
//   document.querySelector("html").style.direction = "rtl";
// } else {
//   document.querySelector("html").style.direction = "ltr";
// }
