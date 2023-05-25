import React from "react";
import { useQuery } from "@apollo/client";
import { GET_REQUESTS } from "../querys/requestQuerys";
import VipManagerView from "../elements/VipManagerView";
import SidebarAdmin from "../elements/AdminDashboard/SidebarAdmin";
import Styles from "../../styles/elementStyles/RequestsView.module.css";

const VipsManager = () => {
  const { loading, error, data } = useQuery(GET_REQUESTS);

  return (
    !loading &&
    !error && (
      <div className={Styles.vipView}>
        <SidebarAdmin />
        <VipManagerView requests={data} />
      </div>
    )
  );
};

export default VipsManager;
