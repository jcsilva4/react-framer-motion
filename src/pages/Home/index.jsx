import React, { useState } from "react";
import { Row } from 'antd';
import { Card } from 'antd';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import PageTransition from "../../components/Page/PageTransition";
import { PageTitle, StyledCol } from "../../components/UI"
import { CategoryCard } from "./styled";

const Home = () => {
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  return (
    <PageTransition>
      <Row gutter={16}>
        <StyledCol xs={{ span: 24 }} lg={{ span: 12 }} >
          <motion.div >
            <Card bordered={false}>
              Sale 1
            </Card>
          </motion.div>
        </StyledCol>
        <StyledCol xs={{ span: 24 }} lg={{ span: 12 }} >
          <motion.div>
            <Card bordered={false}>
              Sale 2
        </Card>
          </motion.div>
        </StyledCol>
      </Row>
      <PageTitle >
        Categories
      </PageTitle>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
        <StyledCol xs={{ span: 24 }} lg={{ span: 8 }}>
          <motion.div variants={item} transition={{ duration: 1 }}>
            <NavLink to="/category">
              <Card bordered={false} style={{ height: '100%' }}>
                <CategoryCard>
                  Category 1
                </CategoryCard>
              </Card>
            </NavLink>
          </motion.div>
        </StyledCol>

        <StyledCol xs={{ span: 24 }} lg={{ span: 8 }}>
          <motion.div variants={item} transition={{ duration: 1.1 }}>
            <Card bordered={false}>
              <CategoryCard>
                Category 2
              </CategoryCard>
            </Card>
          </motion.div>
        </StyledCol>
        <StyledCol xs={{ span: 24 }} lg={{ span: 8 }}>
          <motion.div variants={item} transition={{ duration: 1.2 }}>
            <Card bordered={false}>
              <CategoryCard>
                Category 3
              </CategoryCard>
            </Card>
          </motion.div>
        </StyledCol>
        <StyledCol xs={{ span: 24 }} lg={{ span: 8 }}>
          <motion.div variants={item} transition={{ duration: 1.3 }}>
            <Card bordered={false}>
              <CategoryCard>
                Category 4
              </CategoryCard>
            </Card>
          </motion.div>
        </StyledCol>
      </Row>
    </PageTransition >
  )

};

export default Home;
