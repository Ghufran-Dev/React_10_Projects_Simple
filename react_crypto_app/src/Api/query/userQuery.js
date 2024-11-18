import Ax from "../axios"

const USER_URL = "/user"

export const signInUser = async ({email, password}) => {
    try {
        const { data } = await Ax.post(`${USER_URL}/signin`,{
            email,
            password,
        })
        return data
    } catch (error) {
        throw Error(error.response.data.message)        
    }
}
export const signUpUser = async ({email, password, firstName, lastName}) => {
    try {
        const { data } = await Ax.post(`${USER_URL}/signup`,{
            email,
            password,
            firstName,
            lastName,
        })
        return data
    } catch (error) {
        throw Error(error.response.data.message)        
    }
}
export const sendEmailVerification = async ({email}) => {
    try {
        const { data } = await Ax.post(`${USER_URL}/send-verification-mail`,{
            email,
        })
        return data
    } catch (error) {
        throw Error(error.response.data.message)        
    }
}
export const verifyEmailAddressSignup = async ({token}) => {
    try {
        const { data } = await Ax.post(`${USER_URL}/verfiy-user-mail`,{
            token,
        })
        return data
    } catch (error) {
        throw Error(error.response.data.message)        
    }
}