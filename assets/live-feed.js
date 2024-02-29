fetch("https://bid-store.onrender.com/bidlist")
  .then((response) => response.text())

  .then((data) => {
    const bids = JSON.parse(data);
    console.log("bids", bids);
    renderLiveBids(bids);
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
  renderLiveBids(data);
});

const renderLiveBids = (bids) => {
  const bidsList = document.getElementById("live-bids");
  bidsList.innerHTML = "";

  // Function to create and add a bid list item
  function addBidListItem(bid) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h1> ${bid.productName}: $${bid.bidAmount} </h1>`;
    bidsList.appendChild(listItem);
  }

  // Loop through bids and add them to the list
  for (const bid of bids) {
    addBidListItem(bid);
  }
};
