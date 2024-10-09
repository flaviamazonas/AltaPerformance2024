import React, { useState } from 'react';
import './App.css'; // Arquivo de estilo

// Componente principal da aplicação
function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="tab-content nos-conheca">
            <header className="header-nos-conheca">
              <div className="header-text">
                <h1>NOS CONHEÇA</h1>
                <div className="header-subtitle">
                  <p>Uma solução tecnológica para conectar vidas</p>
                  <p>e transformar o futuro dos animais de rua.</p>
                </div>
              </div>
              <div className="header-image">
                <img src="/dog-header.png" alt="Cachorro" className="header-dog-image" />
              </div>
            </header>
            <main className="main-nos-conheca">
              <div className="circle-decorations">
                <div className="green-circle"></div>
                <div className="blue-circle"></div>
              </div>
              <div className="cat-section">
                <img src="/cat-image.png" alt="Gato" className="cat-image" />
              </div>
              <div className="content-text">
                <p>
                  O ConectPet surgiu para transformar a vida dos animais de rua e unir
                  pessoas que acreditam que todos merecem um lar cheio de carinho.
                </p>
                <p>
                  Nossa plataforma conecta ONGs, voluntários e adotantes em um só lugar.
                  Você pode adotar, fazer doações para instituições e se voluntariar
                  para ajudar na causa. Facilitamos todo o processo de adoção de forma
                  segura e prática.
                </p>
              </div>
            </main>
          </div>
        );
      case 1:
        return (
          <div className="tab-content adote-com-amor">
            <header className="header-adote-com-amor">
              <div className="header-text">
                <h1>ADOTE COM AMOR</h1>
                <div className="header-subtitle">
                  <p>Esses são alguns PETS que estão para adoção em algumas ONGs parceiras.</p>
                </div>
              </div>
              <div className="header-image">
                <img src="/dog-adoption-header.png" alt="Cachorro" className="header-dog-image" />
              </div>
            </header>
            <main className="main-adote-com-amor">
              <div className="cards-container">
                {[
                  { name: 'Gary', gender: 'macho', age: '1 ano', img: '/gary.png' },
                  { name: 'Moon', gender: 'fêmea', age: '1 ano', img: '/moon.png' },
                  { name: 'Spike', gender: 'macho', age: '2.5 anos', img: '/spike.png' },
                  { name: 'Coxinha', gender: 'macho', age: '3 anos', img: '/coxinha.png' },
                  { name: 'Bola de Neve', gender: 'fêmea', age: '4 anos', img: '/bola-neve.png' },
                  { name: 'Kiwi', gender: 'macho', age: '4 anos', img: '/kiwi.png' },
                  { name: 'Whitney', gender: 'fêmea', age: '2 anos', img: '/whitney.png' },
                  { name: 'Buggy', gender: 'macho', age: '7 meses', img: '/buggy.png' },
                  { name: 'Abanador', gender: 'macho', age: '3 anos', img: '/abanador.png' },
                ].map((pet, index) => (
                  <div key={index} className="pet-card">
                    <img src={pet.img} alt={pet.name} className="pet-image" />
                    <div className="pet-info">
                      <h3>{pet.name} ({pet.gender})</h3>
                      <p>{pet.age}</p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        );
      case 2:
        return (
          <div className="tab-content voluntarios">
            <h1>Voluntários</h1>
            <p>Conteúdo sobre voluntariado.</p>
          </div>
        );
      case 3:
        return (
          <div className="tab-content doacoes">
            <h1>Doações</h1>
            <p>Conteúdo sobre doações.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <nav className="tab-navigation">
        <ul>
          <li
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}
          >
            NOS CONHEÇA
          </li>
          <li
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            ADOTE COM AMOR
          </li>
          <li
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => setActiveTab(2)}
          >
            VOLUNTÁRIOS
          </li>
          <li
            className={activeTab === 3 ? 'active' : ''}
            onClick={() => setActiveTab(3)}
          >
            DOAÇÕES
          </li>
        </ul>
      </nav>
      <div className="content-area">{renderContent()}</div>
    </div>
  );
}

export default App;
