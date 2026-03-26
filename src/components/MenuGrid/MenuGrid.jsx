import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MenuGrid.css';

const MENU_ITEMS = [
  { id: 'wagyu_tartare', category: 'appetizers', price: '$45', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
  { id: 'lobster_risotto', category: 'entrees', price: '$55', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop' },
  { id: 'seared_scallops', category: 'appetizers', price: '$38', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop' },
  { id: 'ossetra_caviar', category: 'appetizers', price: '$120', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600&auto=format&fit=crop' },
  { id: 'foie_gras', category: 'appetizers', price: '$42', image: 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=600&auto=format&fit=crop' },
  { id: 'sea_bass', category: 'entrees', price: '$48', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop' },
  { id: 'rack_of_lamb', category: 'entrees', price: '$52', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop' },
  { id: 'king_crab', category: 'entrees', price: '$65', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop' },
  { id: 'gold_steak', category: 'entrees', price: '$250', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop' },
  { id: 'chocolate_sphere', category: 'desserts', price: '$25', image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=600&auto=format&fit=crop' },
  { id: 'yuzu_tart', category: 'desserts', price: '$18', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop' },
  { id: 'tiramisu', category: 'desserts', price: '$22', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop' }
];

const MenuGrid = ({ addToCart }) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  const handleLoadLess = () => {
    setVisibleItems(6);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <h2 className="section-title">{t('menuGrid.title')}</h2>
        
        <div className="menu-filters">
          {['all', 'appetizers', 'entrees', 'desserts'].map((category) => (
            <button 
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => {
                setFilter(category);
                setVisibleItems(6);
              }}
            >
              {t(`menuGrid.${category}`)}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.slice(0, visibleItems).map(item => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.image} alt={t(`menuItems.${item.id}.title`)} loading="lazy" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{t(`menuItems.${item.id}.title`)}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{t(`menuItems.${item.id}.description`)}</p>
                <button 
                  className="add-cart-btn"
                  onClick={() => addToCart({
                    id: item.id,
                    title: t(`menuItems.${item.id}.title`),
                    price: item.price,
                    quantity: 1
                  })}
                >
                  {t('menuGrid.addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-actions">
          {visibleItems < filteredItems.length ? (
            <button className="load-btn" onClick={handleLoadMore}>
              {t('menuGrid.loadMore')}
            </button>
          ) : (
            filteredItems.length > 6 && (
              <button className="load-btn" onClick={handleLoadLess}>
                {t('menuGrid.loadLess')}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;