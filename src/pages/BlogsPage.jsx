import React, { useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import CardSoft from '../components/ui/CardSoft';
import { motion } from 'framer-motion';

const BlogsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogs = [
        {
            title: "Understanding Vaginal Rejuvenation",
            excerpt: "Explore the benefits and procedures involved in vaginal rejuvenation and how it can improve your quality of life.",
            date: "October 15, 2023",
            image: "/Vaginal-Rejuvenation.webp"
        },
        {
            title: "Vaginal Tightening",
            excerpt: "Restore tone and elasticity with our safe and effective vaginal tightening procedures, enhancing both comfort and confidence.",
            date: "September 28, 2023",
            image: "/Vaginal-Tightening.webp"
        },
        {
            title: "Non-Surgical Solutions for Incontinence",
            excerpt: "Discover effective non-surgical treatments for urinary incontinence that can help you regain confidence.",
            date: "September 10, 2023",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: '#c99d99',
                color: 'var(--secondary)',
                padding: '80px 0',
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Our Blogs</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                        Insights, updates, and educational content from our experts.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginBottom: '100px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CardSoft style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', overflow: 'hidden' }}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '10px', display: 'block' }}>
                                        {blog.date}
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                                        {blog.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                                        {blog.excerpt}
                                    </p>
                                    <button style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--primary)',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        padding: 0,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        Read More →
                                    </button>
                                </div>
                            </CardSoft>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
