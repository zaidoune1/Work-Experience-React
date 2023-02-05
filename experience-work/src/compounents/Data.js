import { useEffect, useState } from "react"
import DataDetails from "./DataDetails";
import Loading from "./Loading";
import "../compounents/styles/experiencesWorks.css";


const Data = () => {

    const url = 'https://course-api.com/react-tabs-project'


    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);



    const workData = async () => {

        setLoading(loading)

        const datas = await fetch(url)
        const datasJson = await datas.json();
    
        setWorks(datasJson);

        setLoading(!loading)
    }

    useEffect(() => {
        workData();
    }, [])


    if(loading) {

    return <main>
        <Loading/>
    </main>
    }

    return (

        <>
        <h1> Experience </h1>
        <div className="underLine"></div>
        
                <div className="container">
                    
                    <DataDetails work={works}/>
                    
                    </div>        
        </>
    )
    }

export default Data