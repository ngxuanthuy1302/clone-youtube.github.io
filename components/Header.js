function Header() {
    const header = document.querySelector(".header");
    header.innerHTML = ` 
                <div class="header_start">
                    <div class="nbar_icon" onclick="ShowModal()"><i class="fa-solid fa-bars header_icon"></i></div>
                    <a href="./" class="home_link">
                        <img class="logo_header" src="./assets/images/logo_youtube.png" alt="" />
                    </a>
                </div>
                <div class="header_search">
                    <div class="search_detail">
                        <input type="text" class="search_input" placeholder="Tìm kiếm" />
                        <div class="search_data">
                            <ul class="search_list">
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span onclick="test()" class="search_content_output">hãy trao cho anh</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">phố đã lên đèn</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">kungfu banpa</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">chúng ta của hiện tại</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">đôi mươi</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">sơn tùng mtp</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">cupid-fity</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">tàu hỏa con nhện</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">ai đưa em về</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                                <li class="search_item">
                                    <i class="bx bx-history"></i>
                                    <span class="search_content_output">góc nhìn phản diện</span>
                                    <span class="delete_search">Xóa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span class="span_search" title="Tìm kiếm">
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
                </div>
            `;
}
Header();
function ShowModal() {
    const modalSideBar = document.querySelector(".modal_sidebar");
    modalSideBar.classList.remove('hide')
    modalmain.classList.remove('animation-snart');
    modalmain.classList.add('animation-trans')
}
function test() {
    const valueSearc = document.querySelector('.search_item');
    const valueS = valueSearc.querySelector('.search_content_output');
    console.log(valueS)
    console.log('a');
}
// const inputS = document.querySelector('.search_input')
// inputS.addEventListener('focus', () => {
//     const valueSearc = document.querySelector('.search_item');
//     const valueS = valueSearc.querySelector('.search_content_output');
// })