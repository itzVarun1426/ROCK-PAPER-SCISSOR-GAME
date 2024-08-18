let user = 0
let comp = 0

const btn = document.querySelectorAll(".btn");
const result_text = document.querySelector(".result_text");
const result_text2 = document.querySelector(".result_text2");
const user_score = document.querySelector(".user-score");
const comp_score = document.querySelector(".comp-score");
const userimg = document.querySelector(".userimg");
const compimg = document.querySelector(".compimg");

const gencompchc = () => {
    const option = ["Rock", "Paper", "Scissor"]
    return option[Math.floor(Math.random() * 3)];
}
const win_game = (userchc, compchc) => {
    if (userchc === compchc) {
        result_text2.innerHTML = "The game is <b>TIE</b>";
    }
    else if (userchc === "Rock") {
        if (compchc === "Paper") {
            result_text2.innerHTML = "Well tried! <b>Computer</b> won.....";
            comp += 1;
        }
        else {
            result_text2.innerHTML = "Congratulations! <b>You</b> won.....";
            user += 1;
        }
    }
    else if (userchc === "Paper") {
        if (compchc === "Scissor") {
            result_text2.innerHTML = "Well tried! <b>Computer</b> won.....";
            comp += 1;
        }
        else {
            result_text2.innerHTML = "Congratulations! <b>You</b> won.....";
            user += 1;
        }
    }
    else {
        if (compchc === "Rock") {
            result_text2.innerHTML = "Well tried! <b>Computer</b> won.....";
            comp += 1;
        }
        else {
            result_text2.innerHTML = "Congratulations! <b>You</b> won.....";
            user += 1;
        }
    }

}
const user_change_pic = (uchoice) => {
    if (uchoice === "Rock") {
        userimg.src = "images/rock.png";
    }
    else if (uchoice === "Paper") {
        userimg.src = "images/paper.png";
    }
    else {
        userimg.src = "images/scissors.png";
    }

}
const comp_change_pic = (cchoice) => {
    if (cchoice === "Rock") {
        compimg.src = "images/rock.png";
    }
    else if (cchoice === "Paper") {
        compimg.src = "images/paper.png";
    }
    else {
        compimg.src = "images/scissors.png";
    }

}
btn.forEach((btn_click) => {
    btn_click.addEventListener("click", () => {
        let userchoice = btn_click.getAttribute("id")
        let compchoice = gencompchc();
        // result_text.innerText = "winner"
        result_text.innerHTML = `User choose <i>${userchoice}</i> and  Computer choose <i>${compchoice}</i>`;

        win_game(userchoice, compchoice);
        user_change_pic(userchoice);
        comp_change_pic(compchoice);
        user_score.innerHTML = user;
        comp_score.innerHTML = comp;
    })

})