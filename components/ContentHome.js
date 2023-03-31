import { arrvideo } from "./ObjectVideo.js";
import path from "../path.js";

function ContentList() {
    const contentlist = document.querySelector(".main_content_list");
    for (let i = 0; i < arrvideo.length; i++) {
        contentlist.innerHTML += `     <li class="main_content_item">
                            <a href="${path.VIDEO}?${arrvideo[i].id}" class="main_content_link">
                                <img src="./assets/images/${arrvideo[i].imgVid}" alt="" class="main_content_img" />
                            </a>
                            <div class="main_content_detail">
                                <img src="./assets/images/xavia.jpg" alt="" class="main_content_subchannel_img" />
                                <div class="main_content_detail_video">
                                    <h2 class="main_content_video_name">
                                        ${arrvideo[i].title}
                                    </h2>
                                    <span class="main_content_video_channel">Xavia Music Official</span>
                                    <span class="main_content_video_view">524 N lượt xem • 4 năm trước</span>
                                </div>
                            </div>
                        </li>`;
    }
}
ContentList();
