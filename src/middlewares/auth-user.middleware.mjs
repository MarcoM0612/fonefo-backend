import second from 'bcrypt'
import jwt from 'jsonwebtoken'

const authUser = (req, res, next) => {

    const token = req.header('X-Token')

    if(! token){
        return res.json({msg: 'Error: al obtener el token'})
    }

    const JWT_SECRET = '874th5t645643643y67n4'

    console.log({token})
    const payload = jwt.verify(token, JWT_SECRET)

    delete payload.iat
    delete payload.exp

    console.log({payload})

    next()
}

export{
    authUser
}