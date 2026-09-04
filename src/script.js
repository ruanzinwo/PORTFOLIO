// ==============================
// ANO ATUAL
// ==============================

const anoAtual = document.getElementById("anoAtual");

anoAtual.textContent = new Date().getFullYear();


// ==============================
// PROJETOS
// ==============================

const projectButtons = document.querySelectorAll("[data-project]");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectName = button.dataset.project;

    alert(
      `O link do projeto "${projectName}" ainda não foi configurado.`
    );
  });
});


// ==============================
// FORMULÁRIO DE CONTATO
// ==============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("inputNome").value;
  const email = document.getElementById("inputEmail").value;
  const mensagem = document.getElementById("inputMsg").value;

  alert(
    `Obrigado, ${nome}! Sua mensagem foi recebida.`
  );

  console.log("Nome:", nome);
  console.log("E-mail:", email);
  console.log("Mensagem:", mensagem);

  contactForm.reset();
});


// ==============================
// REDES SOCIAIS
// ==============================

const socialButtons = document.querySelectorAll("[data-social]");

socialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const social = button.dataset.social;

    alert(
      `O link do ${social} ainda não foi configurado.`
    );
  });
});
