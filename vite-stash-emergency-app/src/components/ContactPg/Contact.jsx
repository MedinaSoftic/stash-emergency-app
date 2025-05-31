import React from "react"
import ContactCard from "./ContactCard"
import LinkButton from "../LinkButton"
import "./Card.css"
import {minnesota, wisconsin, missouri, kentucky} from "./Shelters"
import {useTable} from "react-table"
import "./ShelterTable.css"



//Contact card logic pased in by props
export default function Contact() {
    const data = React.useMemo(() => (
        [...minnesota, ...wisconsin, ...missouri, ...kentucky]), [])
    const columns = React.useMemo(() => [
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Building Name",
        accessor: "buildingName",
      },
      {
        Header: "Address",
        accessor: "address",
      }      
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});


    return (
        <>
            <h3 className="police">FOR MEDICAL ASSISTANCE: PLEASE CALL 9-1-1 OR YOUR</h3><h3 className="police"><a className="localpolice"href="https://www.google.com/search?q=Local+Police+Department">LOCAL POLICE DEPARTMENT</a></h3>
            <div className="FlexCard">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>FEMA</h2>
                            <p></p>
                        </div>
                        <div className="back">
                            <ContactCard title="FEMA" number="1-800-621-3362" email="AskIA@fema.dhs.gov" mail="FEMA P.O. Box 10055 Hyattsville, MD 20782-8055"></ContactCard>
                            <p>Dail 211 to connect with local social services and referrals for emergency housing.</p>
                            <p>To find a FEMA shelter, text SHELTER and your ZIP code to 43362</p>
                            <p>You can also find emergency shelters on the FEMA app.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>USA.Gov</h2>
                        </div>
                        <div className="back">
                            <ContactCard title="USAGov" number="1-844-872-4681" email="AskIA@fema.dhs.gov" mail="FEMA P.O. Box 10055 Hyattsville, MD 20782-8055"></ContactCard>                
                            <p>USA.Gov provides many sources of financial stability for people in need after a Natural disaster.</p>
                            <p>You can find Food benifits using <a href="https://www.usa.gov/disaster-food-help">D-SNAP.</a></p>
                            <p>There are is also some financial help with <a href="https://www.usa.gov/disaster-help-with-bills">bills.</a>Mortage help and repair <a href="https://www.usa.gov/disaster-mortgage">loans.</a></p>
                        </div>
                    </div>
                </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="front">
                                <h2>Red Cross</h2>
                            </div>
                            <div className="back">
                                <ContactCard title="Red Cross" number="1-800-733-2767" email="customercare@redcross.org" mail="430 17th Street, NW, Washington, DC 20006"></ContactCard>
                                <p>Red Cross can help with the reunification of Family in the US and US Territories, after a natural disaster. For guidence visit their <a href="https://www.redcross.org/get-help/disaster-relief-and-recovery-services/contact-and-locate-loved-ones.html">Contact Loved Ones.</a></p>
                                </div>
                            </div>
                            </div>

                            {/* Youtube video embeded */}
                            <div className="containerFrame"> 
                            <iframe className="responsiveFrame" width="560" height="315" src="https://www.youtube.com/embed/l3GJqNX5x9M?si=_OYDT6U1ObbHwFyO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        
                        {/* added the table of locations of shelters */}
                        
                        <div className="tableContainer">
                            <table {...getTableProps()}>
                                <thead>
                                    {headerGroups.map(headerGroup => {
                                        const {key, ...rest } = headerGroup.getHeaderGroupProps();
                                            return (
                                        <tr key={key} {...rest}>
                                            {headerGroup.headers.map(column => {
                                                const {key: columnKey, ...columnReset} = column.getHeaderProps();
                                                return(
                                                     <th key={columnKey} {...columnReset}>
                                                    {column.render("Header")}
                                                </th>
                                                );
                                            })}
                                        </tr>
                                        );
                                    })}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row);
                                            const {key: rowKey, ...rowRest } = row.getRowProps();
                                            return(
                                            <tr key={rowKey} {...rowRest}>
                                                {row.cells.map(cell => {
                                                    const{key: cellKey, ...cellRest} = cell.getCellProps();
                                                    return(
                                                        <td key={cellKey} {...cellRest}>
                                                            {cell.render("Cell")}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table> 
                        </div>
                    

                </div>
                <LinkButton to="/" btnClass="homeBtn" label="Home" imgClass="homeImg" imgSrc="/img/homeButton.png" imgalt="Home Button" />
                <LinkButton to="/plan" btnClass="planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="/img/contactButton.png" imgalt="Plan Button" />
                <LinkButton to="/about" btnClass="aboutBtn" label="About" imgClass="aboutImg" imgSrc="/img/aboutButton.png" imgalt="About button" />
            
        </>
    )
}