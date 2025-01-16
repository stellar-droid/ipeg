import React from 'react'
import WorkFlowTabel from "./ReusableComponents/WorkFlowTable";


const Workflow = () => {
  return (
    <>
    {/* <h1>Doing TEsting for Routing Setup</h1>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
      <iframe
        src="https://modeler.camunda.io/embed/278e2057-3af8-4900-8855-d517e0830e5e"
        width="700"
        height="500"
        style={{ border: "1px solid #ccc" }}
        allowFullScreen
        title="Workflow Builder"
      ></iframe>
    </div> */}

   
    <WorkFlowTabel/>
    </>
  )
}

export default Workflow