import NotificationComponent from './components/NotificationComponent';
import WrapperComponent from './components/WrapperComponent';

function App(){
  return (
      <>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <WrapperComponent>
            <NotificationComponent content="Lorem ipsum" type="is-danger"></NotificationComponent>
            <NotificationComponent content="Lorem ipsum" type="is-success"></NotificationComponent>
            </WrapperComponent>
          </div>
        </div>
      </div>
      </>
  )
}

export default App;