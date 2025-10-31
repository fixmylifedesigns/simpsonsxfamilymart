'use client'
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X, Star } from 'lucide-react';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Line Socks (Adult)",
      price: 600,
      image: "/api/placeholder/300/300",
      description: "Unisex line socks with Bart-inspired colors. Thick pile knit sole with antibacterial and deodorizing treatment. Features The Simpsons and Convenience Wear logos.",
      category: "Socks",
      rating: 4.7,
      sizes: ["22-25cm", "25-28cm"],
      originalPrice: "¥600 (税込)"
    },
    {
      id: 2,
      name: "Kids Line Socks",
      price: 600,
      image: "/api/placeholder/300/300",
      description: "Children's socks with Bart-inspired colorful stripes. Thick pile knit sole for comfort, antibacterial and deodorizing treatment included.",
      category: "Kids Socks",
      rating: 4.8,
      sizes: ["13-19cm", "19-22cm"],
      originalPrice: "¥600 (税込)"
    },
    {
      id: 3,
      name: "Sweat Trainer",
      price: 3990,
      image: "/api/placeholder/300/300",
      description: "Premium sweatshirt featuring the entire Simpson family print. Made with heavyweight USA cotton with minimal pilling and soft texture. A statement piece for any outfit!",
      category: "Apparel",
      rating: 4.9,
      sizes: ["M", "L"],
      originalPrice: "¥3,990 (税込)"
    },
    {
      id: 4,
      name: "Towel-in-Pouch",
      price: 2000,
      image: "/api/placeholder/300/300",
      description: "3-in-1 functional item: pouch, towel, and towel-attached pouch. Features Bart's iconic pose design. Compact and portable for everyday use.",
      category: "Accessories",
      rating: 4.6,
      sizes: ["One Size"],
      originalPrice: "¥2,000 (税込)"
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFD90F 0%, #FFA500 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Top Banner */}
      <div style={{
        background: '#71CE47',
        borderBottom: '4px solid #000',
        padding: '1rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {/* Banner Placeholder - Can be replaced with actual banner image */}
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            border: '3px dashed #000',
            borderRadius: '10px',
            padding: '2rem',
            width: '100%',
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '0.5rem',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              🎉 LIMITED TIME OFFER - EXCLUSIVE ONLINE DEALS! 🎉
            </div>
            <div style={{
              fontSize: '1rem',
              color: '#000'
            }}>
              Free shipping on orders over ¥5,000 | Use code: SIMPSON2025
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: '#000',
              marginTop: '0.5rem',
              opacity: 0.8
            }}>
              Banner Space - 1200 x 120px recommended
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header style={{
        background: '#FF6B6B',
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#FFD90F',
            textShadow: '3px 3px 0px #000',
            margin: 0,
            fontFamily: 'Comic Sans MS, cursive'
          }}>
            The Simpsons × FamilyMart
          </h1>
          <div style={{
            fontSize: '0.9rem',
            color: '#FFD90F',
            marginTop: '0.25rem'
          }}>
            Convenience Wear Collection
          </div>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{
              background: '#FFD90F',
              border: '3px solid #000',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'transform 0.2s',
              transform: isCartOpen ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <ShoppingCart size={28} color="#000" />
            {getTotalItems() > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#FF6B6B',
                color: '#FFF',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                border: '2px solid #000'
              }}>
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: 'rgba(255,255,255,0.9)',
        margin: '2rem auto',
        maxWidth: '800px',
        borderRadius: '20px',
        border: '4px solid #000'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#FF6B6B',
          marginBottom: '1rem',
          fontFamily: 'Comic Sans MS, cursive'
        }}>
          D&apos;OH! Limited Edition Collection
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Exclusive collaboration with America&apos;s longest-running animated TV series!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '1.5rem'
        }}>
          <div style={{
            background: '#FFD90F',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            border: '3px solid #000'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>In Stores</div>
            <div style={{ fontSize: '1rem' }}>From Oct 31, 2025</div>
          </div>
          <div style={{
            background: '#71CE47',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            border: '3px solid #000'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Online Orders</div>
            <div style={{ fontSize: '1rem' }}>Nov 4-17, 2025</div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              background: '#FFF',
              borderRadius: '20px',
              border: '4px solid #000',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              height: '250px',
              background: '#F0F0F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '4px solid #000'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem'
              }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  background: '#FFD90F',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  border: '3px solid #000'
                }}>
                  Product Image
                </div>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '0.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#333',
                  margin: 0
                }}>
                  {product.name}
                </h3>
                <span style={{
                  background: '#71CE47',
                  color: '#FFF',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '5px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  border: '2px solid #000'
                }}>
                  {product.category}
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.75rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#FFD90F' : '#E0E0E0'}
                    color={i < Math.floor(product.rating) ? '#FFD90F' : '#E0E0E0'}
                  />
                ))}
                <span style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#666'
                }}>
                  ({product.rating})
                </span>
              </div>

              <p style={{
                color: '#666',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                lineHeight: '1.4'
              }}>
                {product.description}
              </p>

              {product.sizes && (
                <div style={{
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    Available Sizes:
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {product.sizes.map(size => (
                      <span
                        key={size}
                        style={{
                          padding: '0.25rem 0.75rem',
                          border: '2px solid #000',
                          borderRadius: '5px',
                          fontSize: '0.875rem',
                          background: '#FFF'
                        }}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: '#FF6B6B'
                  }}>
                    ¥{product.price.toLocaleString()}
                  </span>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#666'
                  }}>
                    {product.originalPrice}
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    background: '#FFD90F',
                    border: '3px solid #000',
                    borderRadius: '10px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#71CE47';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFD90F';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Plus size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isCartOpen ? 0 : '-400px',
        width: '400px',
        height: '100vh',
        background: '#FFF',
        boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
        transition: 'right 0.3s ease',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        border: '4px solid #000'
      }}>
        <div style={{
          padding: '1.5rem',
          borderBottom: '4px solid #000',
          background: '#FF6B6B'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '1.5rem',
              color: '#FFD90F',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={24} color="#FFD90F" />
            </button>
          </div>
        </div>

        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem'
        }}>
          {cart.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: '#999',
              marginTop: '2rem'
            }}>
              Your cart is empty. Add some awesome Simpsons merch!
            </p>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                style={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  border: '2px solid #000',
                  borderRadius: '10px',
                  background: '#FFF9E6'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{ margin: 0, color: '#333' }}>{item.name}</h4>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#FF6B6B'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{
                        background: '#FFD90F',
                        border: '2px solid #000',
                        borderRadius: '5px',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Minus size={16} />
                    </button>
                    <span style={{
                      fontWeight: 'bold',
                      minWidth: '30px',
                      textAlign: 'center'
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{
                        background: '#FFD90F',
                        border: '2px solid #000',
                        borderRadius: '5px',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span style={{
                    fontWeight: 'bold',
                    color: '#FF6B6B'
                  }}>
                    ¥{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '4px solid #000',
            background: '#FFF9E6'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontWeight: 'bold'
            }}>
              <span>Total:</span>
              <span style={{ color: '#FF6B6B' }}>¥{getTotalPrice().toLocaleString()}</span>
            </div>
            <button
              style={{
                width: '100%',
                padding: '1rem',
                background: '#71CE47',
                border: '3px solid #000',
                borderRadius: '10px',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Designer Credit Section */}
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '2rem',
        margin: '3rem auto',
        maxWidth: '800px',
        borderRadius: '20px',
        border: '4px solid #000',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          color: '#FF6B6B',
          marginBottom: '1rem',
          fontFamily: 'Comic Sans MS, cursive'
        }}>
          Designed by Hiromichi Ochiai
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          Fashion designer and founder of FACETASM. Winner of the Mainichi Fashion Grand Prix.
          Known for collaborations with Nike, Coca-Cola, and Levi&apos;s.
        </p>
        <p style={{
          color: '#333',
          fontStyle: 'italic'
        }}>
          &quot;I hope everyone will smile just like when watching The Simpsons anime!&quot;
        </p>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: '#FFF',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          © 2025 The Simpsons × FamilyMart Convenience Wear Collection
        </p>
        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>
          Licensed by Walt Disney Japan Co., Ltd. and foundation Inc.
        </p>
      </footer>
    </div>
  );
};

export default Home;