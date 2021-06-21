import React from 'react'

function Summary(props) {
    const { total, productCount } = props
    return(
        <>
        <div className="d-flex align-items-center justify-content-end my-5">
            <div className="mb-0 totalPriceFont">共 {productCount} 項目</div>
            <div className="mb-0 totalPriceFont">總計 NT$ {total}</div>
          </div>
        </>
    )
}
export default Summary