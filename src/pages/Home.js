import Header from '../components/Header';
import Search from '../components/Search';
import DeveloperDetails from '../components/DeveloperDetails';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import {Helmet} from "react-helmet";


function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Developer-Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg"/>
            </Helmet>
            <Header />
            <Search />
            <DeveloperDetails />
            <NotFound />
            <Footer />
        </div>
    );
}

export default Home;
