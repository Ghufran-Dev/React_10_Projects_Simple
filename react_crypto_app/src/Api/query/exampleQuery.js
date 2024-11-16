import Ax from "../axios"
export const fetchExample = async () => {
    try {
        const  { data }  = await Ax.get("/")
        return data
    } catch (error) {
        throw Error(error.response.data.message)
        // throw Error("something went wrong")
        
    }
}
