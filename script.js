let solutions = {
  q1: ["Paris"],
  q2: ["Rabat"],
  q3: ["Washinton"],
  q4: ["Maroc", "Égypte"],
  q5: ["CSS", "JavaScript"],
};

function verifier() {
  const totale = Object.keys(solutions).length;
  let score = 0;
  document.querySelectorAll("label").forEach((l) => (l.style.color = "black"));
  const questions = document.querySelectorAll("fieldset");

  
  for(let i=0;i<totale;i++){
          if(!questions[i].querySelector('.solution')){
          let p=document.createElement("p");
          p.classList.add("solution");
          const table = ["q1", "q2", "q3", "q4", "q5"];
          p.textContent = "solution est : " + solutions[table[i]];
          p.style.display = "flex";
          p.style.justifyContent = "center";
          questions[i].appendChild(p);
          }
  }

  for (let q in solutions) {
    let correctAnsser=solutions[q];
    const selected = Array.from(
      document.querySelectorAll(`input[name="${q}"]:checked`)
    );

    if(selected.length===0) continue;

    let allGood=true;

    selected.forEach(s=>{
        const labelselected = document.querySelector(
          `label[for="${s.id}"]`
        );
        if(correctAnsser.includes(s.value)){
               labelselected.style.color = "green";
        }else{
               labelselected.style.color = "red";
        }
    })

    const selectedValue=selected.map(s=>s.value);
    if(selectedValue.length===correctAnsser.length && selectedValue.every(v=> correctAnsser.includes(v))){
        score++;
    }
  }
  let scoreResult = document.querySelector(".score");
  scoreResult.textContent = `score : ${score} / ${totale}`;
  scoreResult.style.display = "flex";
}
