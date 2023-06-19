import React from "react";
import { useRouter } from "next/router";

import { Spinner } from "react-bootstrap";
import SidebarAdmin from "../elements/AdminDashboard/SidebarAdmin";
import Styles from "../styles/elementStyles/VipDetails.module.css";
import VipDetailsState from "../elements/VipDetailsState";

import { GET_REQUEST } from "../backendOperations/querys/requestQuerys";
import { useQuery } from "@apollo/client";

const VipDetails = () => {
  const {
    query: { requestUser },
  } = useRouter();

  const { loading, error, data } = useQuery(GET_REQUEST, {
    variables: { requestUser },
  });

  return !loading && !error && (
    <div className={Styles.sidebar}>
      <VipDetailsState data={data} />
      <SidebarAdmin />
    </div>

  );
};

export default VipDetails;
