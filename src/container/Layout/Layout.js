import React from 'react'
import {Link,Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
        <nav>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to="/nothing-here">Nothing-here</Link>
            </li>
            <li>
                <Link to="/user/1">UserById</Link>
            </li>
        </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default Layout