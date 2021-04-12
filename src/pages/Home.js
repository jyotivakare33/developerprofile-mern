import Header from '../components/Header';
import Search from '../components/Search';
import DeveloperDetails from '../components/DeveloperDetails';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';
import  Title  from '../images/avatar.png';
import MetaTags from 'react-meta-tags';

function Home() {
    return (
        <div>
            <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content={Title} />
                    <meta name="image" property="og:image" content={Title}></meta>
          </MetaTags>
            <Header />
            <Search />
            <DeveloperDetails />
            <NotFound />
            <Footer />
        </div>
    );
}

export default Home;
