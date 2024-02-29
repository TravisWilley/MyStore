  const socket = io('https://bid-store.onrender.com'); // Replace with your server details
   socket.connect()
   console.log("socket", socket)

       socket.on('connect', () => {
         console.log('Connected to socket server');
     });

  socket.on('bidsList', (data) => {
         console.log('bidlist',data);
     });