import Button from "../Components/Button"

const Home = () => {
    return (
            <section className="max-w-[50%] flex flex-col gap-4">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[7.8rem] font-bold uppercase">Your feet deserve the best</h1>
                <p className="text-[1rem] sm:text-[1.4rem] md:text-[2rem] font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores magni non aperiam eum unde? Beatae eveniet quisquam, nisi, doloribus vero quis sit architecto possimus enim facere impedit esse quae alias?</p>
                <section className="flex gap-6 items-center">
                    <Button text={"Shop Now"}/>
                    <Button text={"Category"}/>
                </section>
                <p className="capitalize text-[1rem] sm:text-[1.4rem] md:text-[2rem]">also available on</p>
                <section className="flex gap-6 items-center">
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="" />
                </section>
            </section>
    )
}

export default Home