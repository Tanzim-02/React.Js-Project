import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const {title, aboutText, mode,toggleMode} = props;
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/about">{aboutText} </Link>
        </li>
        
      </ul>
     
     <div className="d-flex">
      <div className="bg-primary rounded mx-2" style={{
          height:'30px',
          width:'30px',
          cursor:'pointer'
      }} onClick={()=> toggleMode('primary')}>
      </div>
      <div className="bg-success rounded mx-2" style={{
          height:'30px',
          width:'30px',
          cursor:'pointer'
      }} onClick={()=> toggleMode('success')}>
      </div>

      <div className="bg-danger rounded mx-2" style={{
          height:'30px',
          width:'30px',
          cursor:'pointer'
      }} onClick={()=> toggleMode('danger')}>
      </div>

      


      <div className="bg-info rounded mx-2" style={{
          height:'30px',
          width:'30px',
          cursor:'pointer'
      }} onClick={()=> toggleMode('info')}>
      </div>



     </div>

      <div className={`form-check ms-2 form-switch text-${mode ==='light' ? 'dark' : 'light' }`}>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>toggleMode(null)}  />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
      
    </div>
  </div>
    </nav>
    </>
  )
}

export default Navbar


Navbar.propTypes = {title:PropTypes.string,
aboutText:PropTypes.string}