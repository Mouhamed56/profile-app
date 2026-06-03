import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Badge } from 'react-bootstrap';

class App extends Component {

  // ===== ÉTAT =====
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "Mouhamed Diallo",
        bio: "Étudiant passionné en développement web, j'aime créer des applications modernes avec React et Node.js. Toujours en quête d'apprentissage et de nouveaux défis technologiques.",
        imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "Développeur Web Full Stack"
      },
      montre: false,
      secondes: 0
    };
  }

  // ===== CYCLE DE VIE : componentDidMount =====
  componentDidMount() {
    // setInterval : incrémente les secondes chaque seconde
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        secondes: prevState.secondes + 1
      }));
    }, 1000);
  }

  // ===== CYCLE DE VIE : componentWillUnmount =====
  componentWillUnmount() {
    // Nettoyage de l'intervalle quand le composant est démonté
    clearInterval(this.interval);
  }

  // ===== MÉTHODE : basculer l'état montre =====
  toggleMontre = () => {
    this.setState(prevState => ({
      montre: !prevState.montre
    }));
  }

  // ===== RENDER =====
  render() {
    const { personne, montre, secondes } = this.state;

    return (
      <>
        <div className="App" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>

          {/* ===== NAVBAR ===== */}
          <nav style={{
            backgroundColor: '#1a1a2e',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            <span style={{ color: '#e94560', fontWeight: 'bold', fontSize: '1.4rem' }}>
              👤 ProfilApp
            </span>
            {/* Compteur de temps dans la navbar */}
            <Badge bg="secondary" style={{ fontSize: '0.9rem', padding: '8px 14px' }}>
              ⏱️ Monté depuis : {secondes}s
            </Badge>
          </nav>

          {/* ===== CONTENU PRINCIPAL ===== */}
          <Container className="py-5 text-center">

            <h1 style={{ fontWeight: 'bold', color: '#1a1a2e', marginBottom: '10px' }}>
              Carte de Profil
            </h1>
            <p className="text-muted mb-4">
              Cliquez sur le bouton pour afficher ou masquer le profil
            </p>

            {/* ===== COMPTEUR TEMPS ===== */}
            <div style={{
              display: 'inline-block',
              backgroundColor: '#1a1a2e',
              color: '#fff',
              borderRadius: '50px',
              padding: '10px 25px',
              marginBottom: '30px',
              fontSize: '1rem'
            }}>
              ⏱️ Temps écoulé depuis le montage : <strong>{secondes} seconde{secondes > 1 ? 's' : ''}</strong>
            </div>

            <br />

            {/* ===== BOUTON TOGGLE ===== */}
            <Button
              variant={montre ? "danger" : "primary"}
              size="lg"
              onClick={this.toggleMontre}
              style={{
                borderRadius: '50px',
                padding: '12px 35px',
                fontWeight: 'bold',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              {montre ? "🙈 Masquer le Profil" : "👁️ Afficher le Profil"}
            </Button>

            {/* ===== CARTE PROFIL (affichée si montre === true) ===== */}
            {montre && (
              <Card style={{
                maxWidth: '420px',
                margin: '0 auto',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                border: 'none',
                overflow: 'hidden',
                animation: 'fadeIn 0.4s ease'
              }}>

                {/* Photo */}
                <div style={{
                  backgroundColor: '#1a1a2e',
                  padding: '30px 0 0 0',
                  textAlign: 'center'
                }}>
                  <img
                    src={personne.imgSrc}
                    alt={personne.fullName}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      border: '4px solid #e94560',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <Card.Body style={{ backgroundColor: '#fff', padding: '25px' }}>

                  {/* Nom */}
                  <Card.Title style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1a1a2e',
                    marginBottom: '5px'
                  }}>
                    {personne.fullName}
                  </Card.Title>

                  {/* Profession */}
                  <Badge bg="danger" style={{
                    fontSize: '0.85rem',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    marginBottom: '15px'
                  }}>
                    💼 {personne.profession}
                  </Badge>

                  {/* Séparateur */}
                  <hr style={{ borderColor: '#f0f2f5' }} />

                  {/* Bio */}
                  <Card.Text style={{
                    color: '#555',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    textAlign: 'left'
                  }}>
                    📝 {personne.bio}
                  </Card.Text>

                </Card.Body>
              </Card>
            )}

          </Container>

        </div>

        {/* Animation CSS */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </>
    );
  }
}

export default App;
