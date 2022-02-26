

export default function Corpo (){
    return (
        <div>
            <form action="#">
                <label htmlFor="LoginLb">Login: </label>
                <input type="email" placeholder="exemplo@pscs.com.br"/>
                <br/>
                <label htmlFor="SenhaLb">Senha: </label>
                <input type="password" placeholder="1 a 12 digitos"/>
                <br/>
                <button>Entrar</button>
            </form>
        </div>
    )
}