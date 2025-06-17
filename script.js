// LOGIN – Só roda na index.html
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    if (
      usuarioSalvo &&
      email === usuarioSalvo.email &&
      senha === usuarioSalvo.senha
    ) {
      window.location.href = "galeria.html";
    } else {
      document.getElementById('erroMsg').innerText = "E-Mail oder Passwort ist falsch.";
    }
  });
}

// GALERIA – Só roda na galeria.html
const galeria = document.getElementById('galeria');

if (galeria && !localStorage.getItem('usuario')) {
  window.location.href = 'index.html';
}

if (galeria) {
  const fotos = [
    { imagem: 'imagens/foto1.jpg', legenda: 'Hochzeit' },
    { imagem: 'imagens/foto2.jpg', legenda: 'Gemeinsam für immer' },
    { imagem: 'imagens/foto3.jpg', legenda: 'Liebe' },
    { imagem: 'imagens/foto4.jpg', legenda: 'erste Paty' },
    { imagem: 'imagens/foto5.jpg', legenda: 'Venedig – erste gemeinsame Reise' },
    { imagem: 'imagens/foto6.jpg', legenda: 'schöne gemeinsame Momente ✨' },
    { imagem: 'imagens/foto7.jpg', legenda: 'Glücklicher Moment 😊' },
    { imagem: 'imagens/foto8.jpg', legenda: '1° Treffen' },
    { imagem: 'imagens/foto9.jpg', legenda: 'Gemeinsam sind wir glücklicher' },
    { imagem: 'imagens/foto10.jpg', legenda: 'unsere Flitterwochen ' }
  ];

  fotos.forEach(foto => {
    const div = document.createElement('div');
    div.className = 'foto';

    const img = document.createElement('img');
    img.src = foto.imagem;
    img.alt = foto.legenda;

    const p = document.createElement('p');
    p.className = 'legenda';
    p.innerText = foto.legenda;

    div.appendChild(img);
    div.appendChild(p);
    galeria.appendChild(div);
  });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
  });
}
