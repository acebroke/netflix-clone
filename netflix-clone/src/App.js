import './App.css';
import Row from "./components/Row"
import request from "./request"
import Banner from "./components/Banner"
function App() {


  return (
    <div className="App">
      <Banner/>
      <Row title="Original Netflix" url={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title= "Tendance" url= {request.fetchTrending}/>
      <Row title="Les mieux notés" url={request.fetchTopRated}/>
      <Row title="Film d'action" url={request.fetchActionMovies}/>
      <Row title="Comédies" url={request.fetchComedyMovies}/>
      <Row title="Film d'horreur" url= {request.fetchHorrorMovies}/>
      <Row title="Film Romantique" url= {request.fetchRomanceMovies}/>
      <Row title="Documentaires" url= {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
