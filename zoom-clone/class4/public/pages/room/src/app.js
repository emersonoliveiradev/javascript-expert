const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);
  
  // const socketUrl = "http://localhost:3000";
  const socketUrl = "provided-url";
  const socketBuilder = new SocketBuilder({ socketUrl });

  const peerConfig = Object.values({
    id: undefined,
    config: {
      host: "provided-url-with-no-https",
      secure: true,
      // port: 9000,
      // host: "localhost",
      path: "/",
    },
  });

  const peerBuilder = new PeerBuilder({ peerConfig });

  const view = new View();
  const media = new Media();
  const deps = { room, media, view, socketBuilder, peerBuilder };

  try {
    Business.initialize(deps);
  } catch (err) {
    console.log(err);
  }

  // view.renderVideo({userId: 'teste01', url:'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.mp4',})
  // view.renderVideo({userId: 'teste02', isCurrentId: true, url:'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.mp4',})
  // view.renderVideo({userId: 'teste03', url:'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.mp4',})
};

window.onload = onload;
