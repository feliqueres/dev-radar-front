import React from "react";

import "./global.css";
import "./App.css";

function App() {
  return (
    <div id="app">
      <asside>
        <strong>Cadastrar</strong>
        <form>
          <div name="input_block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div name="input_block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div name="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div name="input_block">
              <label htmlFor="Longitude">Longitude</label>
              <input name="Longitude" id="Longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </asside>
      <main></main>
    </div>
  );
}

export default App;
