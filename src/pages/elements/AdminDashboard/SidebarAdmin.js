import React, { useState, useEffect } from "react";
import Styles from "../../../styles/elementStyles/SidebarAdmin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faUser,
  faArrowsDownToPeople,
  faArrowsDownToLine,
  faHome,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";

function checkForToken() {
  const [login, setLogin] = useState();
  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, []);

  return [login, setLogin];
}

function SidebarAdmin() {
  const image =
    "https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK";

  const [login, setLogin] = checkForToken();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setLogin("token");
    } else {
      setLogin("not token");
    }
  }, []);

  return (
    <div className={Styles.sidebar} id={Styles.sidebarAdmin}>
      <div className={Styles.stick}>
        <div className={Styles.sidebarAdminTitle}>
          <Image
            src={image}
            width={55}
            height={55}
            alt="Naayari Tours"
            priority={true}
          />
          <div className={Styles.fTitle}>Naayari tours</div>
        </div>
        <div className={Styles.sidebarAdminMenu}>
          <Link href="/sites/Dashboard" className={Styles.sidebarAdminLink}>
            <FontAwesomeIcon icon={faHome} />
            <div className={Styles.text}>Dashboard</div>
          </Link>
          <Link href="/sites/TripView" className={Styles.sidebarAdminLink}>
            <FontAwesomeIcon icon={faPlane} />
            <div className={Styles.text}>Viajes</div>
          </Link>
          <Link href="/sites/Users" className={Styles.sidebarAdminLink}>
            <FontAwesomeIcon icon={faUser} />
            <div className={Styles.text}>Usuarios</div>
          </Link>
          <Link href="/sites/Events" className={Styles.sidebarAdminLink}>
            <FontAwesomeIcon icon={faArrowsDownToPeople} />
            <div className={Styles.text}>Org. de Viajes</div>
          </Link>
          <Link href="/sites/VipsManager" className={Styles.sidebarAdminLink}>
            <FontAwesomeIcon icon={faArrowsDownToLine} />
            <div className={Styles.text}>Solicitudes VIP</div>
          </Link>
          {login === "token" ? (
            <Link
              href="/"
              className={Styles.sidebarAdminLogout}
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload(true);
              }}
            >
              <FontAwesomeIcon icon={faPowerOff} />
              <div className={Styles.text}>Cerrar Sesión</div>
            </Link>
          ) : (
            <Link href="/sites/Login" className={Styles.sidebarAdminLogout}>
              <FontAwesomeIcon icon={faPowerOff} />
              <div className={Styles.text}>Iniciar Sesión</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default SidebarAdmin;
