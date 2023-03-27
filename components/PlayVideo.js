function Video() {
    const contentlist = document.querySelector(".play_video");
    contentlist.innerHTML = `
                <iframe autoplay width="1060" height="597" src="https://www.youtube.com/embed/${
                    window.location.href.split("?")[1]
                }?autoplay=1&mute=1"> </iframe>
    `;
}
Video();
