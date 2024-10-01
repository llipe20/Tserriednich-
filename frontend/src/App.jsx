import Navgation from "./components/Navgation";
import Estrofe from "./components/Estrofe";
import Code from "./components/Code";

const App = () => {
  const add = async () => {
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

  /*
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
        <main className="flex flex-col justify-start items-start gap-3 p-7 pt-5 pb-5 w-3/4 min-h-screen">
            <Estrofe
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
        </main>
    </div>
  )
}

export default App
