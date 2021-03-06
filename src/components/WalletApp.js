import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const WalletApp = () => {
  const [state, setState] = React.useState([
   
    {
      post_type: "Wallet",
      id: 4,
      userImg: "/images/fawad4.jpg",
      name: "David",
      time: "2h",
      text:
        "Imali Ibuzwa LA!!",
      postImg: "/images/imrankhanpost.jpg",
    },
  ]);
  return (
    <div className="WalletBody">
      {state.map((post) => (
        <div key={post.id} className="Blank">
          <div className="post-Wallet">
          <img className="Logo__Wallet" src="/images/Thumaina.png"  alt="" />
          </div>
       
        <div className="create__first-input">
          <input
            type="text"
            className="create__first-inputs"
            placeholder="Device Number "
          />
        </div>
          <div className="create__first-input">
          <input
            type="text"
            className="create__first-inputs"
            placeholder="Password "
          />
        </div>
        
        </div>
      ))}
    </div>
  );
};

export default WalletApp;
