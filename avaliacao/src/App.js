import Header from "./components/Header";
import Post from "./components/Post";
import PostImage from "./img/endrick.jpg"
import ProfileImage from "./img/profileImage.svg"
import "./css/Style.css"
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentSite">
        <Post titulo="Jóia do Palmeiras é convocada pelo Fernando Diniz!" categoria="Futebol" image={PostImage} altImg="Foto do Endrick" descricao="A grande jóia palmeirense se junta a uma lista seleta de grandes jogadores mundiais como Ronaldo Fenômeno e Pelé! Com apenas 17 anos e 118 dias, Endrick foi convocado para a Seleção Brasileira para enfrentar a Colômbia e a Argentina, na próxima semana. O jovem vem se destacando nos últimos jogos do Palmeiras, sendo a principal peça de Abel Ferreira na histórica virada em cima do Botafogo! Com essa convocação, o Palmeiras vai receber um bônus do Real Madrid, que já comprou o atleta, pois uma das cláusulas do contrato era que o jovem fosse convocado para a seleção antes de ir para o clube espanhol! Para mais notícias como essa, siga a nossa página!" />
        <h3>Comentários - (1)</h3>
        <Comentario profileImage={ProfileImage} altProfileImage="Imagem de Perfil do Usuário" profileName="Robson" comentario="Muito zika esse muleke! 👍" />
      </div>
    </div>
  );
}

export default App;
