
function Calculadora() {

  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.enter();
  };

  this.enter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };
    this.realizaConta = () => {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("conta invalida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    };

    this.cliqueBotoes = () => { 
      
      document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-dell")) {
        this.dellDisplay();
      }

      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }

      this.display.focus();
    });
  };


  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.dellDisplay = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
};


const calculadora = new Calculadora();
calculadora.inicia();

