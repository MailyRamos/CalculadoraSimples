import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora() {
    // Declaração das variáveis de estado
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operacao, setOperacao] = useState('+')
    const [resultado, setResultado] = useState(null)

    function limpar() {
        // Função limpar
        setNum1('')
        setNum2('')
        setOperacao('+')
        setResultado(null)
    }

    function calcular(e) {
        e.preventDefault()

        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Preencha os dois campos com números!')
            return
        }

        let res = 0
        setResultado(`Resultado: ${res}`) // Atualiza o estado para refletir na tela

        switch (operacao) {
            case '+':
                res = n1 + n2
                break
            case '-':
                res = n1 - n2
                break
            case '*':
                res = n1 * n2
                break
            case '/':
                if (n2 === 0) {
                    setResultado('Erro: Divisão por zero!')
                    return
                }
                res = n1 / n2
                break
            default:
                return
        }

        setResultado(`Resultado: ${res}`)
    }

    return (
        <div>
            <form onSubmit={calcular} className={styles.formContainer}>
                <h2>Calculadora</h2>

                <div className={styles.campo}>
                    <input 
                        type="number"
                        step="any"
                        placeholder="Primeiro número..."
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                    <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>

                <div className={styles.campo}>
                    <input 
                        type="number"
                        step="any"
                        placeholder="Segundo número..."
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                <div className={styles.btn}>
                    <input type="submit" value="Calcular" />
                    <input type="button" value="Limpar" onClick={limpar} />
                </div>

                <div className={styles.resultado}>
                    <p>{resultado}</p>
                </div>
            </form>
        </div>
    )
}


export default FormCalculadora
