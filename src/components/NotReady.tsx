import notReadyIcon from "../../public/icon_not-ready.svg";
const NotReady = () => {
  return (
    <section className="not-ready">
      <div className="not-ready__icon">
        <img src={notReadyIcon} />
      </div>
      <h2 className="not-ready__title">아직 준비 중인 페이지입니다</h2>
    </section>
  );
};

export default NotReady;
