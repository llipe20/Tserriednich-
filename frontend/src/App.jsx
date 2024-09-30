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
        <main className="flex flex-col justify-start items-start gap-3 p-5 w-3/4 min-h-screen">
            <Estrofe
              title={"Introdução"} 
              text={"djfni djf jdsf dfg  gfd sg dfm hpp ofidsafk gnfig dskf pp rpg  dsfjrj fjod gjf oj"}
            >
                <Code title={"endpoint"}>
                  { 
                   `Colocar os endpoint e codigos aqui`
                  }
                </Code>
            </Estrofe>
        </main>
    </div>
  )
}

export default App
