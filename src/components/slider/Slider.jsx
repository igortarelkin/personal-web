

export default function Slider() {
    return (
<div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner animate__animated animate__fadeIn">
            <div className="carousel-item active" data-bs-interval="2500">
            <img src="img/01.png" class="d-block h-100  img-fluid " alt="Igor Tarelkin"/>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
            <img src="img/02.png" class="d-block h-100 img-fluid " alt="Igor Tarelkin"/>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
            <img src="img/03.png" class="d-block h-100 img-fluid " alt="Igor Tarelkin"/>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
            <img src="img/04.png" class="d-block h-100 img-fluid " alt="Igor Tarelkin"/>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
            <img src="img/05.png" class="d-block h-100 img-fluid " alt="Igor Tarelkin"/>
            </div>            
        </div>
        </div>
    )
}
