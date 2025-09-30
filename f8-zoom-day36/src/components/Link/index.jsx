import { useNavigate } from "react-router"


function Link({ to, className, children }) {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate(to)
    }

    return <a onClick={handleClick} href={to} className={className}>
        {children}
    </a>
}

export default Link