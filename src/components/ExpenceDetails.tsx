import "../styles/ExpenceDetails.css";

function ExpenceDetails() {
  return (
    <form>
      <h5>Description</h5>
      <input className="form-control" type="text" placeholder="" />
      <h5>Amount</h5>
      <input className="form-control" type="text" placeholder="" />
      <h5>Category</h5>

      <div className="form-group">
        <select className="custom-select" required>
          <option value="">Open this select menu</option>
          <option>Glosaries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        <div className="invalid-feedback">
          Example invalid custom select feedback
        </div>
      </div>
    </form>
  );
}

export default ExpenceDetails;
