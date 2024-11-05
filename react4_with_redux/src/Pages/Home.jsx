import Card from "../Components/Card"
const Home = () => {
    return (
        <>

            <div style={bg} className="bg-cover bg-no-repeat bg-center">
                <Card />
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