import React from 'react'
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
        >
            { children}
        </motion.div >
    );
}

export default PageTransition;