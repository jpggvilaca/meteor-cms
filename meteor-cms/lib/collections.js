// Products
Products = new Mongo.Collection('products');

// Images
ProductsImages = new FS.Collection('products_images', {
  stores: [new FS.Store.GridFS('products_images')]
});