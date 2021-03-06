import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const WalletAdmin = () => {
  const [state, setState] = React.useState([
   
    {
      post_type: "WalletAdmin",
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
        <div className="show__options">
            <span className="options">
              <span className="options-text">Account Details</span>
            </span>
          </div>

          <div className="show__options">
            <span className="options">
              <span className="options-text">Transactions</span>
            </span>
          </div>
          <div className="show__options">
            <span className="options">
              <span className="options-text">Balances</span>
            </span>
          </div>
          <div className="show__options">
            <span className="options">
              <span className="options-text">Savings</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletAdmin;
