import "./scss/index.scss";

function App() {
  // 이름은 -로 연결, 목적어는 _로 연결
  return (
    // TODO : Baselayout으로 만들것
    <div className="root__container">
      <header className="header__container">
        {/* <h1 className="sr-only">헌터차트</h1> */}
        <nav className="header-nav">
          <ul>
            <li>
              <button>차트</button>
            </li>
            <li>
              <button>Whook</button>
            </li>
            <li>
              <button>이벤트</button>
            </li>
            <li>
              <button>뉴스</button>
            </li>
            <li>
              <button>스토어</button>
            </li>
            <li>
              <button>충전소</button>
            </li>
            <li>
              <button>명예의전당</button>
            </li>
            <li>
              <button>패밀리 </button>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
