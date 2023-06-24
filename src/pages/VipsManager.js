import React from "react";

import VipManagerView from "../elements/VipManagerView";
import SidebarAdmin from "../elements/AdminDashboard/SidebarAdmin";
import Styles from "../styles/elementStyles/RequestsView.module.css";

import { useQuery } from "@apollo/client";
import { GET_REQUESTS } from "../backendOperations/querys/requestQuerys";
import { ME } from '../backendOperations/querys/userQuerys';
import { Spinner } from 'react-bootstrap';

const VipsManager = () => {
  const { loading: requestLoading, error: requestError, data: requestData } = useQuery(GET_REQUESTS);
  const { loading: meLoading, error: meError, data: meData } = useQuery(ME);

  if (meLoading || requestLoading) return (
    <div className={Styles.vipView}>
      <SidebarAdmin />
      <div className={Styles.error}>
        <Spinner />
      </div>
    </div>
  )
  if (meError || requestError) return (
    <div className={Styles.vipView}>
      <SidebarAdmin />
      <div className={Styles.error}>
        Inicie sesión para continuar
      </div>
    </div>
  )
  if (meData.me.userType !== "admin") return (
    <div className={Styles.vipView}>
      <SidebarAdmin />
      <div className={Styles.error}>
        Necesitas permisos de administrador para acceder a este módulo
      </div>
    </div>
  )

  return (!meLoading && !meError && !requestLoading && !requestError && (
    <div className={Styles.vipView}>
      <SidebarAdmin />
      <VipManagerView requests={requestData} />
    </div>
  )
  );
};

export default VipsManager;
