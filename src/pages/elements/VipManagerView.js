import { React, useState } from "react";
import HeaderTittle from "./HeaderTittle";
import Styles from "../../styles/elementStyles/RequestsView.module.css";

const VipManagerView = ({ requests }) => {
  console.log(requests.requests);
  const [pendingRequests, setPendingRequests] = useState(
    requests.requests.filter((requests) => requests.requestStatus === "pending")
  );
  const [acceptedRequests, setAcceptedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "accepted"
    )
  );
  const [rejectedRequests, setRejectedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "rejected"
    )
  );
  const [finishedRequests, setFinishedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "finished"
    )
  );
  return (
    <div className={Styles.main}>
      <div>
        {console.log(new Date("02 / 02 / 2023"))}
        <HeaderTittle tittle={"Solicitudes VIP pendientes"} />
        <div className={Styles.contenedorEvents}>
          {pendingRequests?.map((request) => (
            <div
              className={Styles.contenedorEvent}
              key={request.requesTrip + request.requestUser}
            >
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Viaje:&nbsp; </div>{" "}
                {request.requestTrip}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Fecha:&nbsp;</div>{" "}
                {request.requestDate}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Usuario:&nbsp;</div>{" "}
                {request.requestUser}
              </div>
              <button className={Styles.btn} onClick={() => {}}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HeaderTittle tittle={"Solicitudes VIP aceptadas"} />
        <div className={Styles.contenedorEvents}>
          {acceptedRequests?.map((request) => (
            <div
              className={Styles.contenedorEvent}
              key={request.requesTrip + request.requestUser}
            >
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Viaje:&nbsp; </div>{" "}
                {request.requestTrip}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Fecha:&nbsp;</div>{" "}
                {request.requestDate}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Usuario:&nbsp;</div>{" "}
                {request.requestUser}
              </div>
              <button className={Styles.btn} onClick={() => {}}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HeaderTittle tittle={"Solicitudes VIP denegadas"} />
        <div className={Styles.contenedorEvents}>
          {rejectedRequests?.map((request) => (
            <div
              className={Styles.contenedorEvent}
              key={request.requesTrip + request.requestUser}
            >
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Viaje:&nbsp; </div>{" "}
                {request.requestTrip}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Fecha:&nbsp;</div>{" "}
                {request.requestDate}
              </div>
              <div className={Styles.miniFlex}>
                <div className={Styles.textHid}>Usuario:&nbsp;</div>{" "}
                {request.requestUser}
              </div>
              <button className={Styles.btn} onClick={() => {}}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipManagerView;
