import firstImg from "../../img/1.png"
import secondImg from "../../img/2.png"
import thirdImg from "../../img/3.png"

function HomeSlider() {
  
  return(
    <div className="home-slider">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={firstImg} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={secondImg} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={thirdImg} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>

      </div>

  )
}


export default HomeSlider