import { useNavigate } from "react-router-dom" 

export default function Login(){

    const navigate = useNavigate()

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            let user = sessionStorage.getItem('user')
            if(!user){
                return
            }
            user=JSON.parse(user)
            if(user.email==e.currentTarget.elements.email.value && user.password==e.currentTarget.elements.password.value){
                navigate('/home')
            }
        }}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}