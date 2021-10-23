import IconBookmark from '../../assets/img/icon-bookmark.svg';

function Header() {
  return (
    <div className="mt-3 mb-5 d-flex">
      <h1 className="text-center flex-grow-1 text-white">letBooks</h1>
      <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#libraryModal">
        <img src={IconBookmark} width="24" height="24" alt="Books collection" />
      </button>
    </div>
  );
}

export default Header;