import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <ul class="nav justify-content-center bg-dark">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  );
}

export default Navbar;
