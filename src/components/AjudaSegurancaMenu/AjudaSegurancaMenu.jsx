import React from 'react';
import { motion } from 'framer-motion';
import './AjudaSegurancaMenu.css';
import ajudaImagen from '../../images/ajuda-imagen.png';
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

const AjudaSegurancaMenu = () => {
  return (
    <motion.div
      className="ajuda-seguranca-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="ajuda-seguranca-menu__container">
        <motion.div className="ajuda-seguranca-menu__account" variants={itemVariants}>
           <div className="ajuda-seguranca-menu__account-image-container">
             <img src={ajudaImagen} alt="Ajuda e Segurança" className="ajuda-seguranca-menu__account-image" />
           </div>
           <p className="ajuda-seguranca-menu__account-title">Como podemos te ajudar?</p>
           <a href="#" className="ajuda-seguranca-menu__account-link">
             Conhecer a Central de Ajuda
             <img src={iconRight} alt="Arrow" />
           </a>
        </motion.div>
        <motion.div className="ajuda-seguranca-menu__list" variants={itemVariants}>
           <div className="ajuda-seguranca-menu__list-section">
             <h3 className="ajuda-seguranca-menu__list-title">AJUDA</h3>
             <ul className="ajuda-seguranca-menu__product-list">
               <li className="ajuda-seguranca-menu__product-item">
                 <h4>Perguntas frequentes</h4>
               </li>
               <li className="ajuda-seguranca-menu__product-item">
                 <h4>Pix</h4>
               </li>
               <li className="ajuda-seguranca-menu__product-item">
                 <h4>Vendas e ferramentas para vender</h4>
               </li>
               <li className="ajuda-seguranca-menu__product-item">
                 <h4>Fale conosco</h4>
               </li>
             </ul>
           </div>
          <div className="ajuda-seguranca-menu__list-section">
            <h3 className="ajuda-seguranca-menu__list-title">SEGURANÇA</h3>
            <ul className="ajuda-seguranca-menu__product-list">
              <li className="ajuda-seguranca-menu__product-item">
                <h4>Sofri um roubo</h4>
              </li>
              <li className="ajuda-seguranca-menu__product-item">
                <h4>Acho que estão usando minha conta</h4>
              </li>
              <li className="ajuda-seguranca-menu__product-item">
                <h4>Denunciar um golpe</h4>
              </li>
              <li className="ajuda-seguranca-menu__product-item">
                <h4>Outra pessoa foi roubada</h4>
              </li>
              <li className="ajuda-seguranca-menu__product-item">
                <h4>Dicas de segurança</h4>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AjudaSegurancaMenu;


