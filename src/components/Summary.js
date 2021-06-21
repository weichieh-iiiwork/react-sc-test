import React from 'react'

function Summary(props) {
  const { total, productCount } = props
  return (
    <>
      <div className="col-10 mx-auto px-0">
        <div className="d-flex flex-column align-items-end my-5">
          <div className="mb-0 totalPriceFont">
            共<span>{productCount}</span>件商品
          </div>
          <div className="mb-0 totalPriceFont">
            小計 NT$<span>{total}</span>元
          </div>
        </div>
      </div>
    </>
  )
}
export default Summary
