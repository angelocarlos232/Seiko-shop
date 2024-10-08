import React, { useState } from 'react';
import { Text } from '@/components/custom/text';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  condition: string[];
  gender: string[];
  priceRange: { min: number; max: number };
  caseSize: string[];
  caseMaterial: string[];
  bandMaterial: string[];
  features: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    condition: [],
    gender: [],
    priceRange: { min: 0, max: 10000 },
    caseSize: [],
    caseMaterial: [],
    bandMaterial: [],
    features: [],
  });

  const handleCheckboxChange = (category: keyof FilterState, value: string) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category] as string[];
      const newCategory = updatedCategory.includes(value)
        ? updatedCategory.filter((item) => item !== value)
        : [...updatedCategory, value];
      
      const newFilters = { ...prevFilters, [category]: newCategory };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    setFilters((prevFilters) => {
      const newPriceRange = { ...prevFilters.priceRange, [type]: numValue };
      const newFilters = { ...prevFilters, priceRange: newPriceRange };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const renderCheckboxGroup = (title: string, category: keyof FilterState, options: string[]) => (
    <div className="mb-4">
      <Text variant="subheading" size="lg" className="mb-2">{title}</Text>
      {options.map((option) => (
        <div key={option} className="flex items-center mb-1">
          <input
            type="checkbox"
            id={`${category}-${option}`}
            checked={(filters[category] as string[]).includes(option)}
            onChange={() => handleCheckboxChange(category, option)}
            className="mr-2"
          />
          <label htmlFor={`${category}-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <Text variant="heading" size="xl" className="mb-4">SEARCH FILTER</Text>

      {renderCheckboxGroup('Condition', 'condition', ['New', 'Pre-owned'])}
      {renderCheckboxGroup('Gender', 'gender', ['Men', 'Women', 'Unisex'])}

      <div className="mb-4">
        <Text variant="subheading" size="lg" className="mb-2">Price Range</Text>
        <div className="flex justify-between">
          <input
            type="number"
            placeholder="MIN"
            value={filters.priceRange.min}
            onChange={(e) => handlePriceChange('min', e.target.value)}
            className="w-20 p-1 border rounded"
          />
          <input
            type="number"
            placeholder="MAX"
            value={filters.priceRange.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="w-20 p-1 border rounded"
          />
        </div>
      </div>

      {renderCheckboxGroup('Case Size', 'caseSize', ['21-30.9mm', '31-38.9mm', '39-40.9mm', '41-42.9mm', '43mm+'])}
      {renderCheckboxGroup('Case Material', 'caseMaterial', ['Stainless Steel', 'Titanium', 'Other'])}
      {renderCheckboxGroup('Band Material', 'bandMaterial', ['Metal', 'Silicone', 'Nylon', 'Fabric', 'Crocodile Leather', 'Leather'])}
      {renderCheckboxGroup('Features', 'features', ['Chronograph', 'Automatic', 'Quartz', 'Solar', 'Diving'])}

      <Button 
        variant="default" 
        className="w-full mt-4"
        onClick={() => onFilterChange(filters)}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterBar;