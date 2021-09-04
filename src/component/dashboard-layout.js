import React,{useState} from "react";
import SightBar from "./sight-bar";
import SalesCardDetails from "./sales-card-details";
import Graph from "./graph";
import Table from "./table";
import SearchBar from "./search-bar";

export default function DashboardLayout() {

    const [toggle, setToggle] = useState(false);

    console.log(toggle)

    return(
        <div className={'dashboard-layout'}>
            <div className={'row m-0'}>
                <div className={'col-md-3 ' + (toggle ? 'show-768' : 'hide-768')}>
                    <SightBar onClose={()=> setToggle(false)}/>
                </div>
                <div className={'col-md-9 '  + (toggle ? 'hide-768' : ' ')}>
                    <div className={'mt-5 mb-3'}>
                        <SearchBar onOpen={()=> setToggle(true)}/>
                    </div>
                    <div className={'my-5'}>
                        <SalesCardDetails/>
                    </div>
                    <div className={'my-5 d-flex justify-content-center'}>
                        <Graph/>
                    </div>
                    <div className={'my-5 d-flex justify-content-center'}>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
    )
}