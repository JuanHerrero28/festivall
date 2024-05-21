import { useState } from 'react';
import CategoryCard from "./CategoryCard";
import styles from "./CategorySection.module.css";

const categories = [
  { name: "Inflables y Castillos", description: "Atracciones inflables para fiestas y eventos al aire libre.", emoji: "🏰" },
  { name: "Juegos de Agua", description: "Toboganes y juegos acuáticos para refrescarse en verano.", emoji: "💦" },
  { name: "Juegos Mecánicos", description: "Atracciones emocionantes para todas las edades.", emoji: "🎡" },
  { name: "Juegos de Destreza", description: "Actividades con premios para desafiar habilidades.", emoji: "🎯" },
  { name: "Niños Pequeños", description: "Carruseles y áreas de juegos para los más pequeños.", emoji: "👶" },
  { name: "Todos", description: "Mostrar todos los productos.", emoji: "🔍" }
];

const CategorySection = ({ onCategoryClick }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    let updatedCategories = [...selectedCategories];
    if (category === "Todos") {
      updatedCategories = [];
    } else {
      const index = selectedCategories.indexOf(category);
      if (index !== -1) {
        updatedCategories.splice(index, 1);
      } else {
        updatedCategories.push(category);
      }
    }
    setSelectedCategories(updatedCategories);
    onCategoryClick(updatedCategories);
  };

  return (
    <div className={styles.categorySection}>
      {categories.map(category => (
        <CategoryCard
          key={category.name}
          categoryName={category.name}
          categoryDescription={category.description}
          categoryEmoji={category.emoji}
          isSelected={selectedCategories.includes(category.name)}
          onClick={() => handleCategoryClick(category.name)}
        />
      ))}
    </div>
  );
};

export default CategorySection;