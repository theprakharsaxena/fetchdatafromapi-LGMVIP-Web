import React, { useState } from 'react'

const Data = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    const fetchdata = await fetch("https://reqres.in/api/users?page=1");
    const actualData = await fetchdata.json();
    console.log(actualData.data);
    setData(actualData.data)
    if(actualData.data!==[]){
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }

  if (loading) {
    return (
        <div class="spinner-grow text-warning position-absolute top-50 start-50" role="status">
          <span class="">..........Loading...</span>
        </div>
    )
  }

  return (
    <div className='container mx-5 px-5'>
      <div className="row justify-content-between my-5">
          <div className="col">
          </div>
          <div className="col-auto">
            <button className='btn btn-success' type='button' onClick={getdata}><i className="fa-regular fa-circle-user"></i> Get Users</button>
          </div>
        </div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {
          data.map(({ id, email, first_name, last_name, avatar }) => {
            return (
              <div className='col' key={id}>
                <div className="card h-100 text-bg-danger">
                  <div className="card-header">
                    <small>{id}</small>
                    <img src={avatar} className="card-img-top rounded-circle mb-3 px-3" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><i className="fa-solid fa-user"></i> {first_name} {last_name}</h5>
                    <p className="card-text"><i className="fa-solid fa-envelope-circle-check" /> {email}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Data