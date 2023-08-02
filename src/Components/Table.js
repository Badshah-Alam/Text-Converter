import React from 'react'

function Table() {
  return (
    <div>

<table className="table">
  <thead>
    <tr className='tr'>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Work</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Badshah</td>
      <td>Alam</td>
      <td>FaceBook</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Harry</td>
      <td>Thorn</td>
      <td>Twitter</td>
    </tr>
   
  </tbody>
</table>


      
    </div>
  )
}

export default Table
