import "../styles/ExpenceDetails.css";

function ExpenceDetails() {
  return (
    <form className="row g-3 needs-validation">
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Description</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Amount</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder=""
        />
      </div>

      <div className="form-n-group">
        <label htmlFor="formGroupExampleInput">Categories</label>
        <select className="form-select" id="validationCustom04" required>
          <option selected disabled value=""></option>
          <option>Gloceries</option>
          <option>Furniture</option>
          <option>Jewellery</option>
        </select>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

export default ExpenceDetails;
