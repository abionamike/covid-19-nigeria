import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://covidnigeria.herokuapp.com/api')
      .then(res => res.json())
      .then(result => setData(result.data))
  }, []);

  console.log(data);
  return (
    <div className="container">
      <main className="main">
        <h1 className="title"><div>Covid-19</div> In Nigeria</h1>
        {!data && (<div className="description">Loading...</div>)}
        {data && (
          <>
            <div className="description">
              <p>Total Samples Tested: {data.totalSamplesTested}</p>
              <p>Total Confirmed Cases: {data.totalConfirmedCases}</p>
              <p>Total Active Cases: {data.totalActiveCases}</p>
              <p>Discharged: {data.discharged}</p>
              <p>Death: {data.death}</p>
            </div>
            <div className="grid">
              {data.states.map((state) => (
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
