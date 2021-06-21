import React from 'react'

function ProductItem(props) {
  const { category, name, price, count, setCount } = props

  return (
    <>
      {/* 商品列表 */}
      <div className="d-flex itemRow bdTop align-items-center justify-content-between position-relative">
        <div className="myCheckbox selectOne ml-3" />
        <div className="item d-flex align-items-center mr-5">
          <div className="itemPic" />
          <div className="bd2">
            <div className="mb-0 ml-5">
              {category}
              <br />
              {name}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bd1 p-2 scBtn scBtnSub"
            onClick={() => {
              setCount(count - 1)
            }}
          >
            -
          </div>
          <div className="bd1 p-2">{count}</div>
          <div
            className="bd1 p-2 scBtn scBtnAdd"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            +
          </div>
        </div>
        <div className="itemSubtotal bd1">$ {price}</div>
        <div className="delOne position-absolute">
          <i className="fas fa-times p-3 scBtn " />
        </div>
      </div>

      {/* <!-- 商品列表 --> */}
      {/* <div className="d-flex itemRow align-items-center justify-content-between">
        <div className="myCheckbox selectOne ml-3"></div>
        <div className="item d-flex align-items-center mr-5">
          <div className="itemPic"></div>
          <div className="bd2">
            <div className="mb-0 ml-5">
              {category}
              <br />
              {name}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bd1 p-2 scBtn scBtnSub"
            onClick={() => {
              setCount(count - 1)
            }}
          >
            -
          </div>
          <div className="bd1 p-2">{count}</div>
          <div
            className="bd1 p-2 scBtn scBtnAdd"
            onClick={() => setCount(count + 1)}
          >
            +
          </div>
        </div>
        <div className="bd1">$ {price}</div>
        <i className="fas fa-times align-self-start p-3 scBtn"></i>
      </div> */}
    </>
  )
}

export default ProductItem
