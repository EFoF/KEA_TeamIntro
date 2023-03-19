import { Wrapper } from './style';
import { useLocation } from 'react-router-dom';




const TitleBox = ({ info, handleChange }) => {
  const location = useLocation();
  const { pathname } = location;
  const isPreview = pathname === '/preview';
  const isResult = pathname === '/result';
  const gradient = {gradientColors: "#ff7f00, #ffa500, #ffb444, #ec9f2e, #d99944"}
  return (
    <Wrapper>
      {!isPreview && !isResult ? (
        <div className="inputs" style={{background: `linear-gradient(135deg,${gradient})`}}>
          <input
            type="text"
            className="inputs__title"
            placeholder="제목 없는 설문지"
            name="title"
            value={info.title}
            onChange={({ target: { value } }) => handleChange && handleChange('title', value)}
          />          
        </div>
      ) : (
        <div className="preview">
          <div className="preview__title" style={{color:'white'}}>{info.title}</div>          
          <div className="preview__detail">{info.detail}</div>
          <hr />
          <div className="preview__guide">* 필수항목</div>
        </div>
      )}
    </Wrapper>
  );
};

export default TitleBox;
