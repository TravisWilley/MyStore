dayjs.extend(window.dayjs_plugin_relativeTime);

fetch("https://bid-store-back.onrender.com/bidlist")
  .then((response) => response.text())

  .then((data) => {
    const bids = JSON.parse(data);
    console.log("bids", bids);
    renderLiveBids(bids);
  })
  .catch((e) => {
    console.log("e", e);
  });

const socket = io("https://bid-store-back.onrender.com"); // Replace with your server details
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
    const listItem = document.createElement("div");
    listItem.innerHTML = `<div class="product-card"> 
    <div style="display: flex;align-items: center;">
    
    ${
      bid.productImage
        ? `<img src="${bid.productImage}" />`
        : `<div class="image-placeholder"></div>`
    }
        

    <div class="product-details">
    <div class="product-title">
    
    ${bid.productName}
    </div>
      <div class="product-subtitle">
    
    Someone just bid $${bid.bidAmount}
    </div>
    </div>
    </div>
    <div class="just-now">${dayjs(bid.bidDate || undifined).fromNow()}</div>
    
    </div>`;
    bidsList.appendChild(listItem);
  }

  // Loop through bids and add them to the list
  for (const bid of bids) {
    addBidListItem(bid);
  }
};
