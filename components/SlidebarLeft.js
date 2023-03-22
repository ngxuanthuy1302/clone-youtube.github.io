const SidebarLeft = () => {
    document.querySelector('.sidebar_left').innerHTML =
        ` <!-- Pages List -->
                <ul class="public_list">
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="fa-solid fa-house"></i> Trang chủ </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="fa-regular fa-map"></i> Shorts </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="fa-solid fa-film"></i> Kênh đăng ký </a>
                    </li>
                </ul>
                <!-- Personal List -->
                <ul class="public_list">
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="bx bxs-videos"></i> Thư viện </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="bx bx-history"></i> Video đã xem </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="bx bx-caret-right-square"></i> Video của bạn </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="bx bxs-time-five"></i> Xem sau </a>
                    </li>
                    <li class="public_item">
                        <a href="#" class="public_link"> <i class="fa-regular fa-thumbs-up"></i> Video đã thích </a>
                    </li>
                </ul>
                <div class="subchannel">
                    <p class="subchannel_title">Kênh đăng ký</p>
                    <ul class="subchannel_list public_list">
                        <li class="public_item" title="Trung Tâm Đào Tạo Công Nghệ Khoa Phạm">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">Trung Tâm Đào Tạo Công Nghệ Khoa Phạm</p>
                            </a>
                        </li>
                        <li class="public_item" title="MG Studio">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">MG Studio</p>
                            </a>
                        </li>
                        <li class="public_item" title="Vuong Pham">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">Vuong Pham</p>
                            </a>
                        </li>
                        <li class="public_item" title="MTP Entertainment">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">MTP Entertainment</p>
                            </a>
                        </li>
                        <li class="public_item" title="I'm Sún GAMING">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">I'm Sún GAMING</p>
                            </a>
                        </li>
                        <li class="public_item" title="GSoft Knowledge">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">GSoft Knowledge</p>
                            </a>
                        </li>
                        <li class="public_item" title="Tran Chung">
                            <a href="" class="public_link">
                                <img src="./assets/images/avt.jpg" alt="" class="subchannel_img" />
                                <p class="subchannel_name">Tran Chung</p>
                            </a>
                        </li>
                        <li class="public_item" title="Hiển thị thêm 10 mục">
                            <i class="fa-solid fa-chevron-down icon_charv"></i>
                            <span class="public_span">Hiển thị thêm 10 mục</span>
                        </li>
                    </ul>
                </div>`
}
SidebarLeft();