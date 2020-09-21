import React, { useState, useEffect } from 'react';
import { SVG } from "css.gg";
import { motion } from 'framer-motion'
import { Space, Card, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom';
import PageTransition from "../../components/Page/PageTransition";
import { StyledCol } from "../../components/UI/StyledCol";

const Category = ({ history }) => {
    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    }
    return (
        <PageTransition>
            <Space align="center" onClick={() => {
                history.push('/')
            }}>
                <svg width="24" height="24"><use xlinkHref={SVG + '#gg-arrow-left'} /></svg>
                <div>Category</div>
            </Space>
            <div>
                <h1>
                    Category list
                </h1>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <StyledCol xs={{ span: 24 }} md={{ span: 8 }}>
                        <motion.div variants={item} transition={{ duration: 1 }}>
                            <div>
                                <Card bordered={false}>
                                    <div>
                                        Product 1
                                    </div>
                                    <div>
                                        <svg width="24" height="24"><use xlinkHref={SVG + '#gg-heart'} /></svg>
                                    </div>
                                </Card>

                            </div>
                        </motion.div>
                    </StyledCol>
                    <StyledCol xs={{ span: 24 }} md={{ span: 8 }}>
                        <motion.div variants={item} transition={{ duration: 1.1 }}>
                            <Card bordered={false}>
                                <div>
                                    Product 2
                                </div>
                                <div>
                                    <svg width="24" height="24"><use xlinkHref={SVG + '#gg-heart'} /></svg>
                                </div>
                            </Card>
                        </motion.div>
                    </StyledCol>
                    <StyledCol xs={{ span: 24 }} md={{ span: 8 }}>
                        <motion.div variants={item} transition={{ duration: 1.2 }}>
                            <Card bordered={false}>
                                <div>
                                    Product 3
                                </div>
                                <div>
                                    <svg width="24" height="24"><use xlinkHref={SVG + '#gg-heart'} /></svg>
                                </div>
                            </Card>
                        </motion.div>
                    </StyledCol>
                </Row>
            </div>
        </PageTransition>
    );
}

export default withRouter(Category);