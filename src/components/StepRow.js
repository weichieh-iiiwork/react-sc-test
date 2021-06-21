import React from 'react'

function StepRow(props) {
    const { scStep } = props

    // const scStepText = (step) =>{
    //     for(let i=0; i<step.len; i++){
    //         if(i === step.len){
    //             return (
    //             <div className="step">
    //             <div className="d-flex align-items-center">
    //             <i className="stepCircle stepActive"></i>
    //             </div>
    //             <div className="stepFont">{step[i]}</div>
    //             </div>
    //             )
    //         }
    //         return (
    //         <div className="step">
    //             <div className="d-flex align-items-center">
    //                 <i className="stepCircle stepActive"></i>
    //                 <i className="stepLine"></i>
    //                 <i className="stepArrow right"></i>
    //             </div>
    //             <div className="stepFont">{step[i]}</div>
    //         </div>
    //         )
    //     }
    // }
    

  return(
    <>
      {/* <!-- 購物車流程 --> */}
      <div className="col-10 px-0 d-flex mx-auto justify-content-center">
        {/* {scStepText(scStep)} */}
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle stepActive"></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">{scStep[0]}</div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">{scStep[1]}</div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
              <i className="stepLine"></i>
              <i className="stepArrow right"></i>
            </div>
            <div className="stepFont">{scStep[2]}</div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className="stepCircle "></i>
            </div>
            <div className="stepFont">{scStep[3]}</div>
          </div>
        </div>
    </>
  )
}

export default StepRow