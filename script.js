

        let d1 = document.getElementById("d1");
        let d2 = document.getElementById("d2");
        let d3 = document.getElementById("d3");
        let d4 = document.getElementById("d4");
        let d5 = document.getElementById("d5");
        let d6 = document.getElementById("d6");
        let d7 = document.getElementById("d7");
        let d8 = document.getElementById("d8");
        let d9 = document.getElementById("d9");

        let chance = "X";

        function chance_change() {
            if (chance == "X") {
                chance = "O";
            }
            else {
                chance = "X";
            }
        };

        function check_win() {
            if (d1.innerText != "" && d2.innerText != "" &&  d1.innerText === d2.innerText && d1.innerText === d3.innerText) {
                alert("congratulation  " + d1.innerText + "  Win");
                location.reload();
            }

            if(d4.innerText != "" && d5.innerHTML != "" && d4.innerText === d5.innerText && d4.innerText === d6.innerText){
                alert("congratulation  " + d4.innerText + "  Win");
                location.reload();
            }

            if(d7.innerText != "" && d8.innerText!= "" && d7.innerText === d8.innerText && d7.innerText === d9.innerText){
                alert("congratulation  " + d7.innerText + "  Win");
                location.reload();
            }

            if(d1.innerText != "" && d4.innerText!= "" && d1.innerText === d4.innerText && d1.innerText === d7.innerText){
                alert("congratulation  " + d1.innerText + "  Win");
                location.reload();
            }

            if(d2.innerText != "" && d5.innerText!= "" && d2.innerText === d5.innerText && d2.innerText === d8.innerText){
                alert("congratulation  " + d2.innerText + "  Win");
                location.reload();
            }

            if(d3.innerText != "" && d6.innerText!= "" && d3.innerText === d6.innerText && d3.innerText === d9.innerText){
                alert("congratulation  " + d3.innerText + "  Win");
                location.reload();
            }

            if(d1.innerText != "" && d5.innerText!= "" && d1.innerText === d5.innerText && d1.innerText === d9.innerText){
                alert("congratulation  " + d1.innerText + "  Win");
                location.reload();
            }

            if(d3.innerText != "" && d5.innerText!= "" && d3.innerText === d5.innerText && d3.innerText === d7.innerText){
                alert("congratulation  " + d3.innerText + "  Win");
                location.reload();
            }
        }

        function reload(){
            if(d1.innerText != "" &&
               d2.innerText != "" &&
               d3.innerText != "" &&
               d4.innerText != "" &&
               d5.innerText != "" &&
               d6.innerText != "" &&
               d7.innerText != "" &&
               d8.innerText != "" &&
               d9.innerText != "" ){
                alert("OPPOS MATCH DRAW")
                location.reload();
            }
        }

        d1.onclick = function () {
            if (d1.innerText === "") {
                d1.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d2.onclick = function () {
            if (d2.innerText === "") {
                d2.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d3.onclick = function () {
            if (d3.innerText === "") {
                d3.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d4.onclick = function () {
            if (d4.innerText === "") {
                d4.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d5.onclick = function () {
            if (d5.innerText === "") {
                d5.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d6.onclick = function () {
            if (d6.innerText == "") {
                d6.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d7.onclick = function () {
            if (d7.innerText === "") {
                d7.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d8.onclick = function () {
            if (d8.innerText === "") {
                d8.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };

        d9.onclick = function () {
            if (d9.innerText === "") {
                d9.innerText = chance;
                check_win();
                chance_change();
                reload();
            }
        };



    