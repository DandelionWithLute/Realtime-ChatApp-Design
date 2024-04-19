const App = () => {
  return (
    <div className="container">
      {/* ChatList */}
      <div className="chatList">
        <div className="chatListInner">
          {/* userCardContainer */}
          <div className="userCard">
            <div className="avatarContainer">
              <img src="avatar.png" className="" />
            </div>
            <div className="userName">
              <a>Dandelion</a>
            </div>
            <div className="userIcons">
              <img src="more.png" />
              <img src="video.png" />
              <img src="edit.png" />
            </div>
          </div>
          {/* searchBarContainer */}
          <div className="searchBarContainer">
            <div className="searchBarContainerSearch">
              <img src="search.png" />
              <input placeholder="Search" />
            </div>
            <div className="searchBarContainerPlusContainer">
              <div className="searchBarContainerPlus">
                <img src="plus.png" />
              </div>
            </div>
          </div>
          {/* userContactListContainer */}
          <div className="userContactListContainer">
            {/* 1 */}
            <div className="userCard">
              <div className="avatarContainer">
                <img src="avatar.png" className="" />
              </div>
              <div className="userNameAndDescContainer">
                <div className="userName">
                  <a>Dandelion</a>
                </div>
                <div className="desc">hello</div>
              </div>
            </div>
            {/* 2 */}
            <div className="userCard">
              <div className="avatarContainer">
                <img src="avatar.png" className="" />
              </div>
              <div className="userNameAndDescContainer">
                <div className="userName">
                  <a>Dandelion</a>
                </div>
                <div className="desc">hello</div>
              </div>
            </div>
            {/* 3 */}
            <div className="userCard">
              <div className="avatarContainer">
                <img src="avatar.png" className="" />
              </div>
              <div className="userNameAndDescContainer">
                <div className="userName">
                  <a>Dandelion</a>
                </div>
                <div className="desc">hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainVerticalSeparator">
        <div className="mainVerticalSeparatorMiddle"></div>
      </div>
      {/* ChatContainer */}
      <div className="chatContainer">chatContainer</div>
      <div className="mainVerticalSeparator">
        <div className="mainVerticalSeparatorMiddle"></div>
      </div>
      {/* ChatDetails */}
      <div className="chatDetails">chatDetails</div>
    </div>
  );
};

export default App;
