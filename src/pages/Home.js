import Nav from "../components/Nav";
import { cardContent } from "../utils/cardContent";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Nav />
            <div className="position-relative imgContent">
                <div className="infoBoxContent">
                    <h2>Álom-építők</h2>
                    <p>Lorem ipsum valami szöveg ide kell</p>
                    <button type="button" className="btn btn-outline-success btn-lg">Ajánlatkérés</button>
                </div>
                <div className="info-box"></div>
            </div>
            <div className="row rowMargin">
                {cardContent.map(({ imgClassName, cardTitle, cardContent }) => (
                    <Card key={imgClassName} imgClassName={imgClassName} cardTitle={cardTitle} cardContent={cardContent} />
                ))
                }
            </div>
            <Footer />
        </>
    );
}

export default Home;