import './App.css';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Invite from './components/invite/invite';
import Main from './components/main/main';

const App = () => {
  return(
    <div className='App'>
      <Main/>
      <Body/>
      <Invite/>
      <Footer/>
      

    </div>
  )
}
export default App
