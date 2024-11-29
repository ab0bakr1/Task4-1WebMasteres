import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
      });
      const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
      });

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching products: ", error));
    }, []);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        if (!cart.find((item) => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedFavorites);
    }, []);
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };
    const removeFromFavorites = (productId) => {
        setWishlist(wishlist.filter((item) => item.id !== productId));
    };

    const register = (newUser) => {
        setUsers((prevUsers) => {
          const updatedUsers = [...prevUsers, newUser];
          localStorage.setItem('users', JSON.stringify(updatedUsers));
          return updatedUsers;
        });
      };
    const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    };
    
const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    };
    return (
        <ProductContext.Provider value={{ products, cart, wishlist, addToCart, addToWishlist, loading, users, register, login, logout,currentUser, setCurrentUser, removeFromFavorites,removeFromCart,setCart,product,setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
