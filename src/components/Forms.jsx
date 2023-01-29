import { useState, useEffect, useRef } from "react";
import LogoUFU from "./Logo";
const Forms = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");
  const [entrada_ufu, setEntradaUFU] = useState("");
  const [tempo_curso, setTempoCurso] = useState("");
  const [saida_ufu, setSaidaUFU] = useState("");
  const [trabalha_area, setTrabalhaArea] = useState("");
  const [qtd_Empregos, setQtdEmpregos] = useState("");
  const [bolsas, setBolsas] = useState("");
  const [exp_area, setExpArea] = useState("");

  const onOptionChange = (e) => {
    setTrabalhaArea(e.target.value);
  };

  return (
    <>
      <LogoUFU />
      <p> Formulário do Egresso UFU </p>
      <div>
        <form className="formEgresso">
          <label>
            Nome:
            <input
              type="text"
              required
              name="name"
              value={nome}
              onChange={() => setNome(event.target.value)}
            />
          </label>

          <label>
            CPF:
            <input
              type="text"
              required
              name="cpf"
              value={cpf}
              onChange={() => setCPF(event.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              required
              name="email"
              value={email}
              onChange={() => setEmail(event.target.value)}
            />
          </label>

          <label>
            Data de Nascimento:
            <input
              type="text"
              required
              name="name"
              value={data_nascimento}
              onChange={() => setDataNascimento(event.target.value)}
            />
          </label>

          <label>
            Entrada na UFU:
            <input
              type="text"
              required
              name="name"
              value={entrada_ufu}
              onChange={() => setEntradaUFU(event.target.value)}
            />
          </label>

          <label>
            Tempo total levado para conclusão do curso:
            <input
              type="text"
              required
              name="tempo_curso"
              value={tempo_curso}
              onChange={() => setTempoCurso(event.target.value)}
            />
          </label>

          <label>
            Data de saída da UFU:
            <input
              type="text"
              required
              name="saida_ufu"
              value={saida_ufu}
              onChange={() => setSaidaUFU(event.target.value)}
            />
          </label>

          <label>
            Quantidade de empregos na área:
            <input
              type="text"
              required
              name="qtd_Empregos"
              value={qtd_Empregos}
              onChange={() => setQtdEmpregos(event.target.value)}
            />
          </label>

          <label style={{ margin: "8px 0px" }}>
            Trabalha na área atualmente:
            <input
              type="radio"
              value="true"
              checked={trabalha_area === "true"}
              name="sim"
              onClick={onOptionChange}
            />{" "}
            Sim
            <input
              type="radio"
              value="false"
              checked={trabalha_area === "false"}
              name="nao"
              onClick={onOptionChange}
            />{" "}
            Não
          </label>

          <label style={{ margin: "8px 0px" }}>Bolsas durante o curso:</label>
          <textarea
            id="bolsas_egresso"
            name="bolsas_egresso"
            rows="4"
            style={{ margin: "8px 0px" }}
            cols="50"
            value={bolsas}
            onChange={() => setBolsas(event.target.value)}
          />

          <label style={{ margin: "8px 0px" }}>
            Experiências profissionais na área:
          </label>
          <textarea
            id="exp_area"
            name="exp_area"
            rows="4"
            style={{ margin: "8px 0px" }}
            cols="50"
            value={exp_area}
            onChange={() => setExpArea(event.target.value)}
          />
        </form>
        <input className="button" type="submit" value="Enviar" />
      </div>
    </>
  );
};

export default Forms;
