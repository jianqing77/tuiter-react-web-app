const PostItem = (post) => {
    if (post.title) {
        return `
            <li class="d-flex justify-content-between align-items-center bg-black border-none">
                <div class="row">
                    <div class="col-sm-1 col-2">
                        <img
                            src=${post.avatarIcon}
                            alt="avatar"
                            class="avatar-image rounded-circle" />
                    </div>
                    <div class="col-sm-11 col-10 pe-none ps-4">
                        <header class="d-flex justify-content-between">
                            <div>
                                <span class="fw-bold">${post.userName}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 17 18">
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                <span class="text-muted ms-1">${post.handle} &#183;</span>
                                <span class="text-muted">${post.time}</span>
                            </div>
                            <div>
                                <span><i class="fas fa-ellipsis-h icon-size"></i></span>
                            </div>
                        </header>
                        <span class="d-block mb-2">${post.contentBrief}</span>
                        <!--------------------  Post - Card ------------------------>
                        <div class="card bg-transparent border border-light rounded-4">
                            <!-- image -->
                            <!-- <div class="list-group-item"> -->
                            <div>
                                <img
                                    src=${post.image}
                                    class="card-img-top rounded-4"
                                    alt="..."
                                    style="object-fit: cover"
                                    width="100%"
                                    height="300px" />
                            </div>
                            <!-- </div> -->
                            <!-- content -->
                            <div class="card-body border-top border-light">
                                <span class="tweets-title d-block">
                                    ${post.title}
                                </span>
                                <span class="text-muted d-block">
                                    ${post.body}
                                    <span class="d-block">
                                        <i class="fa-solid fa-link text-muted"></i>
                                        <a href=${post.externalLink} class="text-decoration-none text-muted">
                                            ${post.linkText} 
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <!--------------------  Post - Footer ----------------------->
                        <footer class="d-flex justify-content-between mt-3 text-muted">
                            <div>
                                <i class="fa-regular fa-comment"></i>
                                <span class="ms-md-3 ms-2">${post.numComments} </span>
                            </div>
                            <div>
                                <i class="fa-solid fa-retweet"></i>
                                <span class="ms-md-3 ms-2">${post.numRetweet} </span>
                            </div>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                                <span class="ms-md-3 ms-2">${post.numLikes} </span>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>
                            <div></div>
                        </footer>
                    </div>
                </div>
            </li>

            <div>
                <hr />
            </div>
        `;
    } else {
        return `
            <li class="d-flex justify-content-between align-items-center bg-black border-none">
                <div class="row">
                    <div class="col-sm-1 col-2">
                        <img
                            src=${post.avatarIcon}
                            alt="avatar"
                            class="avatar-image rounded-circle" />
                    </div>
                    <div class="col-sm-11 col-10 pe-none ps-4">
                        <header class="d-flex justify-content-between">
                            <div>
                                <span class="fw-bold">${post.userName}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 17 18">
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                <span class="text-muted ms-1">${post.handle} &#183;</span>
                                <span class="text-muted">${post.time}</span>
                            </div>
                            <div>
                                <span><i class="fas fa-ellipsis-h icon-size"></i></span>
                            </div>
                        </header>
                        <span class="d-block mb-2">${post.contentBrief}</span>
                        <!--------------------  Post - Image ------------------------>
                        <img
                            src=${post.image}
                            class="rounded-4 card-img-top"
                            alt="..."
                            style="object-fit: cover; height: 70%" />

                        <!--------------------  Post - Footer ----------------------->
                        <footer class="d-flex justify-content-between mt-3 text-muted">
                            <div>
                                <i class="fa-regular fa-comment"></i>
                                <span class="ms-md-3 ms-2">${post.numComments}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-retweet"></i>
                                <span class="ms-md-3 ms-2">${post.numRetweet}</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                                <span class="ms-md-3 ms-2">${post.numLikes}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>
                            <div></div>
                        </footer>
                    </div>
                </div>
            </li>
            <div>
                <hr />
            </div>
        `;
    }
};

export default PostItem;
