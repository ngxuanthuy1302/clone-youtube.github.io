function Header() {
    const header = document.querySelector(".header");
    header.innerHTML = ` <div class="header_start">
                    <div class='nbar_icon' onclick="ShowModal()"><i class="fa-solid fa-bars header_icon"></i></div>
                    <a href="./" class="home_link">
                        <img class="logo_header" src="./assets/images/logo_youtube.png" alt="" />
                    </a>
                </div>
                <div class="header_search">
                    <input type="text" class="search_input" placeholder="Tìm kiếm" />
                    <span class="span_search">
                        <i class="fa-solid fa-magnifying-glass search_icon"></i>
                    </span>
                    <i class="fa-solid fa-microphone micro_icon"></i>
                </div>
                <div class="header_end">
                    <ul class="hend_list">
                        <li class="hend_item">
                            <i class="fa-solid fa-video end_icon"></i>
                        </li>
                        <li class="hend_item">
                            <i class="fa-regular end_icon fa-bell"></i>
                        </li>
                    </ul>
                    <div class="avata_header">
                        <img class="avt_img" src="./assets/images/avt.jpg" alt="" />
                    </div>
                </div>`;
}
Header();
function ShowModal() {
    const modalSideBar = document.querySelector(".modal_sidebar");
    modalSideBar.classList.remove('hide')
    modalmain.classList.remove('animation-snart');
    modalmain.classList.add('animation-trans')

}