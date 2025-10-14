import React from 'react';
import { motion } from 'framer-motion';
import './ContaNegocioMenu.css';
import menuNegocioMockup from '../../images/conta-negocio-menu-image.png';
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

const ContaNegocioMenu = () => {
  return (
    <motion.div
      className="conta-negocio-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="conta-negocio-menu__container">
        <motion.div className="conta-negocio-menu__account" variants={itemVariants}>
           <div className="conta-negocio-menu__account-image-container">
             <img src={menuNegocioMockup} alt="Conta Negócio Mockup" className="conta-negocio-menu__account-image" />
           </div>
           <p className="conta-negocio-menu__account-title">Soluções de venda, gestão e crédito</p>
           <a href="#" className="conta-negocio-menu__account-link">
             Conhecer Conta Negócio
             <img src={iconRight} alt="Arrow" />
           </a>
        </motion.div>
        <motion.div className="conta-negocio-menu__list" variants={itemVariants}>
           <div className="conta-negocio-menu__list-section">
             <h3 className="conta-negocio-menu__list-title">Soluções de vendas</h3>
             <ul className="conta-negocio-menu__product-list">
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Maquininhas Point</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Point Tap</h4><p>Venda usando só o celular</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Tap to Pay no iPhone</h4><p>Receba por aproximação no iPhone</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Link de pagamento</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Pix</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Checkout para loja virtual</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Planos de assinatura</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Sistema de gestão</h4></li>
             </ul>
           </div>
           <div className="conta-negocio-menu__list-section">
             <h3 className="conta-negocio-menu__list-title conta-negocio-menu__list-title--disabled">Serviços financeiros</h3>
             <ul className="conta-negocio-menu__product-list">
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Cartão de crédito</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Empréstimos</h4></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Rendimentos e<br />investimentos</h4></li>
             </ul>
           </div>
           <div className="conta-negocio-menu__list-section">
             <h3 className="conta-negocio-menu__list-title conta-negocio-menu__list-title--disabled">Benefícios e PARCEIROS</h3>
             <ul className="conta-negocio-menu__product-list">
               <li className="conta-negocio-menu__product-item"><h4>Mercado Livre Negócios</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Revendedor Point</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Programa de parcerias</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Developers</h4></li>
             </ul>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContaNegocioMenu;
