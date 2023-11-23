import './styles/Join.css';
import { useState } from 'react';
import Post from './compoent/Post';
import './styles/Post.css';

function Join() {
  const [enroll_company, setEnroll_company] = useState({
    address: '',
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  return (
    <div className="container">
      <div className="address_search">
        address
        <input
          className="user_enroll_text"
          placeholder="주소"
          type="text"
          required={true}
          name="address"
          onChange={handleInput}
          value={enroll_company.address}
        />
        <button onClick={handleComplete}>우편번호 찾기</button>
        {popup && (
          <Post company={enroll_company} setcompany={setEnroll_company}></Post>
        )}
      </div>
    </div>
  );
}

export default Join;
