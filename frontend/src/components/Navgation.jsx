import React from "react";
import Header from "./Header";
import Link from "./Link";

const Navgation = () => {
    return (
        <div className="flex flex-col justify-evenly items-start w-1/4 h-screen bg-blue-950 text-white p-5 fixed top-0 left-0">
            <Header></Header>
            <Link title={"Introdução"} ancora={"intro"}></Link>
            <Link title={"Pegar usuários do banco"} ancora={"get-user"}></Link>
            <Link title={"Pegar produtos do banco"} ancora={"get-product"}></Link>
            <Link title={"Adicionar usuários no banco"} ancora={"post-user"}></Link>
            <Link title={"Adicionar produto no banco"} ancora={"post-product"}></Link>
            <Link title={"Atualizar dados de usuário"} ancora={"put-user"}></Link>
            <Link title={"Atualizar dados de produto"} ancora={"put-product"}></Link>
            <Link title={"Apagar usuário do banco"} ancora={"delete-user"}></Link>
            <Link title={"Apagar produto do banco"} ancora={"delete-product"}></Link>
        </div>
    )
}

export default Navgation