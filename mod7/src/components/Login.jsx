import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const {currentUser, handleUpdateUser} = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
        setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
        setSubmitResult('Password must not match email address');
        } else {
        setSubmitResult('Successful login.');
        handleUpdateUser({ email: userEmail }); // context function
        }
    }

    {/* if the user is already logged in, show msg instead of form */}
    if (currentUser.email) return (
        <><p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );
    // otherwise render same form as previously, no changes