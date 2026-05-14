import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { banners } from './data/banner'

function BannerCarousel() {
  return (
    <Container className="banner-section">
      <Carousel fade interval={3000} pause={false}>
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img
              className="banner-image"
              src={banner.image}
              alt={banner.title}
            />
            <Carousel.Caption>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default BannerCarousel
