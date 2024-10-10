import Navgation from "./components/Navgation";
import Estrofe from "./components/Estrofe";
import Code from "./components/Code";

const App = () => {
/*  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/produts/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse não automatico",
          descricao : "Porduto semi usado, com um pequeno defeito de fabrica",
          categoria : "tecnologia",
          foto1 : 'loysy@gamil.com',
          foto2 : "12265978",
          foto3 : "hptts://dsfndsljgasdojan.com",
          foto4 : '989 48515 5656',
          valor : '33,10',
          vendido : true,
          dataCriacao : "2024-09-28",
          idUsuario : 2
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  }

  
  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/users/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse automatico",
          cpf : "5.49849849495",
          email : "lioys@gamil.com",
          senha : '154dvdsgds',
          foto : "sdfasijgn562.com",
          fone : "21915195195195"
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  }

  const add = async () => {
    try {
      const req = await fetch("http://localhost:8800/produts/2", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome : "Mouse automatico",
          descricao : "Porduto semi usado, com um pequeno defeito de fabrica",
          categoria : "tecnologia",
          foto1 : 'loysy@gamil.com',
          foto2 : "12265978",
          foto3 : "hptts://dsfndsljgasdojan.com",
          foto4 : '989 48515 5656',
          valor : '33,10',
          vendido : true,
          dataCriacao : "2024-09-28",
          idUsuario : 2
        })
      })
      const res = await req.json();
      console.log(res);
    }  catch (error) {
      console.error('Erro:', error);
    }
  } */

  return (
    <div className="flex justify-between items-center w-screen min-h-screen bg-gray-200">
        <Navgation></Navgation>
        <div className="w-1/4 h-screen"></div>
        <main className="flex flex-col justify-start items-start gap-5 p-7 pt-5 pb-5 w-3/4 min-h-screen">
            <Estrofe
              id={"intro"}
              title={"Introdução"} 
              text={"Como toda API funciona, essa basicamente dará e receberá informações para vocês relacionadas ao nosso projeto de PIE, basta usar os endpoint a seguir. Mas antes irei explicar brevemente a minha lógica para facilitar a usabilidade vocês. Tudo que vocês pedirem ou adicionarem, irão ou virão de um banco de dados, cujo foi resumido em duas tabelas: users e produts, onde users estão todos os dados relacionados aos usuários, como senha, login, nome e etc ... e produts relacionados a todos os tipos de objetos que os usuários desejam colocar a troca ou a venda no app. Lembrando que a relação entre essas tabelas é: 1 produto pertence a 1 usuário, mas 1 usuário pode ter vários produtos. A seguir tem as tabelas do banco, para vocês saberem quais informações terão que trabalhar para construir o projeto. Dúvidas? Não me procure ;)"}
            >
                <Code title={"Tabelas do banco de dados"}>
                  { 
                   `users (
	id INT AUTO_INCREMENT,
    nome VARCHAR(200),
    cpf VARCHAR(20),
    email VARCHAR(50),
    senha VARCHAR(50),
    foto VARCHAR(100),
    fone VARCHAR(50),
    PRIMARY KEY(id)
);

TABLE produts (
	id INT AUTO_INCREMENT,
    nome VARCHAR(200),
    descricao VARCHAR(500),
    categoria VARCHAR(50),
    foto1 VARCHAR(100),
	foto2 VARCHAR(100),
	foto3 VARCHAR(100),
	foto4 VARCHAR(100),
    valor VARCHAR(10),
    vendido BOOLEAN,
    dataCriacao VARCHAR(20),
    idUser INT,
    PRIMARY KEY(id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);`
                  }
                </Code>
            </Estrofe>

            {/* GET usuários*/}
            <Estrofe
              id={"get-user"}
              title={"Buscar usuários cadastrados"} 
              text={"Essa requisição irá lhe retornar TODOS os usuários cadastrados no banco de dados, bastar colar a URL abaixo. Lembrando que sempre ela retornará TODOS os usuários, se quiser um especifico terá que puxar todos e filtrar com algum código interno"}
            >
                <Code title={"Endpoint"}>
                  { "https://localhost:3000/users"}
                </Code>
            </Estrofe>

            {/*GET produtos*/}
            <Estrofe
              id={"get-product"}
              title={"Buscar produtos cadastrados"} 
              text={"Essa requisição irá lhe retornar TODOS os produtos cadastrados no banco de dados, bastar colar a URL abaixo. Lembrando que sempre ela retornará TODOS os produtos, se quiser um especifico terá que puxar todos e filtrar com algum código interno"}
            >
                <Code title={"Endpoint"}>
                  { "https://localhost:3000/produts"}
                </Code>
            </Estrofe>

            {/*POST usuários*/}
            <Estrofe
              id={"post-user"}
              title={"Adicionar novos usuários"} 
              text={"Essa requisição irá cadastrar no banco um novo usuário, é importante resaltar que na hora de fazer esta requisição, o objeto enviado no body esteja nesse modelo e com essas mesmas informações:"}
            >
                <Code title={"Modelo do body da requisição"}>
                  { `{
  nome : " ",
  cpf : " caracteres ",
  email : " ",
  senha : " ",
  foto : " link da foto ",
  fone : " caracteres "
}`}
                </Code>
                <Code title={"Endpoint"}>
                  {"https://localhost:3000/users"}
                </Code>
            </Estrofe>

            {/*POST produtos*/}
            <Estrofe
              id={"post-product"}
              title={"Adicionar novos produtos"} 
              text={"Essa requisição irá cadastrar no banco um novo produto, é importante resaltar que na hora de fazer esta requisição, o objeto enviado no body esteja nesse modelo e com essas mesmas informações:"}
            >
                <Code title={"Modelo do body da requisição"}>
                  { `{
  nome : " ",
  descricao : " ",
  categoria : " ",
  foto1 : " link ",
  foto2 : " link ",
  foto3 : " link ",
  foto4 : " link ",
  valor : " caractere ",
  vendido : Boolean (true or false),
  dataCriacao : "2024-09-28",
  idUsuario : INT
}`}
                </Code>
                <Code title={"Endpoint"}>
                  {"https://localhost:3000/produts"}
                </Code>
            </Estrofe>

            {/*PUT usuários*/}
            <Estrofe
              id={"put-user"}
              title={"Atualizar dados de um usuário"} 
              text={"Essa requisição irá atualizar no banco um usuário, é importante resaltar que na hora de fazer esta requisição, o objeto enviado no body esteja nesse modelo e com essas mesmas informações: E caso não atualize todos os dados, vocês terão preencher todos os campos."}
            >
                <Code title={"Modelo do body da requisição"}>
                  { `{
  nome : " ",
  cpf : " caracteres ",
  email : " ",
  senha : " ",
  foto : " link da foto ",
  fone : " caracteres "
}`}
                </Code>
                <Code title={"Endpoint"}>
                  {"https://localhost:3000/users/:id"}
                </Code>
            </Estrofe>

            {/*PUT produtos*/}
            <Estrofe
              id={"put-product"}
              title={"Atualizar dados de um produto"} 
              text={"Essa requisição irá atualizar dados no banco um produto, é importante resaltar que na hora de fazer esta requisição, o objeto enviado no body esteja nesse modelo e com essas mesmas informações: e mesmo que não atualize todos os dados, vocês terão que preencher todos os campos."}
            >
                <Code title={"Modelo do body da requisição"}>
                  { `{
  nome : " ",
  descricao : " ",
  categoria : " ",
  foto1 : " link ",
  foto2 : " link ",
  foto3 : " link ",
  foto4 : " link ",
  valor : " caractere ",
  vendido : Boolean (true or false),
  dataCriacao : "2024-09-28",
  idUsuario : INT
}`}
                </Code>
                <Code title={"Endpoint"}>
                  {"https://localhost:3000/produts/:id"}
                </Code>
            </Estrofe>

            {/* DELETE usuários*/}
            <Estrofe
              id={"delete-user"}
              title={"Deletar usuários cadastrados"} 
              text={"Essa requisição irá deletar um usuário do banco baseado no id do mesmo, por isso se atentem na hora que fazer a requisição passar o id do usuário como parâmetro também. Ex:"}
            >
                <Code title={"Endpoint"}>
                  { "https://localhost:3000/users/:id"}
                </Code>
            </Estrofe>

            {/*DELETE produtos*/}
            <Estrofe
              id={"delete-procuct"}
              title={"Deletar produtos cadastrados"} 
              text={"Essa requisição irá deletar um produto do banco baseado no id do mesmo, por isso se atentem na hora que fazer a requisição passar o id do produto como parâmetro também. Ex:"}
            >
                <Code title={"Endpoint"}>
                  { "https://localhost:3000/produts/:id"}
                </Code>
            </Estrofe>
        </main>
    </div>
  )
}

export default App
