import './styles.css'

import LoginImage from './assets/login.svg'

function Formulario() {

  return (
    <form className="formulario">
      <div className='formulario-img'>
        <img src={LoginImage} alt="" srcSet='' />
      </div>

      <label htmlfor="">E-mail</label>
      <input type="email" name="" id=""  required />

      <label for="">Senha</label>
      <input type="password" name="" id="" required />


      <MyButton />

    </form>

  )
}



function MyButton() {

  return (

    <button className="botao">Login</button>

  )
}


function App() {

  return (
    <>
      <Formulario />

    </>


  )
}

export default App