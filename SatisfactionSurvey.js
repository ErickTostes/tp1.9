import React, { useState } from 'react';

function SatisfactionSurvey() {
  const [satisfactionLevel, setSatisfactionLevel] = useState('');

  const handleChange = (event) => {
    setSatisfactionLevel(event.target.value);
  };

  return (
    <div className="survey-container">
      <h2>Pesquisa de Satisfação do Cliente</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="Muito satisfeito"
              checked={satisfactionLevel === "Muito satisfeito"}
              onChange={handleChange}
            />
            Muito satisfeito
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Satisfeito"
              checked={satisfactionLevel === "Satisfeito"}
              onChange={handleChange}
            />
            Satisfeito
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Neutro"
              checked={satisfactionLevel === "Neutro"}
              onChange={handleChange}
            />
            Neutro
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Insatisfeito"
              checked={satisfactionLevel === "Insatisfeito"}
              onChange={handleChange}
            />
            Insatisfeito
          </label>
        </div>
      </form>

      {satisfactionLevel && (
        <div className="selected-response">
          <h3>Você selecionou: {satisfactionLevel}</h3>
        </div>
      )}
    </div>
  );
}

export default SatisfactionSurvey;
