export const host = "https://reuseit.onrender.com";

export const routes = {
    loginRoute: `${host}/api/auth/login`,
    registerRoute: `${host}/api/auth/register`,
    logoutRoute: `${host}/api/auth/logout/`,
    updateRoute: `${host}/api/auth/update/`,
    productsRoute: `${host}/api/shop/products`,
    productRoute: `${host}/api/shop/product/:id`,
    sellRoute: `${host}/api/shop/sell`,
};
