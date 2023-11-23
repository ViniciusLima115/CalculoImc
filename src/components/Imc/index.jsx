import { useState } from 'react';
import styles from './Imc.module.css';

const Imc = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [frase, setFrase] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');

  const calculaIMC = () => {
    const imc = calcularImc(peso, altura);



    if (imc < 15.99) {
      setFrase('Muito abaixo do peso');
    } else if (imc >= 16 && imc <= 18.5) {
      setFrase('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setFrase('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setFrase('Acima do peso');
    } else if (imc >= 30 && imc <= 34.9) {
      setFrase('Obesidade grau I');
    } else if (imc >= 35 && imc <= 39.9) {
      setFrase('Obesidade grau II');
    } else if (imc >= 40) {
      setFrase('Obesidade grau III');
    }else{
        setFrase('Valor de IMC inválido');
        setResultadoIMC('');
    }

    setResultadoIMC(`Seu IMC é: ${imc}`);
  };

  const calcularImc = (peso, altura) => {
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    if (isNaN(pesoNumero) || isNaN(alturaNumero) || alturaNumero === 0) {
      return NaN;
    }

    return (pesoNumero / (alturaNumero * alturaNumero)).toFixed(2);
  };

  return (
    <div className={styles.container}>
        <h4 className='explicacao'>Insira suas informacoes de peso(80,5) e altura (1,75)</h4>
      <form>
        <input
          type="number"
          className={styles.peso}
          placeholder="insira seu peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          className={styles.altura}
          placeholder="insira sua altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <p className={styles.fraseContainer}>{frase}</p>
        <p>{resultadoIMC}</p>
      </form>
      <button type="button" className={styles.button} onClick={calculaIMC}>
        Calcular
      </button>
    </div>
  );
};

export default Imc;
