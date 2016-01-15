Template.add_product.events({
  "submit .add-product": function(event) {
    var name = event.target.name.value;
    var description = event.target.description.value;

    var file = $('#productImage').get(0).files[0];

    if(file) {
      fsFile = new FS.File(file);

      ProductsImages.insert(fsFile, function(err, result) {
        if(!err) {
          var productImage = '/cfs/files/ProductsImages/'+result._id;

          Products.insert({
            name: name,
            description: description,
            image: productsImage,
            createdAt: new Date()
          });
        }
      });

    } else {
      var productImage = '/img/noimage.png';

      Products.insert({
        name: name,
        description: description,
        image: productsImage,
        createdAt: new Date()
      });
    }

    // Clear Form
    event.target.name.value = '';
    event.target.description.value = '';

    FlashMessages.sendSuccess('Product Added');
    Router.go('/');

    return false;
  }
})