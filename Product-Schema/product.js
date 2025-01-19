export default {
    name: 'product', // Schema name
    type: 'document', // Document type
    title: 'Product', // Title of the document
    fields: [
      {
        name: 'name', // Field name
        type: 'string', // Field type
        title: 'Product Name', // Label for the field
        description: 'The name of the product.', // Description for better understanding
        validation: Rule => Rule.required().max(100) // Validation rules (e.g., required, max length)
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'The price of the product in USD.',
        validation: Rule => Rule.required().min(0) // Validation for minimum value
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level',
        description: 'The number of items available in stock.',
        validation: Rule => Rule.required().min(0) // Validation to ensure non-negative values
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        description: 'An image representing the product.',
        options: {
          hotspot: true // Allows selecting a focal point in the image
        }
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A detailed description of the product.',
        validation: Rule => Rule.required().max(1000) // Maximum length validation
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        description: 'The category this product belongs to.',
        to: [{ type: 'category' }] // References another document type (e.g., Category schema)
      },
    ]
  };
  