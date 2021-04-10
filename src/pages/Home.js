import Header from '../components/Header';
import Search from '../components/Search';
import DeveloperDetails from '../components/DeveloperDetails';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <Search />
            <DeveloperDetails />
            <NotFound />
            <Footer />
        </div>
    );
}

export default Home;
