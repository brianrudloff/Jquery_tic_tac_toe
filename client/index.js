

$(document).ready(function(){

    for (let i = 0; i<3; i+=1) {
        const $row = $("<tr>", {id: "row" + i, class: "row"});
        $('.game-board').append($row);
        for (let j = 0; j<3; j+=1) {
            const $square = $("<td>", {id: "square" +i+j, class: "square"});
            $('#row' +i).append($square)
        }
    }

    $('.square').text("-")


    let counter = 1;

    $('.square').click(function(){
        if (counter % 2 !== 0 && ($(this).text() === "-")) {
            counter++
            $(this).text("Z")
        } else if ($(this).text() === "-") {
            counter++
            $(this).text("O")
        }
        winCheck();
    });


    function winCheck () {
        if ($('#square00').text() === "Z" && $('#square01').text() === "Z" && $('#square02').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square00').text() === "O" && $('#square01').text() === "O" && $('#square02').text() === "O" ) {
            alert('win')
            return;
        }
        if ($('#square10').text() === "Z" && $('#square11').text() === "Z" && $('#square12').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square10').text() === "O" && $('#square11').text() === "O" && $('#square12').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square20').text() === "Z" && $('#square21').text() === "Z" && $('#square22').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square20').text() === "O" && $('#square21').text() === "O" && $('#square22').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square00').text() === "Z" && $('#square10').text() === "Z" && $('#square20').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square00').text() === "O" && $('#square10').text() === "O" && $('#square20').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square01').text() === "Z" && $('#square11').text() === "Z" && $('#square21').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square01').text() === "O" && $('#square11').text() === "O" && $('#square21').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square02').text() === "Z" && $('#square12').text() === "Z" && $('#square22').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square02').text() === "O" && $('#square12').text() === "O" && $('#square22').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square00').text() === "Z" && $('#square11').text() === "Z" && $('#square22').text() === "Z" ) {
            alert('win');
            return;
        } 
        if ($('#square00').text() === "O" && $('#square11').text() === "O" && $('#square22').text() === "O" ) {
            alert('win');
            return;
        }
        if ($('#square02').text() === "Z" && $('#square11').text() === "Z" && $('#square20').text() === "Z" ) {
            alert('win')
            return;
        } 
        if ($('#square02').text() === "O" && $('#square11').text() === "O" && $('#square20').text() === "O" ) {
            alert('win')
            return;
        } 

        if (counter === 10){
            alert("Cat's Game")
        }
    }

});