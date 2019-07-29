import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';
import { motion } from 'framer-motion'

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <motion.div
                className={`alert alert-${alert.type} alertCustom`}
                initial={{ opacity: 0, x: 0, y: -107, scale: 0 }}
				animate={{ opacity: 1, x: 150, y: -107, scale: 1 }}
				transition={{
					ease: "easeOut",
					duration: 0.44,
				}}
            >
                <i className="fas fa-info-circle"/> {alert.msg}  
            </motion.div>
        )
    )
}

export default Alert
