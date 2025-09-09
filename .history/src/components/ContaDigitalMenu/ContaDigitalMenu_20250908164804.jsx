import React from 'react';
import { motion } from 'framer-motion';
import './ContaDigitalMenu.css';
import menuDigitalMockup from '../../assets/menu-digital-mockup.png';
import iconRight from '../../images/icon-right.svg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const ContaDigitalMenu = () => {
  return (
    <motion.div 
      className="conta-digital-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="conta-digital-menu__container">
        <motion.div className="conta-digital-menu__mockup" variants={itemVariants}>
          <img src={menuDigitalMockup} alt="Mockup Conta Digital" />
          <div className="conta-digital-menu__account">
            <a href="#" className="conta-digital-menu__account-link">
              Conhecer Conta Digital
              <img src={iconRight} alt="Arrow" />
            </a>
          </div>
        </motion.div>
        <motion.div className="conta-digital-menu__list" variants={itemVariants}>
          <div className="conta-digital-menu__list-section">
            <h3 className="conta-digital-menu__list-title">Produtos para você</h3>
            <ul className="conta-digital-menu__product-list">
              <li className="conta-digital-menu__product-item"><p>Cartão de Crédito</p></li>
              <li className="conta-digital-menu__product-item"><p>Empréstimos</p></li>
              <li className="conta-digital-menu__product-item"><p>Portabilidade de Salário</p></li>
              <li className="conta-digital-menu__product-item"><p>Investimentos</p></li>
              <li className="conta-digital-menu__product-item"><p>Seguros</p></li>
            </ul>
          </div>
          <div className="conta-digital-menu__list-section">
            <h3 className="conta-digital-menu__list-title">Benefícios</h3>
            <ul className="conta-digital-menu__product-list">
              <li className="conta-digital-menu__product-item"><p>Cashback</p></li>
              <li className="conta-digital-menu__product-item"><p>Programa de Pontos</p></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContaDigitalMenu;
