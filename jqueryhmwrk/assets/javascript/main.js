$(function(){
    var options = [
        "Rock",
        "Paper",
        "Scissors",
        "Lizard",
        "Spock"
    ];
    var wins = 0;
    var draws = 0;
    var loses = 0;
    var icons = {
        "Rock" : "assets/images/rock.png",
        "Paper" : "assets/images/paper.png",
        "Scissors" : "assets/images/sissors.png",
        "Lizard" : "assets/images/lizard.png",
        "Spock" : "assets/images/spock.png"
    };

    // $( "img" ).click(function() {
    //     $( ".btn" ).toggle( "pulsate" );
    //   });

    function play(which){
        var end;
        var comp = options[Math.floor( Math.random() * options.length)];
        switch(comp){
        case "Rock":
            switch(which){
                case "Rock":
                    end = "Draw!";
                    break;
                case "Paper":
                    end = "Win!";
                    break;
                case "Scissors":
                    end = "Win!";
                    break;
                case "Lizard":
                    end = "Win!";
                    break;
                case "Spock":
                    end = "Lose!";
                    break;                    
            }
            break;
        case "Paper":
            switch(which){
                case "Rock":
                    end = "Win!";
                    break;
                case "Paper":
                    end = "Draw!";
                    break;
                case "Scissors":
                    end = "Lose!";
                    break;
                case "Lizard":
                    end = "Lose!";
                    break;
                case "Spock":
                    end = "Lose!";
                    break;                    
            }
            break;
        case "Scissors":
            switch(which){
                case "Rock":
                    end = "Lose!";
                    break;
                case "Paper":
                    end = "Win!";
                    break;
                case "Scissors":
                    end = "Draw!";
                    break;
                case "Lizard":
                    end = "Lose!";
                    break;
                case "Spock":
                    end = "Win!";
                    break;                    
            }
            break;
            case "Lizard":
            switch(which){
                case "Rock":
                    end = "Lose!";
                    break;
                case "Paper":
                    end = "Win!";
                    break;
                case "Scissors":
                    end = "Lose!";
                    break;
                case "Lizard":
                    end = "Draw!";
                    break;
                case "Spock":
                    end = "Win!";
                    break;                    
            }
            break;
            case "Spock":
            switch(which){
                case "Rock":
                    end = "Lose!";
                    break;
                case "Paper":
                    end = "Lose!";
                    break;
                case "Scissors":
                    end = "Win!";
                    break;
                case "Lizard":
                    end = "Win!";
                    break;
                case "Spock":
                    end = "Draw!";
                    break;                    
            }
            break;                        
        }
        if(end == "Lose!"){
            $('#outcome').css({
                "color" : "#ff281d"
            });
            ++loses
            $("#loses").text(loses);
        }
        else if(end == "Draw!"){
            $('#outcome').css({
                "color" : "#FFF"
            });
            ++draws;
            $("#draws").text(draws);
        }
        else{
            $('#outcome').css({
                "color" : "#0381ff"
            });
            ++wins;
            $("#wins").text(wins)
        }
        $("#outcome").text(end);
        $("#stat").html(which + " VS " + comp);
    }

    function select(){
        var which = this.getAttribute("id");
        which = which.replace("#", "");
        $("#table td").off("click");
        play(which);
        $("#table td").click(select);
    }
    $("#table td").click(select);
});

