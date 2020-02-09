import React from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div name="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div name="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div name="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div name="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7164521?s=460&v=4"
                alt="Felipe Queres"
              />

              <div className="user-info">
                <strong>Felipe Queres</strong> <span>Java, Python, Node</span>
              </div>
            </header>
            <p>Biografia como texto blabla</p>
            <a href="https://github.com/feliqueres/">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7164521?s=460&v=4"
                alt="Felipe Queres"
              />

              <div className="user-info">
                <strong>Felipe Queres</strong> <span>Java, Python, Node</span>
              </div>
            </header>
            <p>Biografia como texto blabla</p>
            <a href="https://github.com/feliqueres/">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
