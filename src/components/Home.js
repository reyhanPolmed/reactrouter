import { useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"

export const Home = () => {
    const navigate = useNavigate()
    const [Loggin, setLogin] = useState(false);

    useEffect(() => {
        if(!Loggin) {
            navigate('/login');
        }
    })
    return (
    <>
    <div>Home Page</div>
    <button onClick={() => navigate('order-summary', {replace: true})} >place order</button>
    </>
    )
}
