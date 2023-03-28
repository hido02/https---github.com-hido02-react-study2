import { Link } from 'react-router-dom';

function MainView() {
  return (
    <main>
      <h1>React Study</h1>
      <p class="fs-5 col-md-8">리액트 뿌시기</p>

      <hr class="col-3 col-md-2 mb-5"/>

      <div class="row g-5">
          <div class="col-md-8">
            <h2>Pages</h2>
            <ul class="icon-list">
              <li><a href="each/memo">메모장</a></li>
              <li><a href="each/prac">예제</a></li>
              <li><Link to="list">리스트</Link></li>
              <li><Link to="list/write">글쓰기</Link></li>
              <li><Link to="/redux">Redux</Link></li>
              <li><Link to="/alignCenter">가운데 정렬</Link></li>
              <li><Link to="/withrouter">withRouter</Link></li>

            </ul>

          </div>
        </div>
    </main>
  )
}

export default MainView;