import IconInfo from '../../assets/img/icon-info.svg';
import IconAddLibrary from '../../assets/img/icon-bookmark-add.svg';

function Card({data}) {
  const {title, author, year, language, country, pages, link, imageLink} = data;

  return (
    <div className="books__item col-md-6 col-lg-4 mb-3">
    <div className="book card h-100">
      <img className="book__poster card-img-top" src={'https://raw.githubusercontent.com/firsturdiev/nt-letbooks/main/' + imageLink} height="400" alt={title}/>
      <div className="card-body d-flex flex-column">
        <h3 className="book__title card-title mb-1 text-truncate">{title}</h3>
        <h4 className="book__author h6 card-subtitle text-muted mb-3">{author}</h4>

        <ul className="book__info-list list-unstyled">
          <li className="book__info-item book__info-year d-flex mb-1" title="Published year">{year}</li>
          <li className="book__info-item book__info-language d-flex mb-1" title="Language">{language}</li>
          <li className="book__info-item book__info-country d-flex mb-1" title="Country of the author">{country}</li>
          <li className="book__info-item book__info-pages d-flex mb-1" title="Pages count">{pages}</li>
        </ul>

        <div className="book__bottom d-flex flex-wrap gap-2">
          <a className="book__more-link btn btn-primary d-inline-flex align-items-center" href={link} target="_blank">
            <img className="me-1" src={IconInfo} width="24" height="24" alt="" aria-hidden />
            <span>More info</span>
          </a>

          <button className="book__add-library btn btn-primary d-inline-flex align-items-center" type="button">
            <img className="me-1 no-point" src={IconAddLibrary} width="24" height="24"
              alt="" aria-hidden />
            <span className="no-point">Add to library</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card;