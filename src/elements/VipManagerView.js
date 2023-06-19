import { React, useState } from "react";
import HeaderTittle from "./HeaderTittle";
import Styles from "../styles/elementStyles/RequestsView.module.css";
import Router from "next/router";

const VipManagerView = ({ requests }) => {

  const [vip, setVip] = useState(requests.requests);

  const [visible1, setVisible1] = useState({ prev: 0, next: 9 })
  const [visible2, setVisible2] = useState({ prev: 0, next: 9 })
  const [visible3, setVisible3] = useState({ prev: 0, next: 9 })
  const [visible4, setVisible4] = useState({ prev: 0, next: 9 })

  const [input1, setInput1] = useState("");


  const verMas1 = () => {
    if (visible1.prev + 9 > pendingRequests.length) return
    setVisible1({ prev: visible1.next, next: visible1.next + 9 })
  }
  const verMenos1 = () => {
    if (visible1.prev - 9 < 0) return
    setVisible1({ prev: visible1.prev - 9, next: visible1.prev })
  }
  const verMas2 = () => {
    if (visible2.prev + 9 > acceptedRequests.length) return
    setVisible2({ prev: visible2.next, next: visible2.next + 9 })
  }
  const verMenos2 = () => {
    if (visible2.prev - 9 < 0) return
    setVisible2({ prev: visible2.prev - 9, next: visible2.prev })
  }
  const verMas3 = () => {
    if (visible3.prev + 9 > rejectedRequests.length) return
    setVisible3({ prev: visible3.next, next: visible3.next + 9 })
  }
  const verMenos3 = () => {
    if (visible3.prev - 9 < 0) return
    setVisible3({ prev: visible3.prev - 9, next: visible3.prev })
  }
  const verMas4 = () => {
    if (visible4.prev + 9 > finishedRequests.length) return
    setVisible4({ prev: visible4.next, next: visible4.next + 9 })
  }
  const verMenos4 = () => {
    if (visible4.prev - 9 < 0) return
    setVisible4({ prev: visible4.prev - 9, next: visible4.prev })
  }


  const handlechange = (e) => {
    filter(e.target.value, pendingRequestsS, setPendingRequests);
    filter(e.target.value, acceptedRequestsS, setAcceptedRequests);
    filter(e.target.value, rejectedRequestsS, setRejectedRequests);
    filter(e.target.value, finishedRequestsS, setFinishedRequests);
  };

  const filter = (term, search, setSearch) => {
    var searchResult1 = search.filter((element) => {
      if (element.requestTrip.toString().toLowerCase().includes(term.toLowerCase()) ||
        element.requestUser.toString().includes(term.toLowerCase()))
        return element
      // || element.email.toString().toLowerCase().includes(term.toLowerCase())){
      //     return element;
      // }
    })
    setSearch(searchResult1)


  }


  const [pendingRequests, setPendingRequests] = useState(
    requests.requests.filter((requests) => requests.requestStatus === "pending")
  );
  const [pendingRequestsS, setPendingRequestsS] = useState(pendingRequests);

  const [acceptedRequests, setAcceptedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "accepted"
    )
  );
  const [acceptedRequestsS, setAcceptedRequestsS] = useState(acceptedRequests)

  const [rejectedRequests, setRejectedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "rejected"
    )
  );
  const [rejectedRequestsS, setRejectedRequestsS] = useState(rejectedRequests)

  const [finishedRequests, setFinishedRequests] = useState(
    requests.requests.filter(
      (requests) => requests.requestStatus === "finished"
    )
  );
  const [finishedRequestsS, setFinishedRequestsS] = useState(finishedRequests)

  const clickEvent = (requestUser) => {
    Router.push({
      pathname: "/VipDetails",
      query: { requestUser },
    });
  };

  return (
    <div className={Styles.main}>
      <div >
        <HeaderTittle tittle={"Buscar Solicitud"} />
        <input
          className={Styles.input}
          placeholder="Ingrese datos del evento a buscar"
          onChange={handlechange}
          name={"activeEvents"}
          key={"activeEvents"}
        ></input>
      </div>
      <HeaderTittle tittle={"Solicitudes VIP pendientes"} />
      <div className={Styles.contenedorEvents}>
        {pendingRequests?.slice(visible1.prev, visible1.next).map((request) => (
          <div className={Styles.contenedorEvent} key={request.requesTrip + request.requestUser}>
            <div className={Styles.miniFlex}>
              <div className={Styles.textHid}>Viaje:&nbsp; </div>{request.requestTrip}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{request.requestDate}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Usuario:&nbsp;</div>{request.requestUser}</div>
            <button className={Styles.btn} onClick={() => { clickEvent(request.requestUser); }}> Ver más</button>
          </div>
        ))}
        <div className={Styles.botones}>
          {visible1.prev !== 0 ? <button className={Styles.btn} onClick={() => verMenos1()}>Anterior</button> : null}
          {visible1.next < pendingRequests.length ? <button className={Styles.btn} onClick={() => verMas1()}>Siguiente</button> : null}
        </div>
      </div>
      <HeaderTittle tittle={"Solicitudes VIP aceptadas"} />
      <div className={Styles.contenedorEvents}>
        {acceptedRequests?.slice(visible2.prev, visible2.next).map((request) => (
          <div className={Styles.contenedorEvent} key={request.requesTrip + request.requestUser}>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp; </div>{request.requestTrip}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{request.requestDate}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Usuario:&nbsp;</div>{request.requestUser}</div>
            <button className={Styles.btn} onClick={() => { clickEvent(request.requestUser); }}> Ver más </button>
          </div>
        ))}
        <div className={Styles.botones}>
          {visible2.prev !== 0 ? <button className={Styles.btn} onClick={() => verMenos2()}>Anterior</button> : null}
          {visible2.next < acceptedRequests.length ? <button className={Styles.btn} onClick={() => verMas2()}>Siguiente</button> : null}
        </div>
      </div>
      <HeaderTittle tittle={"Solicitudes VIP denegadas"} />
      <div className={Styles.contenedorEvents}>
        {rejectedRequests?.slice(visible3.prev, visible3.next).map((request) => (
          <div className={Styles.contenedorEvent} key={request.requesTrip + request.requestUser}>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp; </div>{request.requestTrip}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{request.requestDate}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Usuario:&nbsp;</div>{request.requestUser}</div>
            <button className={Styles.btn} onClick={() => { clickEvent(request.requestUser); }}>Ver más</button>
          </div>
        ))}
        <div className={Styles.botones}>
          {visible3.prev !== 0 ? <button className={Styles.btn} onClick={() => verMenos3()}>Anterior</button> : null}
          {visible3.next < rejectedRequests.length ? <button className={Styles.btn} onClick={() => verMas3()}>Siguiente</button> : null}
        </div>
      </div>
      <HeaderTittle tittle={"Solicitudes VIP finalizadas"} />
      <div className={Styles.contenedorEvents}>
        {finishedRequests?.slice(visible4.prev, visible4.next).map((request) => (
          <div className={Styles.contenedorEvent} key={request.requesTrip + request.requestUser}>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp; </div>{request.requestTrip}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{request.requestDate}</div>
            <div className={Styles.miniFlex}><div className={Styles.textHid}>Usuario:&nbsp;</div>{request.requestUser}</div>
            <button className={Styles.btn} onClick={() => { clickEvent(request.requestUser); }}>Ver más</button>
          </div>
        ))}
        <div className={Styles.botones}>
          {visible4.prev !== 0 ? <button className={Styles.btn} onClick={() => verMenos4()}>Anterior</button> : null}
          {visible4.next < finishedRequests.length ? <button className={Styles.btn} onClick={() => verMas4()}>Siguiente</button> : null}
        </div>
      </div>
    </div>
  );
};

export default VipManagerView;
