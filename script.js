document.addEventListener("DOMContentLoaded", function () {
  const discordButton = document.getElementById("discord-copy");
  const copyMessage = document.getElementById("copy-message");

  discordButton.addEventListener("click", function () {
    const textToCopy = this.getAttribute("data-text");

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        // Mostrar a mensagem
        copyMessage.classList.add("show");

        // Esconder a mensagem após 2 segundos
        setTimeout(function () {
          copyMessage.classList.remove("show");
        }, 2000);
      })
      .catch(function (error) {
        console.error("Erro ao copiar texto: ", error);
      });
  });
});
