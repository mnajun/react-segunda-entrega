const products = [
    {id: "1", name: "Bermuda Venum Minotaurus", price: 67900, category: "Bermudas", Image: "/img/1-Minotaurus-Black-white-VENUM-03382-108-S-M-L-y-XL.jpg"},
    {id: "2", name: "Bermuda Venum Tempest 2.0 Blue", price: 67900, category: "Bermudas", Image: "/img/2-Bermuda-Tempest-Blue.jpg"},
    {id: "3", name: "Bermuda Venum Tempest 2.0 Red", price: 67900, category: "Bermudas", Image: "../img/3-Tempest-2.0-Red-red-VENUM-02882-441-S-M-L-y-XL-1.jpg" },
    {id: "4", name: "Bermuda Venum Werewolf", price: 67900, category: "Bermudas", Image: "../img/4 -Wirewolf-Black-grey-VENUM-03338-109-S-M-L-y-XL.jpg" },
    ///bermudas
    {id: "5", name: "Calza Venum Minotaurus", price: 65300, category: "Calzas", Image: "../img/5 -Minotaurus-Copression-Short-Black-white-VENUM-03381-108-S-M-L-y-XL.jpg" },
    {id: "6", name: "Calza Venum Werewolf", price: 65300, category: "Calzas", Image: "../img/6 -Wirewolf-Compression-short-Black-grey-VENUM-03340-109-S-M-L-y-XL.jpg"},
    ///calzas
    {id: "7", name: "Rashguard Vennum Plasma", price: 70700, category: "Remeras", Image: "../img/7 -Plasma-Rashguard-Black-Yellow-VENUM-0392-111-SM-L-y-XL.jpg" },
    {id: "8", name: "Rashguard Venum Werewolf", price: 70700, category: "Remeras", Image: "../img/8 -Image-2022-06-10-at-12.04.47-PM.jpg" },
    {id: "9", name: "Remera Giant Dragon", price: 39100, category: "Remeras", Image: "../img/9 -Giant-Dragon-T-shirt-Black-white-VENUM-03151-108-SM-L-y-XL.jpg" },
    {id: "10", name: "Remera Giant Dragon Red", price: 39100, category: "Remeras", Image: "/img/10 -Giamt-Dragon-T-shirt-Black-red-VENUM-03151-100-SM-L-y-XL.jpg" },
    {id: "11", name: "Remera sin mangas Giant Dragon", price: 33900, category: "Remeras" , Image: "/img/11 -Giant-Dragon-Tank-Top-Black-white-VENUM-03403-108-S-M-L-y-XL.jpg"},
    {id: "12", name: "Remera sin mangas Giant Dragon Red", price: 33900, category: "Remeras", Image: "/img/12 -Giant-Dragon-Tank-Top-Black-red-VENUM-03403-100-S-M-L-y-XL.jpg" },
    ///remeras
]




// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const product = products.find((p) => p.id === id);
  
        
        if (product) {
          resolve(product);
        } else {
          reject("No existe el producto");
        }
      }, 1000);
    });
  };
  



// getProducts() -> devuelve todos los productos
// getProducts("Bermudas") -> devuelve todos los productos de la categoría Bermudas
// getProducts("Calzas") -> devuelve todos los productos de la categoría Calzas
// getProducts("Remeras") -> devuelve todos los productos de la categoría Remeras
export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
         const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
         resolve(productsFiltered);
        }, 1000);
    });
  };