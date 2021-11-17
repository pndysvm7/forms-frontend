import logo from './logo.svg';
import './App.css';
import Step1 from './Step1'
import HorizontalLinearStepper from './HorizontalLinearStepper'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import OTPdemo from './OTPdemo'


function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <HorizontalLinearStepper className='p-20' />

    </>

  );
}

export default App;
