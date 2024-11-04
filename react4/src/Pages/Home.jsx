import Card from "../Components/Card"
const Home = ({data, loading, error}) => {
   

    if (loading) return <div className="text-[4rem]">Loading...</div>
    if (error) return <div className="text-[4rem]">{error}</div>

    return (
        <>

            <div style={bg} className="bg-cover bg-no-repeat bg-center">
                <Card data={data}/>
            </div>
        </>
    )
}

export default Home
const bg =
{
    backgroundImage: 'url("images/bg.png")',
    minHeight: "calc(100vh - 12.1rem)",
}