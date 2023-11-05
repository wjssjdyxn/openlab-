fetch("https://puzzle.qieee.top/api/rank")
  .then((reponse) => reponse.json())
  .then((data) => {
    for (i = 0; i < 20; i++) {
      if (data[i].score[0].score == 10) {
        data[i].score[0].mark = 1;
        break;
      }
    }
    for (i = 0; i < 20; i++) {
      if (data[i].score[1].score == 10) {
        data[i].score[1].mark = 1;
        break;
      }
    }
    for (i = 0; i < 20; i++) {
      if (data[i].score[2].score == 10) {
        data[i].score[2].mark = 1;
        break;
      }
    }
    for (i = 0; i < 20; i++) {
      if (data[i].score[3].score == 10) {
        data[i].score[3].mark = 1;
        break;
      }
    }
    data.sort((a, b) => {
      var suma =
        a.score[0].score +
        a.score[1].score +
        a.score[2].score +
        a.score[3].score;
      var sumb =
        b.score[0].score +
        b.score[1].score +
        b.score[2].score +
        b.score[3].score;
      if (suma > sumb) {
        return -1;
      } else if (suma == sumb) {
        return 0;
      } else {
        return 1;
      }
    });
    for (i = 0; i < 20; i++) {
      var namep = document.createElement("p");
      var name2 = document.querySelector(".name1");
      name2.parentNode.appendChild(namep);
      namep.textContent = data[i].name;

      var idp = document.createElement("p");
      var id2 = document.querySelector(".id");
      id2.parentNode.appendChild(idp);
      idp.textContent = data[i].id;

      var score0p = document.createElement("p");
      var score0 = document.querySelector(".s0");
      score0.parentNode.appendChild(score0p);
      score0p.textContent = data[i].score[0].score;
      if (score0p.textContent == 10) {
        if (data[i].score[0].mark == 1) {
          score0p.setAttribute("style", "color:darkgreen");
        } else {
          score0p.setAttribute("style", "color: rgb(23, 185, 12)");
        }
      } else {
        score0p.setAttribute("style", "color:red");
      }

      var score1p = document.createElement("p");
      var score1 = document.querySelector(".s1");
      score1.parentNode.appendChild(score1p);
      score1p.textContent = data[i].score[1].score;
      if (score1p.textContent == 10) {
        if (data[i].score[1].mark == 1) {
          score1p.setAttribute("style", "color:darkgreen");
        } else {
          score1p.setAttribute("style", "color: rgb(23, 185, 12)");
        }
      } else {
        score1p.setAttribute("style", "color:red");
      }
      var score2p = document.createElement("p");
      var score2 = document.querySelector(".s2");
      score2.parentNode.appendChild(score2p);
      score2p.textContent = data[i].score[2].score;
      if (score2p.textContent == 10) {
        if (data[i].score[2].mark == 1) {
          score2p.setAttribute("style", "color:darkgreen");
        } else {
          score2p.setAttribute("style", "color: rgb(23, 185, 12)");
        }
      } else {
        score2p.setAttribute("style", "color:red");
      }

      var score3p = document.createElement("p");
      var score3 = document.querySelector(".s3");
      score3.parentNode.appendChild(score3p);
      score3p.textContent = data[i].score[3].score;
      if (score3p.textContent == 10) {
        if (data[i].score[3].mark == 1) {
          score3p.setAttribute("style", "color:darkgreen");
        } else {
          score3p.setAttribute("style", "color: rgb(23, 185, 12)");
        }
      } else {
        score3p.setAttribute("style", "color:red");
      }

      var totalp = document.createElement("p");
      var total1 = document.querySelector(".total");
      total1.parentNode.appendChild(totalp);
      var totalvalue =
        Number(score0p.textContent) +
        Number(score1p.textContent) +
        Number(score2p.textContent) +
        Number(score3p.textContent);
      totalp.textContent = totalvalue;
    }
  });
