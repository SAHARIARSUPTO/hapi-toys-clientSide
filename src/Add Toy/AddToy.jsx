const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.name.value;
    const sellerName = form.seller.value;
    const image = form.images.value;
    const category = form.categorys.value;
    const price = form.prices.value;
    const quantity = form.quantitys.value;
    const ratings = form.rating.value;
  
    const newProducts = {
      toyName,
      sellerName,
      category,
      image,
      price,
      quantity,
      ratings
    };
    form.reset();
  
    fetch('https://hapi-hapi-toys-sahariarsupto.vercel.app/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProducts)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Data sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        alert('Error sending data. Please try again.');
      });
  };
  



    return (
      <div >
        <form onSubmit={handleAddToy} className="grid grid-cols-2 gap-4 py-10 px-10" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="seller"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="prices"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="categorys"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="rating"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="quantitys"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="images"
          />
        </div>
        <button className="btn btn-primary w-1/4 text-center my-9">Add Toy</button>
        </form>
      </div>
    );
  };
  
  export default AddToy;
  