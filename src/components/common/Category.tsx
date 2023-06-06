'use client'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { RootState, AppDispatch } from '@/store/store'
import { setSelectedCategory } from '@/store/setSelectedCategory'
import { Category } from '@/interface/category'
import { getAllCategories } from '@/api/category'

interface CategoryProps {
  data: Category[]
}

export default function Category({ data }: CategoryProps) {
  const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)
  const dispatch = useDispatch()

  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category.name) return
    dispatch(setSelectedCategory(category.name))
  }

  return (
    <ul className="py-[0.4rem] leading-[2.4rem] text-sm">
      {data.map((category) => (
        <li key={category.name}>
          <Link
            href="#"
            onClick={() => handleCategoryClick(category)}
            className="flex justify-between w-full text-neutral-navy-200 py-[0.2rem] pl-[2.4rem] pr-[1.2rem]"
          >
            <p className="flex">
              {category.name}
              {category.subcategories.length > 0 && (
                <Image
                  src="/icons/arrowDropDown.svg"
                  alt="아래화살표"
                  width={18}
                  height={18}
                  className="ml-[0.2rem]"
                />
              )}
            </p>
            <span>{category.totalCount.toLocaleString()}</span>
          </Link>
          {selectedCategory === category.name && (
            <ul className="bg-bg-2">
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.name}>
                  <Link
                    href="#"
                    className="flex justify-between w-full text-neutral-navy-200 py-[0.2rem] pl-[3.2rem] pr-[1.2rem]"
                  >
                    <p>{subcategory.name}</p>
                    <span>{subcategory.count.toLocaleString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
