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
