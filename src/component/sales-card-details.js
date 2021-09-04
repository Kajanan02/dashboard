import React from 'react'

export default function SalesCardDetails() {
    return(
        <div className={'sales-card-container'}>
            <div className={'sales-card'}>
                <div className={'fw-bold fs-3'}>SALES DETAILS</div>

            <div className={'row mt-4'}>
                <div className={'col fs-4 text-end me-3 fw-bold'}>
                    CASH     :
                </div>
                <div className={'col fs-4 fw-bold'}>
                    21,230.00
                </div>
            </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        CREIDT  :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>


                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        CHECK  :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3 fw-bold'}>
                        TOTAL :
                    </div>
                    <div className={'col fs-4 fw-bold fw-bold'}>
                        12,907,000.00
                    </div>
                </div>

        </div>

            <div className={'sales-card'}>
                <div className={'fw-bold fs-3'}>EXPENSE DETAILS</div>

                <div className={'row mt-4'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        CASH     :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        21,230.00
                    </div>
                </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        CREIDT  :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>


                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        CHECK  :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-3 text-end me-3 fw-bold'}>
                        TOTAL :
                    </div>
                    <div className={'col fs-3 fw-bold'}>
                        12,907,000.00
                    </div>
                </div>

            </div>

            <div className={'sales-card'} style={{width:'720px'}}>
                <div className={'fw-bold fs-3'}>DRAWER DETAILS</div>

                <div className={'row mt-4'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        STARTING BALANCE     :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        21,230.00
                    </div>
                </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        TOTAL CASH SALES      :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>


                <div className={'row mt-3'}>
                    <div className={'col fs-4 fw-bold text-end me-3'}>
                        TOTAL EXPENSE BY CASH :
                    </div>
                    <div className={'col fs-4 fw-bold'}>
                        1,000,000.00
                    </div>
                </div>

                <div className={'row mt-3'}>
                    <div className={'col fs-3 text-end me-3 fw-bold'}>
                        DRAWER BALANCE  :
                    </div>
                    <div className={'col fs-3 fw-bold'}>
                        12,907,000.00
                    </div>
                </div>

            </div>
        </div>
    )
}