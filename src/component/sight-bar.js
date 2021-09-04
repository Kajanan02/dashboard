import React, {useState} from 'react'
import toggle from "../images/Menu.svg"
import avatar from "../images/Ellipse.svg"
import downArrow from "../images/Chevron.svg"
import close from "../images/x.svg"

export default function SightBar(props) {

    return(
        <div className={'sight-bar-container'}>
            <div className={'d-inline-flex m-auto'}>
                <img src={toggle} width={'33px'}/>
                <div className={"fs-3 fw-bold d-inline-block ms-3"}> AiDRevs</div>
                <img src={close} width={'40px'} className={'show-768 me-auto'} onClick={() => props.onClose()} />
            </div>
            <div className={'my-5'}>
                <div className="d-flex">
                        <img src={avatar} width={'48px'}/>
                    <div className="text-start ms-3">
                        <div className={"fs-3 fw-bold"}>Keerthanan</div>
                        <div className={"fs-6"}>Murukandi Store</div>
                    </div>
                </div>
            </div>
            <div className={'ms-3 text-start'}>
                <div className={'portfolio-container'}>
                    <div className={'fw-bold fs-3 ps-2 my-3'}>PORTOFOLIO </div>
                </div>
                <div className={'d-flex'}>
                    <div  className={'fw-bold fs-3 ps-2 my-3'}>INVENTORY </div>
                    <div className={'d-flex ms-auto'}><img src={downArrow} width={'16px'}/></div>
                </div>

                 <div className={'d-flex'}>
                    <div  className={'fw-bold fs-3 ps-2 my-3'}>SALSES </div>
                    <div className={'d-flex ms-auto'}><img src={downArrow} width={'16px'}/></div>
                </div>

                 <div className={'d-flex'}>
                    <div  className={'fw-bold fs-3 ps-2 my-3'}>PURCHASE </div>
                    <div className={'d-flex ms-auto'}><img src={downArrow} width={'16px'}/></div>
                </div>

                 <div className={'d-flex'}>
                    <div  className={'fw-bold fs-3 ps-2 my-3'}>ACCOUNTING </div>
                    <div className={'d-flex ms-auto'}><img src={downArrow} width={'16px'}/></div>
                </div>
                 <div className={'d-flex'}>
                    <div  className={'fw-bold fs-3 ps-2 my-3'}>PRODUCT TREE </div>
                    <div className={'d-flex ms-auto'}><img src={downArrow} width={'16px'}/></div>
                </div>
            </div>

            <div className={'mt-5 text-end'}>
                <div className={'fw-bold fs-3 ps-2 my-3'}>SETTINGS</div>
                <div className={'fw-bold fs-3 ps-2 my-3'}>SIGN OUT</div>
            </div>

        </div>
    )

}