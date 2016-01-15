Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  // Home
  this.route('home', {
    path: '/',
    template: 'home',
    data: function() {
      templateData = {
        products: Products.find()
      };

      return templateData;
    }
  });

  // Products
  this.route('productsList', {
    path: '/productsList',
    template: 'productsList',
    data: function() {
      templateData = {
        products: Products.find()
      };

      return templateData;
    }
  });

  // Single product
  this.route('product', {
    path: '/products/:slug',
    template: 'productDetails',
    data: function() {
      return Products.findOne(this.params._id)
    }
  })

  // Add Solution
  this.route('add_product', {
    path: '/add_product',
    template: 'add_product',
  });
});