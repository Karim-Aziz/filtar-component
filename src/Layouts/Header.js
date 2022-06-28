import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  // Change Lang
  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm p-0">
      <div className="container">
        <Link className="navbar-brand text-capitalize" to="/">
          React Project
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
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link fs-6 me-3" aria-current="page" to="/">
              {t("header.home")}
            </NavLink>
            <NavLink className="nav-link fs-6 me-3" to="/about">
              {t("header.about")}
            </NavLink>
            {/* BTN LANG */}
            <select className="form-select shadow-none" onClick={onChangeLang}>
              <option value="en" className="lang">
                EN
              </option>
              <option value="ar" className="lang">
                AR
              </option>
            </select>
            {/* BTN LANG */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
