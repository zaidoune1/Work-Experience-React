import { useState } from "react";
import {MdOutlineDoubleArrow} from "react-icons/md"
import "../compounents/styles/experiencesWorks.css";

const DataDetails = ({work}) => {

    const [value, setValue] = useState(0)



    const {title, dates, duties, company} = work[value]


    return (

        
        <>
                    <div className="main-container">


                    <div className="name-button">
                        {
                            work.map((companys ,index) => {
                                const {company} = companys
                                return <button key={index} value={company} onClick={()  => {                                
                                    setValue(index)
                                }} className= {`btns-companys ${index === value && `btns-chiked`}`}  > {company} </button>
                            })
                        }
                    </div>
            <div className="bb">

        
                <div>
                    <div className="list-bloc">
                    <h2 className="title"> {title} </h2>
                    <p className="name"> {company} </p>
                    <p className="date"> {dates} </p>
                    </div>
    
                    <div className="list-experiences">
                        <ul className="lists">
                            {duties.map((dutie, index) => {
                            
                                return <div className="text">
                                    <div className="flex">
                                    <MdOutlineDoubleArrow className="icons"/>
                                    <li className="li-lists" key={index}>  {dutie} </li>
                                    </div>                                                                        
                                </div>
                            })}                         
                        </ul>
                    </div>
                </div>
                </div>
            </div>
</>
    )

    }

export default DataDetails