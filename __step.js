/**
 * ____________JWT______________
 * 1. Install json webtoken and cookie-parser
 * 2. Require those
 * 3. Set cookie parser as a middleware
 * 4. Create token
 * 5. jwt.sign(data, secret, {expiresIn:""})
 * 6. For Create a secret (first go to node enviroment then type require('crypto').randomBytes(64).toString('hex'));
 * 7. Set cookie in res  ("name",value,{httpOnly: true,secure: false[for localhost dont forget into true in production]})
 * 8. For know token created succesfully [.send({ success: true })]
 *  _____Then go to client side ovserver________
 * 1. First install axios if you dont install it before
 * 2. Then do this
 *                 if (currentUser?.email) {
                    const user = { email: currentUser.email }
                     axios.post('http://localhost:5000/jwt', user,{withCredintials:true})
                    .then(res=>console.log(res.data));
                    }
 * Then got to cors middleware crate a object and set [origin], and credintials: true; 
 * 
 * 
 * 
 *              
*/