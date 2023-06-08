'use client'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { RootState, AppDispatch } from '@/store/store'
import { setSelectedCategory } from '@/store/setSelectedCategory'
import { Category, Subcategory } from '@/interface/category'
import { getAllCategories } from '@/api/category'
import { setSelectedTags } from '@/store/tagSlice'

interface CategoryProps {
  data: Category[]
  handleSubcategoryClick: (subcategory: Subcategory) => void
}

export default function Category({ data, handleSubcategoryClick }: CategoryProps) {
  const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)
  const dispatch = useDispatch()

  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category.name) {
      // 이미 선택된 카테고리를 다시 클릭한 경우
      dispatch(setSelectedTags(category.tags || [])) // 해당 카테고리의 태그를 담음
    } else {
      dispatch(setSelectedCategory(category.name))
      dispatch(setSelectedTags(category.tags || [])) // 선택한 카테고리의 태그 설정
    }
  }

  return (
    <ul className="py-[0.4rem] text-sm leading-[2.4rem]">
      {data.map((category) => (
        <li key={category.name}>
          <Link
            href="#"
            onClick={() => handleCategoryClick(category)}
            className="flex w-full justify-between py-[0.2rem] pl-[2.4rem] pr-[1.2rem] text-neutral-navy-200"
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
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className="flex w-full justify-between py-[0.2rem] pl-[3.2rem] pr-[1.2rem] text-neutral-navy-200"
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
