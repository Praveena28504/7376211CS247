document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { name: 'Product 1', image: 'product1.jpg', price: '$10' },
      { name: 'Product 2', image: 'product2.jpg', price: '$15' },
      { name: 'Product 3', image: 'product3.jpg', price: '$20' },
      { name: 'Product 4', image: 'product4.jpg', price: '$25' },
      { name: 'Product 5', image: 'product5.jpg', price: '$30' }
    ];
  
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: ${product.price}`;
  
      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
  
      productList.appendChild(productDiv);
    });
  });
  