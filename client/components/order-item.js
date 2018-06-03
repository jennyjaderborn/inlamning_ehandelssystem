const OrderItemComponent = {
    
      props: ['order'],
    
      template: `
    
          <li>
         <p>Id: {{order.customer}}</p>
         <p>Orderid: {{order._id}}</p>
         <p>Ordersumma: {{order.result.amount}}</p>
          </li>
         
       
      `
    
    }