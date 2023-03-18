// 안 쓰는 패키지일까 잠깐 주석햇음 - 현종
import React, { Component, Suspense } from "react";
// import Lottie from "react-lottie"; // 이 녀석이 문제
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </Suspense>
    );
  }
}
