const signup = (req,res)=>{
    const[fullName, username,password,confirmPassword] = req.body;
}

const login = (req,res)=>{            
    res.send('Login page');
}

const logout = (req,res)=>{
    res.send('Logout page');
}
module.exports = [login, signup, logout];