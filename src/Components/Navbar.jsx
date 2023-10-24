/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom"
import UseAuth from "../Hooks/UseAuth";
// import UseAuth from "../Hooks/UseAuth";


const Navbar = () => {

  const {user , LogOut} = UseAuth();
    const navLinks =  <>
    <li><NavLink to="/">Home</NavLink></li>
    {/* <li><NavLink to="/update">Update Product</NavLink></li> */}
    <li><NavLink to="/myCart">My Cart</NavLink></li>

    {/* <li><NavLink to="/showProduct">Show Product</NavLink></li> */}

    <li><NavLink to='/add-products'>Add Products</NavLink></li>
    </>
  return (
    <div data-theme="dark">
        <div className="navbar bg-base-100" data-theme="light">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
        
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">Moscow Mashuka</a> */}
    <img className="w-[130px] ml-7" src="https://i.ibb.co/CHB0nDB/logo2.png" alt="Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     {navLinks}
     </ul>
  </div>
  <div className="navbar-end">
  {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={LogOut}
                                    >Logout</button>

                                </li>
                                </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
  </div>
</div>
    </div>
  )
}

export default Navbar