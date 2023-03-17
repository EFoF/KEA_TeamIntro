import { Wrapper } from './style';
import { useLocation } from 'react-router-dom';




const TitleBox = ({ info, handleChange }) => {
  const location = useLocation();
  const { pathname } = location;
  const isPreview = pathname === '/preview';
  const isResult = pathname === '/result';

  return (
    <Wrapper>
      {!isPreview && !isResult ? (
        <div className="inputs">
          <input
            type="text"
            className="inputs__title"
            placeholder="제목 없는 설문지"
            name="title"
            value={info.title}
            onChange={({ target: { value } }) => handleChange && handleChange('title', value)}
          />
          {/* <input
            type="text"
            className="inputs__detail"
            placeholder="설문지 설명"
            name="detail"
            value={info.detail}
            onChange={({ target: { value } }) => handleChange && handleChange('detail', value)}
          /> */}
        </div>
      ) : (
        <div className="preview">
          <div className="preview__title">{info.title}</div>
          <div className="preview__detail">{info.detail}</div>
          <hr />
          <div className="preview__guide">* 필수항목</div>
        </div>
      )}
    </Wrapper>
  );
};

export default TitleBox;
