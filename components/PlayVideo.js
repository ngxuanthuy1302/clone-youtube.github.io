import { arrvideo } from "./ObjectVideo.js";
import path from "../path.js";


const contentlist = document.querySelector(".play_video");

function Video() {
    const videoRight = document.querySelector('.video_right_list');
    contentlist.innerHTML = `
    <iframe frameborder="0" class="play_iframe" autoplays src="https://www.youtube.com/embed/${window.location.href.split("?")[1]}?autoplay=1"> </iframe>`;

    const frameVi = document.querySelector('.play_iframe');
    contentlist.style.height = frameVi.offsetWidth * 9 / 16 + 'px';
    for (let i = 0; i < arrvideo.length; i++) {
        if (arrvideo[i].id != window.location.href.split("?")[1]) {
            console.log(arrvideo[i].id)
            videoRight.innerHTML += `<li class="video_right_item">
                                <a href="${path.VIDEO}?${arrvideo[i].id}" class="video_right_link">
                                    <img src="./assets/images/${arrvideo[i].imgVid}" alt="" class="video_right_img" />
                                </a>
                                <div class="video_right_detail">
                                    <div class="video_right_detail_video">
                                        <h2 class="video_right_video_name">${arrvideo[i].title}</h2>
                                        <span class="video_right_video_channel">Xavia Music Official</span>
                                        <span class="video_right_video_view">524 N lượt xem • 4 năm trước</span>
                                    </div>
                                </div>
                            </li>`
        } else {
            document.title = arrvideo[i].title
        }
    }
}
// Video();
//Change Height when resize web
window.addEventListener('resize', () => {
    const frameVi = document.querySelector('.play_iframe');
    contentlist.style.height = frameVi.offsetWidth * 9 / 16 + 'px';
})