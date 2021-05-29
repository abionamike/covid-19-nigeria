import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import get_covid_data from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, covidData, error } = useSelector(state => state.covidData);

  useEffect(() => {
    dispatch(get_covid_data());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="main">
        <h1 className="title"><div>Covid-19</div> In Nigeria</h1>
        {loading && (<div className="description">Loading...</div>)}
        {error && (<div className="description">{error}</div>)}
        {covidData && (
          <>
            <div className="description">
              <p>Total Samples Tested: {covidData.totalSamplesTested}</p>
              <p>Total Confirmed Cases: {covidData.totalConfirmedCases}</p>
              <p>Total Active Cases: {covidData.totalActiveCases}</p>
              <p>Discharged: {covidData.discharged}</p>
              <p>Death: {covidData.death}</p>
            </div>
            <div className="grid">
              {covidData.states.map((state) => (
                <div key={state._id} className="card">
                  <h2>State: {state.state}</h2>
                  <p>Confirmed cases: {state.confirmedCases}</p>
                  <p>Cases On Admission: {state.casesOnAdmission}</p>
                  <p>Discharged: {state.discharged}</p>
                  <p>Death: {state.death}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <footer className="footer">
        <p>Copyright &copy; {new Date().getFullYear()} DevelopedbyMike</p>
      </footer>
    </div>
  );
}

export default App;
