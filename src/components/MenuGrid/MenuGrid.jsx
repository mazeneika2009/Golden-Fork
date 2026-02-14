import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MenuGrid.css';

const menuItems = [
  {
    id: 1,
    title: "menuItems.wagyu_tartare.title",
    description: "menuItems.wagyu_tartare.description",
    price: "$85",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "menuItems.lobster_risotto.title",
    description: "menuItems.lobster_risotto.description",
    price: "$62",
    category: "Entrees",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "menuItems.seared_scallops.title",
    description: "menuItems.seared_scallops.description",
    price: "$58",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "menuItems.ossetra_caviar.title",
    description: "menuItems.ossetra_caviar.description",
    price: "$120",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "menuItems.foie_gras.title",
    description: "menuItems.foie_gras.description",
    price: "$45",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "menuItems.sea_bass.title",
    description: "menuItems.sea_bass.description",
    price: "$55",
    category: "Entrees",
    image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "menuItems.rack_of_lamb.title",
    description: "menuItems.rack_of_lamb.description",
    price: "$68",
    category: "Entrees",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "menuItems.king_crab.title",
    description: "menuItems.king_crab.description",
    price: "$75",
    category: "Entrees",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "menuItems.gold_steak.title",
    description: "menuItems.gold_steak.description",
    price: "$150",
    category: "Entrees",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "menuItems.chocolate_sphere.title",
    description: "menuItems.chocolate_sphere.description",
    price: "$28",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "menuItems.yuzu_tart.title",
    description: "menuItems.yuzu_tart.description",
    price: "$24",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "menuItems.tiramisu.title",
    description: "menuItems.tiramisu.description",
    price: "$32",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop"
  }
];

const MenuGrid = ({ addToCart }) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["all", "appetizers", "entrees", "desserts"];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleLoadLess = () => {
    setVisibleCount((prev) => Math.max(3, prev - 3));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(3);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2>{t('menuGrid.title')}</h2>
        <div className="separator"></div>
      </div>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button 
            key={category} 
            className={`category-btn ${activeCategory.toLowerCase() === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.charAt(0).toUpperCase() + category.slice(1))}
          >
            {t(`menuGrid.${category}`)}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="menu-card">
            <div className="card-image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="card-img"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>{t(item.title)}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{t(item.description)}</p>
            </div>
            <div className="card-actions">
              <button className="add-to-cart-btn" onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}>{t('menuGrid.addToCart')}</button>
            </div>
          </div>
        ))}
      </div>
      {(visibleCount < filteredItems.length || visibleCount > 3) && (
        <div className="load-more-container">
          {visibleCount < filteredItems.length && (
            <button className="load-more-btn" onClick={handleLoadMore}>{t('menuGrid.loadMore')}</button>
          )}
          {visibleCount > 3 && (
            <button className="load-more-btn" onClick={handleLoadLess}>{t('menuGrid.loadLess')}</button>
          )}
        </div>
      )}
    </section>
  );
};

export default MenuGrid;