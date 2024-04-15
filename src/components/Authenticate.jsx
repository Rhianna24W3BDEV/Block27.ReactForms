import { useEffect } from "react";
import { useState } from "react";


export default function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState("");

   

    async function handleclick(){
        try{
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            setSuccessMessage(result.message);
          
           

        } catch(error) {
            setErrorMessage('Unable to Authenticate');
            console.log(setError(error));
        }
    }
  
    return (
    <>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}
    {errorMessage && <p>{errorMessage}</p>}
    {username && <p>Welcome, {username}</p>}
    <button onClick = {handleclick}>Authenticate Token!</button>
</>
)}