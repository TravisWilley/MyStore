if (!customElements.get('live-feed')) {
  customElements.define(
    'live-feed',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

      

        
    const socket = io('https://bid-store.onrender.com'); // Replace with your server details
   socket.connect()
   console.log("socket", socket)

       socket.on('connect', () => {
         console.log('Connected to socket server');
     });

  socket.on('bidsList', (data) => {
         console.log('bidlist',data);
     });


        
      }



      
    }
  );
}
