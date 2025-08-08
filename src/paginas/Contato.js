import React, { useState } from "react";
import "./Contato.css";

function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${formData.nome}! Seus dados foram enviados com sucesso.`);
        setFormData({ nome: "", email: "", mensagem: "" });
    };

    return (
        <div className="contato-container">
            <h1>Entre em Contato</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Enviar</button>
            </form>
            <p>Entre em contato pelo nosso e-mail: voceacademico@gmail.com</p>;

        </div>
      
    );
  }

  export default Contato;
  