import type { Component } from 'vue'

export interface Block {
  id: number
  name: string
  color: string
}

export interface Work {
  image: string
  title: string
  subtitle: string
  year: string
  language: string[]
  information: string
  projectLink: string
  githubLink: string
  detailedDescription?: string
  features?: string[]
  challenges?: string
  technologies?: string[]
  isAIGenerated?: boolean
}

export interface Skills {
  icon: Component
  skill: string
  chip: string
  color: string
  iconColor?: string
}
