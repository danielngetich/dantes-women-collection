import React, { useState } from "react";
function AddCollection() {

  const [PName,setPName]=useState("")
  const [pImage,setPImage]=useState("")
  const [pPrice,setPPrice]=useState("")
  const [availsizes,setAvailsizes]=useState("")

  const formData={
    image:pImage,
    title:PName,
    availableSizes:availsizes,
    price:pPrice
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/products",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then((data)=>console.log(data))
    setPName("");
    setPImage("");
    setPPrice("");
    setAvailsizes("")
  }
  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Post Product
                  </h3>

                  <form className="px-md-2" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        value={PName}
                        onChange={(e)=>setPName(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1q">
                        Product Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        value={pImage}
                        onChange={(e)=>setPImage(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1q">
                      Product Image url
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        value={pPrice}
                        onChange={(e)=>setPPrice(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1q">
                      Product  Price
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        value={availsizes}
                        onChange={(e)=>setAvailsizes(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1q">
                      AvailableSizes
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-lg mb-1"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddCollection;
