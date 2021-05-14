import React, { useState } from "react";
import styles from "./Login.module.scss";
import { ReactComponent as SelectArrow } from "../../icons/select-arrow.svg";
import Select, { components } from "react-select";
import "./LoginSelect.scss";
import { useHistory } from "react-router";

const options = [
  { value: "company1", label: "Компания 1" },
  { value: "company2", label: "Компания 2" },
  { value: "company3", label: "Компания 3" },
];

const Login = () => {
  const [companyName, setCompanyName] = useState(null);

  const history = useHistory();

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <SelectArrow className="login-select__custom-arrow" />;
      </components.DropdownIndicator>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/account");
  };

  const handleCompanyNameChange = (selectedOption) => {
    setCompanyName(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <div className="inner-container">
          <div className={styles.loginRow}>
            <div className={styles.loginCol}>
              <h1 className={styles.loginHeading}>Авторизация</h1>
              <div className={styles.loginText}>
                <p>
                  Авторизируйтесь на платформе, чтобы получить неограниченный
                  доступ ко всем возможностям. Только для девелоперов!
                </p>
              </div>
            </div>
            <div className={styles.loginCol}>
              <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div className={styles.loginInputWrapper}>
                  <Select
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    options={options}
                    placeholder="Введите название компании"
                    isSearchable={true}
                    className="login-select-container"
                    classNamePrefix="login-select"
                    components={{ DropdownIndicator }}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: "#7ECB2B",
                        primary25: "#7ECB2B",
                        primary50: "#7ECB2B",
                        primary75: "#7ECB2B",
                        danger: "#eb5757",
                      },
                    })}
                  />
                  <div className={styles.loginAlert}>
                    Вашей компании нет в системе,{" "}
                    <a href="#" className={styles.loginAlertLink}>
                      оставьте заявку
                    </a>
                    , чтобы оформить подписку
                  </div>
                </div>
                <div className={styles.loginInputWrapper}>
                  <input
                    type="text"
                    name="name"
                    className={styles.loginInput}
                    placeholder="Логин"
                  />
                </div>
                <div className={styles.loginInputWrapper}>
                  <input
                    type="password"
                    name="password"
                    className={styles.loginInput}
                    placeholder="Пароль"
                  />
                  <div className={styles.loginAlert}>
                    Логин и пароль введен неверно. Запросите доступ у вашей
                    компании.
                  </div>
                </div>

                <button className={styles.loginSubmit}>Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
