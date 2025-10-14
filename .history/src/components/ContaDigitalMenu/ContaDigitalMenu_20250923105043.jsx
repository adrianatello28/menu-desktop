import React from 'react';
import { motion } from 'framer-motion';
import './ContaDigitalMenu.css';
import menuDigitalMockup from '../../images/digital-desktop-mockup.jpg';
import iconRight from '../../images/icon-right.svg';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const ContaDigitalMenu = () => {
  return (
    <motion.div
      className="conta-digital-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="conta-digital-menu__container">
        <motion.div className="conta-digital-menu__account" variants={itemVariants}>
           <div className="conta-digital-menu__account-image-container">
             <img src={menuDigitalMockup} alt="Conta Digital Mockup" className="conta-digital-menu__account-image" />
           </div>
           <p className="conta-digital-menu__account-title">A conta completa do Mercado Livre</p>
           <a href="#" className="conta-digital-menu__account-link">
             Conhecer Conta Digital
             <img src={iconRight} alt="Arrow" />
           </a>
        </motion.div>
        <motion.div className="conta-digital-menu__list" variants={itemVariants}>
           <div className="conta-digital-menu__list-section">
             <h3 className="conta-digital-menu__list-title">Rendimentos</h3>
             <ul className="conta-digital-menu__product-list">
               <li className="conta-digital-menu__product-item">
                 <h4>Cofrinhos</h4>
                 <p>Rendem até 120% do CDI</p>
               </li>
               <li className="conta-digital-menu__product-item">
                 <h4>Dinheiro na conta</h4>
                 <p>Rende até 105% do CDI</p>
               </li>
             </ul>
           </div>
           <div className="conta-digital-menu__list-section">
             <h3 className="conta-digital-menu__list-title conta-digital-menu__list-title--disabled">Crédito</h3>
             <ul className="conta-digital-menu__product-list">
               <li className="conta-digital-menu__product-item">
                 <h4>Cartão</h4>
                 <p>Até 18x sem juros</p>
               </li>
               <li className="conta-digital-menu__product-item">
                 <h4>Linha de crédito</h4>
                 <p>Compras sem cartão</p>
               </li>
             </ul>
           </div>
           <div className="conta-digital-menu__list-section">
             <h3 className="conta-digital-menu__list-title conta-digital-menu__list-title--disabled">Serviços</h3>
             <ul className="conta-digital-menu__product-list">
               <li className="conta-digital-menu__product-item">
                 <h4>Pagamentos e tarifas</h4>
                 <p>Pix e boletos</p>
               </li>
               <li className="conta-digital-menu__product-item">
                 <h4>Seguros</h4>
                 <p>Proteção para o que importa</p>
               </li>
             </ul>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContaDigitalMenu;
