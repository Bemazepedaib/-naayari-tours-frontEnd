//IMPORTS
import { React, useState,useEffect} from 'react'
import Styles from '../../styles/elementStyles/SearchDataTrip.module.css'

//COMPONENTS
import Table from 'react-bootstrap/Table';
import HeaderTittle from './HeaderTittle';
import ModalTrips from './ModalTrips';

const SearchDataTrip = ({ dataM,newTrip}) => {
    //HOOKS
    const [data, setData] = useState([...dataM]);
    const [trips, setTrips] = useState(data);
    const [tripsTable, setTripsTable] = useState(data);
    const [search, setSearch] = useState("");
    const [state, setState] = useState(true);

    //Update Trip
    const updateTrip = (name, status) => {
        let pos = data.map(e => e.tripName).indexOf(name);
        let aux = {...data[pos]}
        aux.tripStatus = !aux.tripStatus
        setState(status)
        data.splice(pos, 1)
        setData(data.concat(aux))
    }

    useEffect(() => {
        if (state) {
             setTrips(data.filter(item => item.tripStatus !== false))
             setTripsTable(data.filter(item => item.tripStatus !== false))
        } else {
            setTrips(data.filter(item => item.tripStatus !== true))
            setTripsTable(data.filter(item => item.tripStatus !== true))
        }
     }, [state]);


    //OnChange Method
    const handleChange = (e) => {
        setSearch(e.target.value);
        filter(e.target.value);
    }

    const changeState = () => {
        if (state) { setState(!state); }
        else {
            setState(!state);
        }
    }
    //TABLE FILTER
    const filter = (term) => {
        let searchResult = tripsTable.filter((element) => {
            if (element.tripName.toString().toLowerCase().includes(term.toLowerCase())
                || element.tripInformation.place.toString().toLowerCase().includes(term.toLowerCase())
                || element.tripInformation.price[0].priceAmount.toString().toLowerCase().includes(term.toLowerCase())) {
                return element;
            }
        })
        setTrips(searchResult);
    }
    return (
        <div>
            <div className={Styles.mainContainer}>
                <div className={Styles.inputContainer}>
                    <HeaderTittle tittle={"Buscar Viaje"}></HeaderTittle>
                    <input className={Styles.inputText} onChange={handleChange} placeholder='Ingrese datos del viaje a buscar'></input>
                </div>
                <div className={Styles.tableContainer}>
                    <Table responsive size='sm' striped bordered hover className={Styles.table}>
                        <thead className={Styles.tHead}>
                            <tr>
                                <th className={Styles.column}>Nombre</th>
                                <th className={Styles.column}>Lugar</th>
                                <th className={Styles.column}>Precio Adulto</th>
                                <th className={Styles.column}>Estado</th>
                                <th className={Styles.column}>Modificaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trips
                                    .map(trips => (

                                        <tr key={trips.tripName}>
                                            <td className={Styles.column}>
                                                {trips.tripName}
                                            </td>
                                            <td className={Styles.column}>
                                                {trips.tripInformation.place}
                                            </td>
                                            <td className={Styles.column}>
                                                ${trips.tripInformation.price[0].priceAmount}
                                            </td>
                                            {trips.tripStatus
                                                ? <td><div className={Styles.yes}></div></td>
                                                : <td><div className={Styles.no}></div></td>}
                                            <td>
                                                <ModalTrips tripInfo={trips} updateTrip={updateTrip} />
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </Table>
                </div>
                <div className={Styles.btnContainer}>
                    <button className={state ? Styles.btnStateActive : Styles.btnStateInactive}
                        onClick={changeState}>Cambiar orden de estados</button>
                </div>
            </div>
        </div>
    )
}

export default SearchDataTrip
