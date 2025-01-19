export default {
    name: 'order',
    type: 'document', 
    title: 'Order', 
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
        description: 'Unique identifier for the order.',
        validation: Rule => Rule.required().regex(/^[a-zA-Z0-9-]+$/, { name: 'alphanumeric' }) // Validation for alphanumeric ID
      },
      {
        name: 'customer',
        type: 'reference',
        title: 'Customer',
        description: 'The customer who placed the order.',
        to: [{ type: 'customer' }] // References a "Customer" document
      },
      {
        name: 'products',
        type: 'array',
        title: 'Ordered Products',
        description: 'The list of products in the order.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                title: 'Product',
                description: 'A reference to the product being ordered.',
                to: [{ type: 'product' }] // References the "Product" schema
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
                description: 'The quantity of the product ordered.',
                validation: Rule => Rule.required().min(1) // Minimum quantity validation
              }
            ]
          }
        ]
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
        description: 'The total amount for the order.',
        validation: Rule => Rule.required().min(0), // Minimum amount validation
        readOnly: true // Calculated field (not editable manually)
      },
      {
        name: 'orderStatus',
        type: 'string',
        title: 'Order Status',
        description: 'The current status of the order.',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'paymentStatus',
        type: 'string',
        title: 'Payment Status',
        description: 'The payment status of the order.',
        options: {
          list: [
            { title: 'Paid', value: 'paid' },
            { title: 'Pending', value: 'pending' },
            { title: 'Failed', value: 'failed' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'shippingAddress',
        type: 'object',
        title: 'Shipping Address',
        description: 'The shipping address for the order.',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'state', type: 'string', title: 'State' },
          { name: 'postalCode', type: 'string', title: 'Postal Code' },
          { name: 'country', type: 'string', title: 'Country' }
        ]
      },
    ]
  };
  