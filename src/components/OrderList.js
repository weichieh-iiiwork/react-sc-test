import React from 'react'
import ProductItem from './ProductItem'
import Summary from './Summary'

function OrderList(props) {
    const { products, counts, setCounts, total, productCount } = props

    return (
        <>
        <div className="container-fluid">
        {/* <!-- 購物車流程 --> */}
        <div className="col-10 px-0 d-flex mx-auto justify-content-center">
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle stepActive"></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">確認購物車</div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">物流選擇 </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">填寫資料</div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
            </div>
            <div className="stepFont">完成訂購</div>
          </div>
        </div>

        {/* <!---------------- 確認購物車 ----------------> */}
        {/* <!-- label --> */}
        <div className="col-10 mx-auto px-0">
          <div className="myLabelGroup d-flex">
            <div className="labelSquare">
              <div className="lableName">商品</div>
              <div className="labelTriangle"></div>
            </div>
            <div className="labelSquare bg-light">
              <div className="lableName">訂閱</div>
              <div className="labelTriangleWhite"></div>
            </div>
            <div className="labelSquare bg-light">
              <div className="lableName">活動</div>
              <div className="labelTriangleWhite"></div>
            </div>
          </div>
        </div>
        {/* <!-- 全選bar --> */}
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <div className="d-flex select-bar align-items-center">
            <div id="selectAll" className="myCheckbox selectAll ml-3"></div>
            <div className="myh5 m-4">全選</div>
            <i className="fas fa-trash ml-auto p-3 scBtn"></i>
          </div>
          {products.map((product, index) => (
        <ProductItem
          category={product.category}
          name={product.name}
          price={product.price}
          count={counts[index]}
          setCount={(newCount) => {
            // 先從目前狀態中複制一個新陣列
            const newCounts = [...counts]

            // 更新數量陣列自己的索引值，如果小於1則用1來更新
            newCounts[index] = newCount < 1 ? 1 : newCount

            // 更新到狀態中
            setCounts(newCounts)
          }}
        />
      ))}
          

          <Summary 
              total={total()}
              productCount={productCount()}
          />
        </div>

        {/* <!-- 按鈕列 --> */}
        <div className="col-10 mx-auto">
          <div className="d-flex btnRow justify-content-between mb-2">
            <div className="bg-green p-4 fitContent">
              <button className="btn-soft-green">上一步</button>
            </div>
            <div className="bg-green p-4 fitContent">
              <button className="btn-soft-green">下一步</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default OrderList