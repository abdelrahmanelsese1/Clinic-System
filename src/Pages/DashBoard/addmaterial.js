import React from 'react'
// import Addmaterial from '../DashBoard/addmaterial';
import "../../Style/materials.css";

function Addmaterial() {
  return (

    <div id='addmaterial'>
        <center><h1 id="hhh">add your material</h1></center>
        <div className="container">
<div id="formm">
          <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" />
    </div>
     <div class="mb-3">
      <label for="usage" class="form-label">Usage</label>
      <input type="text" class="form-control" id="usage" />
    </div>
     <div class="mb-3">
      <label for="summary" class="form-label">Summary</label>
      <input type="text" class="form-control" id="summary" />
    </div>
    
    <button id="btn_form_add" type="submit" class="btn btn-primary">Add Material</button>
    </form>
    </div>
    </div>
    </div>
    
  )
}

export default Addmaterial
