import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const InspirationAndBlog = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Mrs Joseph',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            text: "Being pregnant was great news for me. However, some complications indicated that I would have to undergo caesarean childbirth. Worried about the scars after the surgery, I visited Dr. Monica, who reassured me of a solution. He minimized the scarring post-delivery, and they are almost faded now.",
            rating: 5
        }
    ];

    const blogs = [
        {
            id: 1,
            title: '5 Things you should know about Labiaplasty',
            date: 'December 26, 2018',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 2,
            title: 'Considering vaginal rejuvenation? Here\'s what you should know',
            date: 'December 26, 2018',
            image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 3,
            title: '5 things to consider before going for Thermiva treatment in India',
            date: 'December 26, 2018',
            image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 4,
            title: 'Difference between Labiaplasty and Vaginoplasty',
            date: 'December 26, 2018',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--white)', padding: '80px 0' }}>
            <div className="container">
                <div className="split-section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>

                    {/* Left Column: Testimonials */}
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '40px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <span style={{
                                    fontFamily: 'cursive',
                                    color: 'var(--primary)',
                                    fontSize: '1rem',
                                    marginRight: '10px'
                                }}>the</span>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--secondary)',
                                    margin: 0,
                                    lineHeight: 1
                                }}>Words</h2>
                            </div>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '300',
                                color: 'var(--secondary-light)',
                                marginBottom: '20px'
                            }}>That inspires us</h3>

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--primary)', marginRight: '15px' }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>to deliver ethical world class services</span>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 20px',
                                    border: '3px solid var(--primary-light)'
                                }}>
                                    <img src={testimonials[0].image} alt={testimonials[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <p style={{
                                    fontStyle: 'italic',
                                    color: 'var(--text-light)',
                                    lineHeight: '1.8',
                                    marginBottom: '20px',
                                    fontSize: '0.95rem'
                                }}>
                                    "{testimonials[0].text}"
                                </p>
                                <div style={{ color: '#FFD700', marginBottom: '10px' }}>
                                    {[...Array(testimonials[0].rating)].map((_, i) => <FaStar key={i} size={14} />)}
                                </div>
                                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>{testimonials[0].name}</h4>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Blog */}
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 style={{
                                color: 'var(--primary)',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                letterSpacing: '1px',
                                marginBottom: '10px'
                            }}>Recent Blog</h4>
                            <h2 style={{
                                fontSize: '2rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                marginBottom: '40px'
                            }}>What's going on in our blog?</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {blogs.map((blog) => (
                                    <div key={blog.id} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingBottom: '20px',
                                        borderBottom: '1px solid #eee'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            marginRight: '20px',
                                            flexShrink: 0
                                        }}>
                                            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <h3 style={{
                                                fontSize: '1rem',
                                                marginBottom: '5px',
                                                color: 'var(--secondary)',
                                                fontWeight: '600',
                                                lineHeight: '1.4'
                                            }}>
                                                <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>{blog.title}</Link>
                                            </h3>
                                            <span style={{ fontSize: '0.8rem', color: '#999' }}>{blog.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <Link to="/blog" style={{
                                    color: 'var(--primary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    → See All Our Blogs
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InspirationAndBlog;
