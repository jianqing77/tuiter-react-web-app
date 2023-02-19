import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return `
        <!----------- Search Field ----------->
        <div class="row">
            <div class="col-11">
                <div class="input-group search-field">
                    <!-- span.input-group-text -->
                    <span class="input-group-text">
                        <i class="fa-solid fa-magnifying-glass text-dark"></i>
                    </span>
                    <!-- input field: input.form-control -->
                    <input type="text" class="form-control" placeholder="Search Twitter" />
                </div>
            </div>
            <div class="col-1">
                <a href="explore-settings.html">
                    <i class="fa-solid fa-gear icon-blue fa-2x mt-1"></i>
                </a>
            </div>
        </div>

        <!---------------- Tab --------------->
        <section class="mt-1">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-flex" data-bs-toggle="tab" aria-selected="false" role="tab" href="#">
                        Entertainment
                    </a>
                </li>
            </ul>
        </section>
        <!---------------- Image & Text --------------->
        <div class="position-relative mt-2 mb-2">
            <img src="../pics/a4-spaceX.jpg" alt="Space X" class="img-fluid" />
            <div class="content post-title ms-2">SpaceX's Starship</div>
        </div>
        <!------------------- Posts ------------------>
        ${PostSummaryList()}
    `;
};
export default ExploreComponent;
