import React, { useState } from 'react';
import './styles/Detail.css';
import data from './data';

function Detail() {
  let [detailItem, setItem] = useState(data);

  return (
    <div className="detailwrap">
      <section>
        {detailItem.map((Element, i) => {
          return (
            <DetailCard
              detailItem={detailItem == i ? detailItem[i] : detailItem[i + 1]}
              i={i + 1}
            ></DetailCard>
          );
        })}
      </section>
      <aside>
        <p>
          PHS-1158A Col.4
          <br />
          260,000 won
          <br />
          LENS WIDTH 56
          <br />
          NOSE BRIDGE 21
          <br />
          FRAME SIDE 142
          <br />
          MATERIAL ACETATE
        </p>
      </aside>
    </div>
  );
}

function DetailCard(props) {
  return (
    <div>
      <div className="col1">
        <img
          src={
            process.env.PUBLIC_URL + '/img/detailImg/PHS4_' + props.i + '.png'
          }
          alt=""
        />
      </div>
      <div className="col2">
        <img
          src={
            process.env.PUBLIC_URL + '/img/detailImg/PHS42_' + props.i + '.png'
          }
          alt=""
        />
      </div>
      <div className="col3">
        <img
          src={
            process.env.PUBLIC_URL + '/img/detailImg/PHS43_' + props.i + '.png'
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Detail;
