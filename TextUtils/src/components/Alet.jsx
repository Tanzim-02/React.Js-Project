
const Alet = (props) => {
    const {alert}= props;

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
 { alert && <div>
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
      >
        <strong>
        {capitalize(alert.type)} : {capitalize(alert.msg)}
        </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>}
    </div>
  );
};

export default Alet;
