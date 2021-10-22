// Liste des musiques

let music_player = document.querySelector("#music_player");
let music_state = false;
let music_index = 0;

let music_list = [
    {
        name: "Musique 1",
        artist: "Artiste 1",
        image: "assets/img/music_1.jpg",
        path: "assets/music/music_1.mp3",
    },
    {
        name: "Musique 2",
        artist: "Artiste 2",
        image: "assets/img/music_2.jpg",
        path: "assets/music/music_2.mp3",
    },
    {
        name: "Musique 3",
        artist: "Artiste 3",
        image: "assets/img/music_3.jpg",
        path: "assets/music/music_3.mp3",
    },
];

function control_music() {
    if (music_state == false) {
        music_player.play();
        music_state = true;
        $("#icon_pause").show();
        $("#icon_play").hide();

    } else {
        music_player.pause();
        music_state = false;
        $("#icon_pause").hide();
        $("#icon_play").show();
    }
    console.log("Click");
}

function backward_music() {
    $("#btn_backward").click(function () {
        music_index--;
        if (music_index == -1) {
            music_index = 2;
        }
        // console.log(music_index)
        // console.log(music_list[music_index]["path"])
        change_music();
        music_state = false;
        control_music();
    });
}

function forward_music() {
    $("#btn_forward").click(function () {
        music_index++;
        if (music_index == 3) {
            music_index = 0;
        }
        change_music();
        music_state = false;
        control_music();
    });
}

function change_music() {
    $("#music_player").attr("src", music_list[music_index]["path"]);
    $("#music_name").text(music_list[music_index]["name"]);
    $("#music_artist").text(music_list[music_index]["artist"]);
    $("#music_player").attr("src", music_list[music_index]["path"]);
    $("#music_img").attr("src", music_list[music_index]["image"]);;
}

$(function () {
    console.log("Chargement Ok !");
    $("#btn_control").click(function () {
        control_music();
    });
    $("#icon_pause").hide();
    backward_music();
    forward_music();
});
