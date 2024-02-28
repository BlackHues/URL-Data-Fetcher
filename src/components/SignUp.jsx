import { useNavigate } from "react-router-dom"

export default function SignUp(){

    const navigate = useNavigate()

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            const email = e.currentTarget.elements.email.value
            const username = e.currentTarget.elements.username.value
            const fullname = e.currentTarget.elements.fullname.value
            const password = e.currentTarget.elements.password.value
            sessionStorage.setItem('user',JSON.stringify({email,password,username,fullname}))
            navigate('/login')
        }}>
            <input type="email" name="email" placeholder="email" />
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="fullname" placeholder="fullname" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}