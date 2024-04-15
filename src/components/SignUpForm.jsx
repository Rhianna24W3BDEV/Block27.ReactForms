import { useState } from 'react';

export default function SignUpForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {setToken} = props;
    

 
    async function handleSubmit(){
        event.preventDefault(); 
  

        try{
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,{   
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });
           const result = await response.json();
            setToken(result.token);

        } catch(error) {
            setError(error.message);
        }
    };
   
    
    return ( <> 
    <div className = "form">
    <h2>Sign Up</h2>
    {error && (<p>{error}</p>)}

    <form onSubmit = {handleSubmit}>
        <label>
            Username: <input value = {username} onChange = {(e) => setUsername(e.target.value)} minLength={8}/>
        </label>
        <label>
            Password: <input value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
    </div>
    </>
    );
}