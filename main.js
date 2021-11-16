const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxMusic = $(".box__content-music-wrapper");
const listNav = $$(".header__navbar-list-item");
const listBoxContent = $$(".box__content");
const audio = $("#audio");
const imgCurrentSong = $(".footer-left-img");
const textCurrentSong = $(".footer-left-title-text");
const singerCurrentSong = $(".footer-left-title-desc");
const toggleBtn = $(".footer-middle-top-music-icon-play-icons");
const playButton = $(".play-btn");
const pauseButton = $(".pause-btn");
const progress = $(".footer-middle-bot-progress");
const progressBar = $(".footer-middle-bot-progress-bar");
const progressCircle = $(".footer-middle-bot-progress-circle");
const timeSongCurrent = $(".footer-middle-bot-first");
const timeSongDuration = $(".footer-middle-bot-duration");
const cd = $(".footer-left-img");
const nextSongBtn = $(".next-btn");
const prevSongBtn = $(".prev-btn");
const randomBtn = $(".random-btn");
const loopBtn = $(".loop-btn");
const upVolumeBtn = $(".up-volume-btn");
const muteVolumeBtn = $(".mute-btn");
const wrapperVolumeBtn = $(".footer-right-volumes-hide");
const inputVolumeBtn = $(".footer-right-volumes-volume");
const sideBar = $(".sidebar");
const listIcon = $(".list");
const closeBtn = $(".close-btn");
const header = $(".header");

console.log(header);

let isReadyToDrag = false;
let isPlaying = false;
let isRandom = false;
let isLoop = false;
let isUpVolume = false;
let isMuteVolume = false;

const songs = [
  {
    name: "Một thưở thanh bình",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Mot-Thuo-Thanh-Binh-TaynguyenSound.mp3",
  },
  {
    name: "Anh biết",
    singer: "Xám",
    image: "./assets/img/xam.jfif",
    music: "./assets/songs/Anh-Biet-D-Blue-Xam.mp3",
  },
  {
    name: "ba kể con nghe",
    singer: "Team Tùng Ascoustic",
    image: "./assets/img/teamtung.png",
    music:
      "./assets/songs/Ba-Ke-Con-Nghe-Acoustic-Cover-Bap-Benh-Team-Tung-Acoustic-Duong-Tran-Nghia-Tit-Nguyen.mp3",
  },
  {
    name: "Bài ka tuổi trẻ",
    singer: "JGKid",
    image: "./assets/img/jdkid.jpg",
    music:
      "./assets/songs/Bai-Ka-Tuoi-Tre-JGKiD-Emcee-L-KraziNoyze-Linh-Cao.mp3",
  },
  {
    name: "Bạn bè",
    singer: "JGKid",
    image: "./assets/img/jdkid.jpg",
    music: "./assets/songs/Ban-Be-JGKiD.mp3",
  },
  {
    name: "bây giờ tháng mấy",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Bay-Gio-Thang-May-TaynguyenSound.mp3",
  },
  {
    name: "cho những gì ta yêu",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Cho-Nhung-Gi-Ta-Yeu-TaynguyenSound.mp3",
  },
  {
    name: "chuyện đời",
    singer: "JGKid",
    image: "./assets/img/jdkid.jpg",
    music: "./assets/songs/Chuyen-Doi-JGKiD.mp3",
  },
  {
    name: "chuyện trò",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Chuyen-Tro-TaynguyenSound.mp3",
  },
  {
    name: "chuyện về bâu trời xanh",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Chuyen-Ve-Bau-Troi-Xanh-TaynguyenSound.mp3",
  },
  {
    name: "đã bao lâu",
    singer: "Dick",
    image: "./assets/img/BCTM.jpg",
    music: "./assets/songs/Da-Bao-Lau-Cukak-Remix-Dick-Ngan-CUKAK.mp3",
  },
  {
    name: "đi qua hoa cúc",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Di-Qua-Hoa-Cuc-TaynguyenSound.mp3",
  },
  {
    name: "em tôi đôi mươi",
    singer: "JGKid",
    image: "./assets/img/jdkid.jpg",
    music: "./assets/songs/Em-Toi-Doi-Muoi-JGKiD.mp3",
  },
  {
    name: "ghé qua",
    singer: "Dick, Tofu",
    image: "./assets/img/BCTM.jpg",
    music: "./assets/songs/Ghe-Qua-Dick-x-Tofu-x-PC.mp3",
  },
  {
    name: "hoa thiên lý",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Hoa-Thien-Ly-TaynguyenSound.mp3",
  },
  {
    name: "hương rừng",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Huong-Rung-TaynguyenSound.mp3",
  },
  {
    name: "Lãng du",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Lang-Du-TaynguyenSound.mp3",
  },
  {
    name: "Love me like you do",
    singer: "Tiffany Alvord Chester",
    image: "./assets/img/usuk.jpg",
    music: "./assets/songs/Love-Me-Like-You-Do-Tiffany-Alvord-Chester-See.mp3",
  },
  {
    name: "Mắt biếc",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Mat-Biec-TaynguyenSound.mp3",
  },
  {
    name: "những ô cửa màu",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Nhung-O-Cua-Mau-TaynguyenSound.mp3",
  },
  {
    name: "qua những tiếng ve",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Qua-Nhung-Tieng-Ve-TaynguyenSound.mp3",
  },
  {
    name: "Sỏi đá",
    singer: "Dick, Tuyết, Anh Khmer",
    image: "./assets/img/BCTM.jpg",
    music: "./assets/songs/Soi-da-Dick-Tuyet-Anh-Khmer.mp3",
  },
  {
    name: "sống cho hết đời thanh xuân",
    singer: "Dick, Tuyết, Xám",
    image: "./assets/img/BCTM.jpg",
    music: "./assets/songs/Song-cho-het-doi-thanh-xuan-Dick-Tuyet-Xam.mp3",
  },
  {
    name: "thôi trễ rồi chắc anh phải về đây",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music:
      "./assets/songs/Thoi-Tre-Roi-Chac-Anh-Phai-Ve-Day-TaynguyenSound.mp3",
  },
  {
    name: "thu quen",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Thu-Quen-TaynguyenSound.mp3",
  },
  {
    name: "tôi thấy hoa vàng trên cỏ xanh",
    singer: "Ái Phương",
    image: "./assets/img/nhacviet.jfif",
    music: "./assets/songs/Toi-Thay-Hoa-Vang-Tren-Co-Xanh-Ai-Phuong.mp3",
  },
  {
    name: "Tuý",
    singer: "Tây nguyên sound",
    image: "./assets/img/taynguyen.jpg",
    music: "./assets/songs/Tuy-TaynguyenSound.mp3",
  },
];
let index = 0;
let currentSong = songs[index];
const songsLength = songs.length;

// start
function start() {
  isLoop = localStorage.getItem("isLoop");
  isRandom = localStorage.getItem("isRandom");

  //render bai hat
  renderMusic();

  //thay doi slider change
  changeSlide();

  // load currentSong vao UI
  loadCurrentSong();

  //play playAudio
  playAudio();

  loopBtn.classList.toggle("active3", JSON.parse(isLoop));
  randomBtn.classList.toggle("active3", JSON.parse(isRandom));
  inputVolumeBtn.setAttribute(
    "value",
    JSON.parse(localStorage.getItem("currentVolume"))
  );
  audio.volume = JSON.parse(localStorage.getItem("currentVolume")) / 100;
}

start();

// function render
function renderMusic() {
  const html = songs.map((music, index1) => {
    return `
    <div id=${index1} class="box__content-music-wrapper-list ${
      index1 == index ? "box__content-music-wrapper-list-active" : ""
    }">
    <div class="box__content-music-wrapper-list-title">
      <img src="${music.image}" alt="" />
      <div class="box__content-music-wrapper-list-title-wrapper">
        <h3
          class="
            box__content-music-wrapper-list-title-wrapper-text
          "
        >
          ${music.name}
        </h3>
        <span
          class="
            box__content-music-wrapper-list-title-wrapper-desc
          "
        >
          ${music.singer}
        </span>
      </div>
    </div>
    <div class="box__content-music-wrapper-list-duration" >
      <span></span>
      <audio
                id="audio2"
                src= "${music.music}"
              ></audio>
    </div>
    <div class="box__content-music-wrapper-list-icons c-0">
      <i
        class="
          box__content-music-wrapper-list-icons-icon
          ti-microphone-alt
        "
      ></i>
      <i
        class="
          box__content-music-wrapper-list-icons-icon
          ti-heart
        "
      ></i>
      <i
        class="
          box__content-music-wrapper-list-icons-icon
          ti-more-alt options
        "
      ></i>
    </div>
  </div>
    `;
  });
  return (boxMusic.innerHTML = html.join(""));
}

//function change slide
function changeSlide() {
  listNav.forEach((item, index) => {
    const eachListBoxContent = listBoxContent[index];
    item.addEventListener("click", function (e) {
      $(".header__navbar-list-item-active").classList.remove(
        "header__navbar-list-item-active"
      );
      $(".box__content-active").classList.remove("box__content-active");

      eachListBoxContent.classList.add("box__content-active");
      this.classList.add("header__navbar-list-item-active");
    });
  });
}

// xu li cd quay
const cdAnimate = cd.animate([{ transform: "rotate(360deg)" }], {
  duration: 10000,
  iterations: Infinity,
});
cdAnimate.pause();

// play / pause / seek audio

//xử lý play/pause audio
function playAudio() {
  toggleBtn.onclick = function () {
    if (isPlaying) {
      audio.pause();
      cdAnimate.pause();
    } else {
      audio.play();
      cdAnimate.play();
    }
  };
  // khi nhạc bấm chạy
  audio.onplay = function () {
    isPlaying = true;
    playButton.classList.remove("active2");
    pauseButton.classList.add("active2");
  };

  // khi nhạc bị bấm dừng
  audio.onpause = function () {
    isPlaying = false;
    pauseButton.classList.remove("active2");
    playButton.classList.add("active2");
  };
  //progress circle chạy theo nhạc
  audio.ontimeupdate = function () {
    const currentPosition = (audio.currentTime / audio.duration) * 100;
    progressCircle.style.left = currentPosition + "%";
    progressBar.style.width = currentPosition + "%";
    let totalMin = Math.floor(audio.currentTime / 60);
    let totalSec = Math.floor(audio.currentTime % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    timeSongCurrent.innerText = `${totalMin}:${totalSec}`;
  };
  // xử lý tua audio
  //left này là vị trí của progress bar so với màn hình trái
  const left = progress.getBoundingClientRect().left;
  const min = left;
  const width = progress.getBoundingClientRect().width;
  const height = progress.getBoundingClientRect().top;
  //max là độ rộng tối đa của cái progress
  const max = progress.getBoundingClientRect().width + left;

  progress.addEventListener("mousedown", function (e) {
    isReadyToDrag = true;
    //clientX là vị trí của con trỏ chuột so với bên trái màn hình
    const clientX = e.clientX;
    const percent = ((clientX - left) / width) * 100;
    const seekTime = (audio.duration / 100) * percent;
    progressBar.style.width = percent + "%";
    progressCircle.style.left = percent + "%";
    audio.currentTime = seekTime;
    let totalMin = Math.floor(seekTime / 60);
    let totalSec = Math.floor(seekTime % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    timeSongCurrent.innerText = `${totalMin}:${totalSec}`;
  });

  document.addEventListener("mousemove", function (e) {
    //clientX là vị trí của con trỏ chuột so với bên trái màn hình
    const clientX = e.clientX;
    if (isReadyToDrag && clientX >= min && clientX <= max) {
      const percent = ((clientX - left) / width) * 100;
      const seekTime = (audio.duration / 100) * percent;
      progress.classList.add("dragged");
      progressBar.style.width = percent + "%";
      progressCircle.style.left = percent + "%";
      audio.currentTime = seekTime;
      let totalMin = Math.floor(seekTime / 60);
      let totalSec = Math.floor(seekTime % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      timeSongCurrent.innerText = `${totalMin}:${totalSec}`;
      audio.pause();
    }
  });

  progress.addEventListener("mouseup", function (e) {
    isReadyToDrag = false;
    progress.classList.remove("dragged");
    audio.play();
  });

  // xuất ra thời gian đang nghe và thời gian cuối bài hát
  audio.addEventListener("loadeddata", () => {
    let mainAdDuration = audio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    timeSongDuration.innerText = `${totalMin}:${totalSec}`;
  });
}
// next songs
function nextSong() {
  currentSong = songs[++index];
  if (index >= songs.length) {
    index = 0;
    currentSong = songs[index];
    loadFirstSong(songs[index]);
  }
  loadCurrentSong(currentSong);
  renderMusic();
  scrollToActiveSong();
}

nextSongBtn.onclick = function () {
  if (isRandom) {
    playRandomSongs();
  } else {
    nextSong();
  }
  cdAnimate.play();
  audio.play();
};

//prev songs

function prevSong() {
  currentSong = songs[--index];
  console.log(currentSong);
  if (index <= 0) {
    index = songs.length - 1;
    currentSong = songs[index];
    loadFirstSong(songs[index]);
  }
  loadCurrentSong(currentSong);
  renderMusic();
  scrollToActiveSong();
}

prevSongBtn.onclick = function () {
  if (isRandom) {
    playRandomSongs();
  } else {
    prevSong();
  }
  cdAnimate.play();
  audio.play();
};

//load bài nhạc hiện tại
function loadCurrentSong() {
  audio.setAttribute("src", currentSong.music);
  imgCurrentSong.setAttribute("src", currentSong.image);
  textCurrentSong.textContent = currentSong.name;
  singerCurrentSong.textContent = currentSong.singer;
}

// load bai nhac dau tien
function loadFirstSong() {
  audio.setAttribute("src", songs[0].music);
  imgCurrentSong.setAttribute("src", songs[0].image);
  textCurrentSong.textContent = songs[0].name;
  singerCurrentSong.textContent = songs[0].singer;
}

// load bai nhac random
function loadRandomSong() {
  audio.setAttribute("src", songs[index].music);
  imgCurrentSong.setAttribute("src", songs[index].image);
  textCurrentSong.textContent = songs[index].name;
  singerCurrentSong.textContent = songs[index].singer;
}

// random songs

randomBtn.onclick = function () {
  isRandom = !isRandom;
  localStorage.setItem("isRandom", isRandom);
  randomBtn.classList.toggle("active3", isRandom);
};

function playRandomSongs() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songsLength);
  } while (newIndex === index);
  index = newIndex;
  loadRandomSong(index);
  renderMusic();
  scrollToActiveSong();
}

// loop song and when song finish next song
loopBtn.onclick = function () {
  isLoop = !isLoop;
  localStorage.setItem("isLoop", isLoop);
  loopBtn.classList.toggle("active3", isLoop);
};

audio.onended = function () {
  if (loopBtn.classList.contains("active3")) {
    audio.play();
  } else {
    nextSongBtn.click();
  }
};

// scroll toi bai hat dang active
function scrollToActiveSong() {
  setTimeout(() => {
    $(".box__content-music-wrapper-list-active").scrollIntoView({
      behavior: "smooth",
    });
  }, 200);
}

//click bai hat trong list va phat bai nhac do

boxMusic.onclick = function (e) {
  const songNode = e.target.closest(
    ".box__content-music-wrapper-list:not(.box__content-music-wrapper-list-active)"
  );
  if (songNode || e.target.closest(".options")) {
    if (songNode) {
      index = songNode.getAttribute("id");
      loadRandomSong(Number(index));
      renderMusic();
      audio.play();
    }
    if (e.target.closest(".options")) {
      // console.log("hello");
    }
  }
};

// click vao volume thi mute va dieu chinh am luong volume
wrapperVolumeBtn.onclick = function () {
  if (audio.muted) {
    audio.muted = false;
    upVolumeBtn.classList.add("active2");
    muteVolumeBtn.classList.remove("active2");
    inputVolumeBtn.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("currentVolume"))
    );
    audio.volume = JSON.parse(localStorage.getItem("currentVolume")) / 100;
  } else {
    audio.muted = true;
    inputVolumeBtn.setAttribute("value", 0);
    muteVolumeBtn.classList.add("active2");
    upVolumeBtn.classList.remove("active2");
  }
};

inputVolumeBtn.addEventListener("change", function (e) {
  let currentVolume = e.target.value;
  audio.volume = currentVolume / 100;
  localStorage.setItem("currentVolume", currentVolume);
  if (currentVolume == 0) {
    muteVolumeBtn.classList.add("active2");
    upVolumeBtn.classList.remove("active2");
  } else {
    upVolumeBtn.classList.add("active2");
    muteVolumeBtn.classList.remove("active2");
    inputVolumeBtn.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("currentVolume"))
    );
    audio.volume = JSON.parse(localStorage.getItem("currentVolume"));
  }
});

// ấn vào mobile or tablet hiện modal

listIcon.addEventListener("touchstart", (e) => {
  sideBar.classList.remove("m-0");
  sideBar.classList.remove("c-0");
  sideBar.classList.add("c-12");
  sideBar.classList.add("m-12");
  header.classList.add("m-0");
  header.classList.remove("m-12");
  header.classList.add("c-0");
  header.classList.remove("c-12");
  console.log("hello");
});

closeBtn.addEventListener("touchstart", (e) => {
  sideBar.classList.add("m-0");
  sideBar.classList.add("c-0");
  sideBar.classList.remove("c-12");
  sideBar.classList.remove("m-12");
  header.classList.remove("m-0");
  header.classList.add("m-12");
  header.classList.remove("c-0");
  header.classList.add("c-12");
});

console.log(sideBar);

console.log(sideBar);
