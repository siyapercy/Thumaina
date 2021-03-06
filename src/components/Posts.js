import React from "react";
import Stories from "./Stories";
import Create from "./Create";
import ShowPost from "./ShowPost";
import PostTypeAuction from "./PostTypeAuction";
import PostTypeMeetUps from "./PostTypeMeetUps";
import PostTypeBets from "./PostTypeBets";
import PostTypeJobs from "./PostTypeJobs";
import PostTypePawns from "./PostTypePawns";
import PostTypeCasual from "./PostTypeCasual";
import PostTypeFundraiser from "./PostTypeFundraiser";
import PostTypeSOS from "./PostTypeSOS";
import PostTypeLive from "./PostTypeLive"
import WalletApp from "./WalletApp";
import WalletAdmin from "./WalletAdmin";


const Posts = () => {
  return (
    <div className="posts">
      <Stories />
      <Create />
      <WalletApp />
      <WalletAdmin />
      <PostTypeSOS />
      <PostTypeLive />
      <PostTypeAuction />
      <PostTypeMeetUps />
      <PostTypeBets />
      <PostTypePawns />
      <PostTypeCasual />
      <PostTypeFundraiser />
      <PostTypeJobs />
      <ShowPost />
    </div>
  );
};

export default Posts;
