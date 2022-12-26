


function App() {
  return (
    <>
    <header className="hide-when-mobile">
      <div className="container">
        <h1>Course for Arab</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="">
              HTML
            </a>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">Learn in 1h</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="">
              CSS
            </a>
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Css Exempels</a>
              </li>
              <li className="meni-project">
                <a className="bb" href="">
                  Min projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
                </a>
                <ul className=" sub-sub-ul">
                  <li className="sub-main-list">
                    <a className="sub-main-link" href="">
                      Project 1
                    </a>
                  </li>
                  <li className="sub-main-list">
                    <a className="sub-main-link" href="">
                      Project 2
                    </a>
                  </li>
                  <li className="sub-main-list">
                    <a className="sub-main-link" href="">
                      Project 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="">
              JavaScript
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">Caming Soon</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <header className="show-when-mobile">
      <h1>Cours For Arab</h1>
      <label className="absolut aa" htmlFor="humborger">
        <i className="fa-solid fa-bars" />
      </label>
      <input id="humborger" type="checkbox" />
      <div className="show-on-click">
        <div className="main-div">
          <label className="html" htmlFor="html">
            HTML <i className="fas fa-plus" />
          </label>
          <input id="html" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Crash Course</a>
            </li>
            <li>
              <a href="">Learn in 1h</a>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label className="css" htmlFor="css">
            CSS <i className="fas fa-plus" />
          </label>
          <input id="css" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Css Exempels</a>
            </li>
            <li className="meni-project">
              <label className="min-project" htmlFor="min">
                Min projects <i className="fas fa-plus" />
              </label>
              <input id="min" type="checkbox" />
              <ul className=" sub-sub-div">
                <li>
                  <a href="">Project 1</a>
                </li>
                <li>
                  <a href="">Project 2</a>
                </li>
                <li>
                  <a href="">Project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label className="js" htmlFor="js">
            JavaScript <i className="fas fa-plus" />
          </label>
          <input id="js" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Caming Soon</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      Resposive Drop-down <br /> Meni Bar <br /> HTML And CSS Only
    </main>
    <footer>Desined and Developed by Walid Dardour</footer>
  </>
  
  );
}

export default App;
