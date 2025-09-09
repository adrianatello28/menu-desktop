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
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Maquininhas point</h4><p>Venda mais e pague menos taxas</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Point Tap</h4><p>Venda usando só o celular</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Tap to Pay no iPhone</h4><p>Receba por aproximação no iPhone</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Link de pagamento</h4><p>Cobre nas nas redes sociais</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Pix</h4><p>Receba no app ou maquininha</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Checkout para loja virtual</h4><p>Soluções sob medida para sua loja</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Planos de assinatura</h4><p>Faça cobranças automáticas</p></li>
             </ul>
           </div>
           <div className="conta-negocio-menu__list-section">
             <h3 className="conta-negocio-menu__list-title conta-negocio-menu__list-title--disabled">Serviços financeiros</h3>
             <ul className="conta-negocio-menu__product-list">
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Cartão de crédito</h4><p>Peça sem anuidade</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Empréstimos</h4><p>Pague em até 24x</p></li>
               <li className="conta-negocio-menu__product-item conta-negocio-menu__product-item--small"><h4>Rendimentos e investimentos</h4><p>Rende até 120% do CDI</p></li>
             </ul>
           </div>
           <div className="conta-negocio-menu__list-section">
             <h3 className="conta-negocio-menu__list-title conta-negocio-menu__list-title--disabled">Benefícios e PARCEIROS</h3>
             <ul className="conta-negocio-menu__product-list">
               <li className="conta-negocio-menu__product-item"><h4>Mercado Livre Negócios</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Ser revendedor Point</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Conhecer o Programa de parcerias</h4></li>
               <li className="conta-negocio-menu__product-item"><h4>Developers</h4></li>
             </ul>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContaNegocioMenu;
