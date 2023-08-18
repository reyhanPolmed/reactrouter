import { Link, Outlet } from "react-router-dom"

export const Product = () => {
  return (
    <>
    <input type='search' placeholder="='search products" />
    <nav>
        <Link to='featured'> Featured</Link>
        <Link to='/products/new'> new</Link>
    </nav>
    <Outlet />
    </>
  )
}
