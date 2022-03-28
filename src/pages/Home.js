import Nav from "../components/Nav";
function Home() {
    return (
        <>
            <Nav />
            <picture>
                <source media="(max-width:576px)" srcSet="img/hard-hat-small.jpeg" />
                <img src="img/hard-hat.jpg" className="img-fluid" alt="Builder" />
            </picture>

        </>
    );
}

export default Home;