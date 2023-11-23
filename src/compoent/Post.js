import react, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import '../styles/Post.css';

const Post = (props) => {
  const complete = (data) => {
    //let fullAddress = data.address;
    let addr = '';

    if (data.userSelectedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }
    // document.getElementById('postcode').value = data.zonecode;
    // document.getElementById('roadAddress').value = addr;
    // document.getElementById('detailAddress').focus();

    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress +=
    //       extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    // }
    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);

    props.setcompany({
      ...props.company,
      address: addr,
    });
  };

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={complete} />
    </div>
  );
};

export default Post;
