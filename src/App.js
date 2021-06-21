import React, { useState } from 'react'
import './style.css'
import './shoppingCart.css'
import OrderList from './components/OrderList'

const scStep = [
  '確認購物車', '物流選擇', '填寫資料', '完成訂購'
]

const products = [
  {
    name: '日用薄型衛生棉 15片',
    category: '弦月柔棉',
    price: 600,
  },
  {
    name: '日用薄型衛生棉 20片',
    category: '弦月柔棉',
    price: 800,
  },
  {
    name: '日用薄型衛生棉 5片',
    category: '弦月柔棉',
    price: 100,
  },
  {
    name: '棉條 20個',
    category: '弦月柔棉',
    price: 1200,
  },
]

function App() {
  // 動態的對於產品數量的設定
  // counts 初始化 [1,1,1,1,1]
  const [counts, setCounts] = useState(
    Array(products.length).fill(1)
  )

  // 計算總價用
  const total = () => {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * counts[i]
    }

    return sum.toLocaleString()
  }

  // 計算總共買了多少產品
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i]
    }
    return totalCount
  }

  return (
    <>
      <OrderList
          scStep={scStep}
          products={products}
          counts={counts}
          setCounts={setCounts}
          total={total}
          productCount={productCount}
        />
    </>
  )
}

export default App
