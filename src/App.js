import Stats from './components/Stats';
import TimeSeries from './components/TimeSeries';
import Navbar from './components/Navbar'
import './App.css'
import CasesCountryWise from './components/CasesCountryWise';
import Graphs from './components/Graphs';
// import SearchField  from 'react-search-field';


function App() {
//   const onChange = (e) =>{
//     // setVal(e.target.value)
// }



  return (
    <div id="home">
    <Navbar/>
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-5 mb- 4 p-4 text-center" style={{color:"darkred"}}>Covid19 - Live updates - Coronavirus Tracker</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png" className="img-thumbnail my-3 mb-5" alt="coronaImg" style={{width:"14rem"}}/>
      {/* <SearchField
                    placeholder="Search..."
                    onChange={onChange}
                    searchText="India"
                    classNames="test-class"
      // >*/}
      
      <Stats/> 
      {/* <TimeSeries/> */}
      <Graphs/>
      <CasesCountryWise/>
</div>
</div>
  );
}

export default App;