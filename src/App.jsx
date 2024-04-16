const App = () => {
  return (
    <div className="container">
      {/* ChatList */}
      <div className="chatList">
        <div className="userCard">
          <img src="avatar.png" className="" />
          <div className="userName">
            <a>Dandelion</a>
          </div>
          <div className="userIcons">
            <img src="more.png" />
            <img src="video.png" />
            <img src="edit.png" />
          </div>
        </div>
        <div className="">{/* <img src="plus.png" /> */}</div>
      </div>
      {/* ChatContainer */}
      <div className="chatContainer">chatContainer</div>
      {/* ChatDetails */}
      <div className="chatDetails">chatDetails</div>
    </div>
  );
};

export default App;
