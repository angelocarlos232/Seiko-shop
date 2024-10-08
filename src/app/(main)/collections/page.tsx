"use client";
import React, { useState } from 'react';
import FilterBar from '@/components/custom/filterbar';

export default function CollectionsPage() {
  const [filters, setFilters] = useState<unknown>({});

  const handleFilterChange = (newFilters: unknown) => {
    setFilters(newFilters);
    console.log(filters);
    // Here you would typically fetch or filter your watch data based on the new filters
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
    </div>
  )
}
