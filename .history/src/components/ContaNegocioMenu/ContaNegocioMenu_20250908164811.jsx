import React from 'react';
import { motion } from 'framer-motion';
import './ContaNegocioMenu.css';
import menuNegocioMockup from '../../assets/menu-negocio-mockup.png';
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

const ContaNegocioMenu = () => {
  return (
    <motion.div 
      className="conta-negocio-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="conta-negocio-menu__container">
        <motion.div className="conta-negocio-menu__mockup" variants={itemVariants}>
          <img src={menuNegocioMockup} alt="Mockup Conta Negócio" />
          <div className="conta-negocio-menu__account">
            <a href="#" className="conta-negocio-menu__account-link">
              Conhecer Conta Negócio
              <img src={iconRight} alt="Arrow" />
            </a>
          </div>
        </motion.div>
        <motion.div className="conta-negocio-menu__list" variants={itemVariants}>
          <div className="conta-negocio-menu__list-section">
            <h3 className="conta-negocio-menu__list-title">Produtos e serviços para o seu negócio</h3>
            <ul className="conta-negocio-menu__product-list">
              <li className="conta-negocio-menu__product-item"><p>Maquininha de Cartão</p></li>
              <li className="conta-negocio-menu__product-item"><p>Gestão de Cobranças</p></li>
              <li className="conta-negocio-menu__product-item"><p>Pix para Empresas</p></li>
              <li className="conta-negocio-menu__product-item"><p>Capital de Giro</p></li>
              <li className="conta-negocio-menu__product-item"><p>Seguro Empresarial</p></li>
            </ul>
          </div>
          <div className="conta-negocio-menu__list-section">
            <h3 className="conta-negocio-menu__list-title">Parcerias e benefícios</h3>
            <ul className="conta-negocio-menu__product-list">
              <li className="conta-negocio-menu__product-item"><p>Programa de Fidelidade</p></li>
              <li className="conta-negocio-menu__product-item"><p>Descontos em Fornecedores</p></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContaNegocioMenu;
