fetch("https://bid-store.onrender.com/bidlist")
  .then((response) => response.text())

  .then((data) => {
    const bids = JSON.parse(data);
    console.log("bids", bids);
  })
  .catch((e) => {
    console.log("e", e);
  });

const socket = io("https://bid-store.onrender.com"); // Replace with your server details
socket.connect();
console.log("socket", socket);

socket.on("connect", () => {
  console.log("Connected to socket server");
});

socket.on("bidsList", (data) => {
  console.log("bidlist", data);
});
