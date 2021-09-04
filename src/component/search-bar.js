import React from "react";
import nav from "../images/align-justify.svg"

export default function SearchBar(props) {
 console.log(props)
    return(
        <div className={'shadow p-3 bg-light search-container'}>
                    <img src={nav} width={'36px'} className={'mobile-nav me-3'} onClick={() => props.onOpen()}/>

                        <form className="d-flex">
                            <input className="form-control me-2 search-input w-100" type="search" placeholder="Type in to Search" aria-label="Search"/>

                        </form>
                </div>

    )
}