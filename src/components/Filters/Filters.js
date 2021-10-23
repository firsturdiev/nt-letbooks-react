import { useRef } from "react";
import booksData from '../../assets/data/books-data';

function Filters({ action }) {
  const searchRef = useRef();
  const languageRef = useRef();
  const countryRef = useRef();
  const minYearRef = useRef();
  const maxYearRef = useRef();
  const sortRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();

    const searchRegex = new RegExp(searchRef.current.value, 'gi');
    let filteredBooks = booksData.filter(item => {
      return (
        item.title.match(searchRegex) &&
        (languageRef.current.value === "all" || item.language.includes(languageRef.current.value)) &&
        (countryRef.current.value === "all" || item.country.includes(countryRef.current.value)) &&
        (!minYearRef.current.value || item.year >= +minYearRef.current.value) &&
        (!maxYearRef.current.value || item.year <= +maxYearRef.current.value)
      )
    });

    if (sortRef.current.value == 'A-Z') {
      filteredBooks.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      })
    }
    else if (sortRef.current.value == 'pages_count')
      filteredBooks.sort((a, b) => a.pages - b.pages)
    else if (sortRef.current.value == 'year')
      filteredBooks.sort((a, b) => a.year - b.year)

    action(filteredBooks);
  }

  return (
    <form onSubmit={handleFormSubmit} className="filters row flex-wrap mx-0 mb-3 align-items-start" method="GET" action="https://echo.htmlacademy.ru">
      <div className="col-md-2 col-9 ps-0 flex-grow-1 flex-lg-grow-0">
        <div className="input-group">
          <input ref={searchRef} className="form-control" type="search" name="q" placeholder="Search..." aria-label="Search" />
        </div>
      </div>

      <div className="col-12 col-lg-5 order-3 order-md-5 order-lg-2 mb-2 mt-2 mb-md-0 mt-lg-0 p-0 pe-md-2">
        <div className="input-group">
          <span className="input-group-text">Filter</span>
          <select ref={sortRef} className="form-select" name="filter">
            <option value="all">All</option>
            <option value="a-z">A-Z</option>
            <option value="pages_count">Pages count</option>
            <option value="year">Release year</option>
          </select>
          <select ref={languageRef} className="form-select" name="language_filter">
            <option value="all">Language</option>
            <option value="Akkadian">Akkadian</option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
            <option value="ClassNameical Latin">ClassNameical Latin</option>
            <option value="Danish">Danish</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="French, English">French, English</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Old Norse">Old Norse</option>
            <option value="Persian">Persian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Sanskrit">Sanskrit</option>
            <option value="Spanish">Spanish</option>
            <option value="Swedish">Swedish</option>
          </select>
          <select ref={countryRef} className="form-select" name="country_filter">
            <option value="all">Country</option>
            <option value="Achaemenid Empire">Achaemenid Empire</option>
            <option value="Algeria, French Empire">Algeria, French Empire</option>
            <option value="Argentina">Argentina</option>
            <option value="Austria">Austria</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Czechoslovakia">Czechoslovakia</option>
            <option value="Denmark">Denmark</option>
            <option value="Egypt">Egypt</option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="France/Belgium">France/Belgium</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="India/Iran/Iraq/Egypt/Tajikistan">India/Iran/Iraq/Egypt/Tajikistan</option>
            <option value="Ireland">Ireland</option>
            <option value="Irish Free State">Irish Free State</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Norway">Norway</option>
            <option value="Persia, Persian Empire">Persia, Persian Empire</option>
            <option value="Portugal">Portugal</option>
            <option value="Republic of Ireland">Republic of Ireland</option>
            <option value="Roman Empire">Roman Empire</option>
            <option value="Romania, France">Romania, France</option>
            <option value="Russia">Russia</option>
            <option value="Russia/United States">Russia/United States</option>
            <option value="Saxe-Weimar">Saxe-Weimar</option>
            <option value="Spain">Spain</option>
            <option value="Sudan">Sudan</option>
            <option value="Sultanate of Rum">Sultanate of Rum</option>
            <option value="Sumer and Akkadian Empire">Sumer and Akkadian Empire</option>
            <option value="Sweden">Sweden</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United Kingdom, India">United Kingdom, India</option>
            <option value="United States">United States</option>
          </select>
        </div>
      </div>

      <div className="col-12 col-md-3 order-4 order-md-3 p-0 pe-md-2 flex-shrink-0">
        <div className="input-group">
          <span className="input-group-text">Year</span>
          <input ref={minYearRef} type="number" min="-1700" max="2021" className="form-control" placeholder="From.." name="from_year"
            aria-label="Starting year" />
          <input ref={maxYearRef} type="number" min="-1700" max="2021" className="form-control" placeholder="To.." name="to_year"
            aria-label="Ending year" />
        </div>
      </div>

      <div className="col-3 col-md-2 order-2 order-md-4 d-flex justify-content-end px-0">
        <button className="btn btn-primary text-white text-truncate flex-grow-1" type="submit" title="Get results">Get
          results</button>
      </div>
    </form>
  );
}

export default Filters;