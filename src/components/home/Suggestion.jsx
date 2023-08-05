import image1 from '../../assets/icons/post4.jpeg';

export default function Suggestion() {
  return (
    <div className="mt-10">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <a href="/" className="d-flex align-items-center">
            <img src={image1} alt="avatar" className="big-avatar" />
            &nbsp;
            <div className="ml-1" style={{ transform: 'translateY(-2px)' }}>
              <span className="d-block">Leo</span>
            </div>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center my-8">
        <h6 className="text-secondary suggestbtn">Suggestions pour vous</h6>
        <i className="fa fa-redo" style={{ cursor: 'pointer' }}></i>
      </div>
      <div className="suggestions"></div>
      <div className="d-flex justify-content-between">
        <div>
          <a href="/" className="d-flex align-items-center">
            <img src={image1} alt="avatars-suggérés" className="sug-avatar" />
            &nbsp;
            <div className="ml-1" style={{ transform: 'translateY(-2px)' }}>
              <span className="d-block">Leo</span>
            </div>
          </a>
        </div>
        <button style={{ margin: '10px' }} className="sug-followbtn">
          Suivre
        </button>
      </div>
    </div>
  );
}
